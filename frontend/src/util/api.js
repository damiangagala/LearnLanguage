import axios from "axios";

export function api() {
  const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    withXSRFToken: true,
  });

  return api;
}

export async function mainLoader({ params }) {
  try {
    const result = await api().get(`/api/${params.language}/${params.type}`);
    return { data: result.data };
  } catch (error) {
    if (error.status === 404) throw new Error("Page not found");
    throw new Error("Can't download data");
  }
}

export async function getAdminData(lang) {
  try {
    const words = await api().get(`/api/${lang}/words`);
    const grammar = await api().get(`/api/${lang}/grammar`);
    return { words: words.data, grammar: grammar.data };
  } catch {
    throw new Error("Can't download data");
  }
}

export async function deleteItem(table, item) {
  console.log(table, item);
  try {
    console.log(await api().delete(`/api/${table}/${item}`));
  } catch {
    throw new Error("Nie udało się usunąć zawartości");
  }
}

export async function editItem(data, id, table) {
  try {
    return await api().put(`/api/${table}/${id}`, data);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function login(creds) {
  await api().get("/sanctum/csrf-cookie");
  try {
    const res = await api().post("/api/login", creds);
    return res.status;
  } catch (error) {
    if (error.status === 401) return { error: "Invalid credentials" };
  }
}
