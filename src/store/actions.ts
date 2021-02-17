import { request } from "../services";
import {
  postLogin,
  getSearch,
  getConcept,
  getUserTask,
  getUserInfo,
} from "../services";

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
  doSearch: async (state, form: any) => {
    store.setState({ loading: true });
    try {
      const results = await getSearch({ form });
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
      newWord = { ...newWord, data: results.data };
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
  loadUsers: async (state) => {
    store.setState({ loading: true });
    try {
      const users = await getUserInfo({ userId: 0 });
      store.setState({ users });
      store.setState({ hasUsersLoaded: true });
      store.setState({ loading: false });
    } catch {
      store.setState({ loading: false });
    }
  },
});

export default actions;
