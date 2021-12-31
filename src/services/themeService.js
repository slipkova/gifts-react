import api, { BASE_URL } from "./httpService";

const itemUrl = "api/theme/";

export async function getListIcons() {
  const response = await api.client.get(itemUrl + "icon/list/");
  return response;
}

export async function getThemeColors() {
  const response = await api.client.get(itemUrl + "color/");
  return response;
}

export function getIcon(url) {
  return `${BASE_URL}${url.substr(1, url.lenght)}`;
}

export default {
  getListIcons,
  getIcon,
  getThemeColors,
};
