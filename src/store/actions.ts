import { request } from "../services";
import { postLogin, getSearch, getConcept } from "../services";
import { DEF_LANG } from "../constants";

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
    if (wordId == state.currentWord.id) store.setState({ currentWord: {} });
    store.setState({
      words: [...state.words].filter((val) => val.id != wordId),
    });
  },
  setCurrentWord: (state, wordId) => {
    store.setState({ currentWord: wordId });
  },
});

export default actions;
