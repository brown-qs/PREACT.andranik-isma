import { request } from "../services";
import { postLogin, PostLoginForm, postSearch } from "../services";

const actions = (store) => ({
  setErrors: (state, val) => {
    store.setState({ errors: val });
  },
  cleanErrors: (state) => {
    store.setState({ errors: {} });
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
  login: async (state, form: PostLoginForm) => {
    try {
      const user = await postLogin(form);
      actions(store).updateUser(state, user);
      actions(store).setErrors(state, "");
    } catch (e) {
      actions(store).setErrors(state, e.errors);
    }
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

  updateConceptSearch: (state, updates) => {
    store.setState({ conceptSearch: { ...state.conceptSearch, ...updates } });
  },

  doConceptSearch: async (state) => {
    const results = await postSearch(state.conceptSearch);
  },
});

export default actions;
