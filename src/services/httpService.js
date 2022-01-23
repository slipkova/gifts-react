import { create } from "apisauce";
export const BASE_URL = "http://localhost:9000/";

const client = create({
  baseURL: BASE_URL,
});

export async function setAuthToken(token) {
  if (token) {
    client.addAsyncRequestTransform(async (request) => {
      request.headers["Authorization"] = `Token ${token}`;
    });
  }
}

export default {
  client,
  setAuthToken,
};
