
import api from "./httpService";

const gListUrl = "api/gift-list/";

export async function getLists() {
  const response = await api.client.get(gListUrl);
  return response;
}

export async function getUsers() {
  const response = await api.client.get("api/users/");
  return response;
}

export async function getList(id) {
  const response = await api.client.get(`${gListUrl}${id}/`);
  return response;
}

export async function createList(list) {
  const response = await api.client.post(gListUrl, { ...list });
  return response;
}

export async function putList(list) {
  const response = await api.client.put(`${gListUrl}${list.id}/`, { ...list });
  return response;
}

export async function joinList(token) {
  const response = await api.client.put(gListUrl, { token });
  return response;
}

export async function leaveList(lId) {
  const response = await api.client.delete(gListUrl, { id: lId });
  return response;
}

export async function deleteList(id) {
  const response = await api.client.delete(`${gListUrl}${id}/`);
  return response;
}

export default {
  getLists,
  getUsers,
  getList,
  createList,
  putList,
  joinList,
  leaveList,
  deleteList,
};
