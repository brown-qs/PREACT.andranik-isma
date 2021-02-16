import { request } from "../services";
import { postLogin, postSearch } from "../services";
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
    const results = await postSearch({ form });
    store.setState({ loading: false });
    actions(store).setSearchResults(state, results);
  },
  setSearchResults: (state, result) => {
    store.setState({
      searchResults: result,
    });
  },
  addWord: (state, newWord) => {
    let words = [...state.words];
    words.push(newWord);
    store.setState({
      words,
      currentWord: newWord,
    });
  },
  removeWord: (state, wordId) => {
    if (wordId == state.currentWord.id) store.setState({ currentWord: {} });
    store.setState({
      words: [...state.words].filter((val) => val.id != wordId),
    });
  },
  setCurrentWord: (state, word) => {
    store.setState({ currentWord: word });
  },
});

export default actions;
