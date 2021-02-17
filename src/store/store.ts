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
  currentWord: null,

  /***
   * Tasks
   */
  hasTaskLoaded: false,
  inbox: [],
  outbox: [],

  /***
   * Administration
   */
  hasUsersLoaded: false,
  users: [],
});

export default appStore;
