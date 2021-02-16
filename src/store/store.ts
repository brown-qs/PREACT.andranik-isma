import createStore from "redux-zero";
import parseStorageGet from "../utils/parse-storage-get";

const appStore = (createStore as any)({
  /***
   * System
   */
  loading: false,
  /***
   * Authentication
   */
  user: parseStorageGet("user") || null,
  errors: "",

  /***
   * Knowledge Base
   */
  searchResults: [],
  words: [],
  currentWord: {},
  defLang: "",
});

export default appStore;
