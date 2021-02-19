import FetchRequest from "./utils/request";

export const request = new FetchRequest({
  prefix: `${process.env.API_HOST}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
/***
 * Authentication
 *
 */
export async function postLogin(form: any) {
  return request.post("/user_login", form).then((res) => res);
}

/***
 * Knowledge Base
 */
export async function getSearch(form: any) {
  return request.post("/search_by_name", form).then((res) => res);
}

export async function searchProgComment(form: any) {
  return request.post("/search_prog_comment", form).then((res) => res);
}

export async function getConcept(form: any) {
  return request.post("/get_concept", form).then((res) => res);
}

/***
 * Tasks
 */

export async function getUserTask(form: any) {
  return request.post("/get_user_task", form).then((res) => res);
}

export async function getUserInfo(form: any) {
  return request.post("/get_user_info", form).then((res) => res);
}

export async function saveUserTask(form: any) {
  return request.post("/save_user_task", form).then((res) => res);
}
export async function removeUser(form: any) {
  return request.post("/remove_user", form).then((res) => res);
}

export async function saveUserInfo(form: any) {
  return request.post("/save_user_info", form).then((res) => res);
}
