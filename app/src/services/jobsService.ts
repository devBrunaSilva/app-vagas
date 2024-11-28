import api from "./api";

async function getAll() {
  try {
    return await api.get("/vagas");
  } catch (error) {
    console.error("Error: ", error);
  }
}

async function get(id) {
  try {
    return await api.get(`/vagas/${id}`);
  } catch (error) {
    console.error("Error: ", error);
  }
}

export default {
  getAll,
  get,
};
