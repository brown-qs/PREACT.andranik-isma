import createStore from "redux-zero";
import parseStorageGet from "../utils/parse-storage-get";

const appStore = (createStore as any)({
  user: parseStorageGet("user") || null,
  orders: [],
  errors: "",
  words: [],
  currentWord: {},

  conceptSearch: { searchingText: "" },
});

export default appStore;
