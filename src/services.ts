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

export async function getConcept(form: any) {
  return request.post("/get_concept", form).then((res) => res);
}
