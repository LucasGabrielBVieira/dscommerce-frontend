import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findAll() {
  return axios.get(
    `${BASE_URL}/products?size=12&page=0&sort=name,desc&name=pc%20gamer`
  );
}

export function findById(id: number) {
  return axios.get(`${BASE_URL}/products/${id}`);
}
