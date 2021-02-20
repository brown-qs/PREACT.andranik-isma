import { currentWordData } from "../utils/redux-getters";
import { request } from "../services";
import {
  postLogin,
  getSearch,
  getConcept,
  getUserTask,
  getUserInfo,
  searchProgComment,
  saveUserTask,
  saveUserInfo,
  removeUser,
  saveConcept,
} from "../services";
import { CONCEPT_MASKS } from "../constants";

const actions = (store) => ({
  /***
   * Authentication
   */
  setErrors: (state, val) => {
    store.setState({ errors: val });
  },
  updateUser: (state, user) => {
    if (!user) {
      // logout
      global.localStorage.removeItem("user");
      request.options.headers.Authorization = "";
      store.setState({ user: undefined });
    } else {
      // login
      user = Object.assign({}, state.user, user) as User;
      global.localStorage.setItem("user", JSON.stringify(user));
      request.options.headers.Authorization = `Token ${user.token}`;
      store.setState({ user });
    }
  },
  login: async (state, form: any) => {
    try {
      store.setState({ loading: true });
      const user = await postLogin(form);
      store.setState({ loading: false });
      if (user.id == 0) {
        actions(store).setErrors(state, "Username or Password is incorrect.");
      } else {
        actions(store).updateUser(state, Object.assign({}, user, form));
        actions(store).setErrors(state, "");
      }
    } catch (e) {
      actions(store).setErrors(state, e.errors);
    }
  },

  /***
   * Knowledge Base
   */
  searchConcept: async (state, form: any) => {
    store.setState({ loading: true });
    try {
      if (form.baseRole == "ANY") form.baseRole = "";
      if (form.frequency == "ANY") form.frequency = "";
      if (form.rootNumber == "ANY") form.rootNumber = "";
      if (form.synNumber == "ANY") form.synNumber = "";
      if (form.classDist == "ANY") form.classDist = "";
      if (form.role == "ANY") form.role = "";

      const results = await getSearch({ form });
      store.setState({ loading: false });
      actions(store).setSearchResults(state, results);
    } catch (e) {
      store.setState({ loading: false });
    }
  },
  searchProgComment: async (state, form: any) => {
    store.setState({ loading: true });
    try {
      const results = await searchProgComment({ ...form });
      store.setState({ loading: false });
      actions(store).setSearchResults(state, results);
    } catch (e) {
      store.setState({ loading: false });
    }
  },
  setSearchResults: (state, result) => {
    store.setState({
      searchResults: result,
    });
  },
  addWord: async (state, newWord) => {
    let words = [...state.words];
    store.setState({ loading: true });
    try {
      const results = await getConcept({
        userId: state.user.id,
        conceptId: newWord.id,
      });
      store.setState({ loading: false });
      newWord = { ...newWord, data: results.data, mask: 0 };
      console.log(newWord);
      words.push(newWord);
      store.setState({
        words,
        currentWord: newWord.id,
      });
    } catch {
      store.setState({ loading: false });
    }
  },
  removeWord: (state, wordId) => {
    if (wordId == state.currentWord) store.setState({ currentWord: null });
    store.setState({
      words: [...state.words].filter((val) => val.id != wordId),
    });
  },
  setCurrentWord: (state, wordId) => {
    store.setState({ currentWord: wordId });
  },
  updateCurrentWord: (state, data) => {
    let prev = [...state.words];
    let newData = prev.map((one) => {
      if (one.id == state.currentWord) {
        one.data[data.key] = data.value;
        one.mask |=
          1 <<
          CONCEPT_MASKS.findIndex(
            (name) =>
              name ==
              (data.key.includes("Definition") ? "definition" : data.key)
          );
      }
      return one;
    });
    store.setState({ words: newData });
  },
  saveCurrentConcept: async (state) => {
    store.setState({ loading: true });
    try {
      await saveConcept({
        userId: state.user.id,
        concept: {
          id: currentWordData(state).id,
          mask: currentWordData(state).mask,
          ...currentWordData(state).data,
        },
      });
      store.setState({ loading: false });
    } catch {
      store.setState({ loading: false });
    }
  },

  /***
   * Tasks
   */
  loadTasks: async (state) => {
    store.setState({ loading: true });
    try {
      const inbox = await getUserTask({
        userId: state.user.id,
        inbox: true,
      });
      store.setState({ inbox });
      const outbox = await getUserTask({
        userId: state.user.id,
        inbox: false,
      });
      store.setState({ outbox });
      store.setState({ hasTaskLoaded: true });
      store.setState({ loading: false });
    } catch {
      store.setState({ loading: false });
    }
  },
  saveUserTask: async (state, data) => {
    let newData = [...state[data.inout]];
    newData[data.id] = data.task;
    actions(store).saveTasks(state, { ...data, newData });
  },
  removeUserTasks: async (state, data) => {
    let newData = [...state[data.inout]];
    data.rows.map((one) => newData.splice(one.tableData.id, 1));
    actions(store).saveTasks(state, { ...data, newData });
  },
  newUserTask: (state, data) => {
    let newData = [...state.outbox];
    newData.push({
      ...data,
      from_id: state.user.id,
      taskDate: new Date().toISOString().split("T")[0],
      taskTime: new Date().toLocaleTimeString(),
    });
    actions(store).saveTasks(state, { ...data, newData, inout: "outbox" });
    actions(store).loadTasks(state);
  },
  saveTasks: async (state, data) => {
    store.setState({ loading: true });
    try {
      await saveUserTask({
        userId: state.user.id,
        data: data.newData,
        inbox: data.inout == "inbox",
      });
      if (data.inout == "inbox") store.setState({ inbox: data.newData });
      if (data.inout == "outbox") store.setState({ outbox: data.newData });
      store.setState({ loading: false });
    } catch {
      store.setState({ loading: false });
    }
  },
  loadUsers: async (state) => {
    store.setState({ loading: true });
    try {
      let users = await getUserInfo({ userId: 0 });
      store.setState({ users });
      store.setState({ hasUsersLoaded: true });
      store.setState({ loading: false });
    } catch {
      store.setState({ loading: false });
    }
  },
  saveUserInfo: async (state, user) => {
    store.setState({ loading: true });
    try {
      await saveUserInfo({ user });
      if (user.id == 0) {
        actions(store).loadUsers(state);
      } else {
        store.setState({
          users: [...state.users].map((one) =>
            one.id == user.id ? user : one
          ),
        });
        store.setState({ hasUsersLoaded: true });
        store.setState({ loading: false });
      }
    } catch {
      store.setState({ loading: false });
    }
  },
  deleteUser: async (state, userId) => {
    store.setState({ loading: true });
    try {
      await removeUser({ id: userId });
      store.setState({
        users: [...state.users].filter((one) => one.id != userId),
      });
      store.setState({ hasUsersLoaded: true });
      store.setState({ loading: false });
    } catch {
      store.setState({ loading: false });
    }
  },
});

export default actions;
