/******************************************************
 *            STORE DEFINITION & CREATION             *
 * HERE YOU CAN DEFINE STORE AND GIVE DEFAULT VALUES. *
 ******************************************************/

import createStore from "redux-zero";
import parseStorageGet from "../utils/parse-storage-get";
const appStore = (createStore as any)({
  /***
   * System
   */
  loading: false,
  enqueueSnackbar: (_) => null,
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
