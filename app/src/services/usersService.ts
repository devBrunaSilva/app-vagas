import api from "./api";

async function getAll() {
  try {
    return await api.get("/usuarios");
  } catch (error) {
    console.error("Error: ", error);
  }
}

async function get(id) {
  try {
    return await api.get(`/usuarios/${id}`);
  } catch (error) {
    console.error("Error: ", error);
  }
}

export default {
  getAll,
  get,
};
