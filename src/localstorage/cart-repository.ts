import { OrderDTO } from "../models/order";

export function saveCart(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem("cart", str);
}

export function get(): OrderDTO {
  const str = localStorage.getItem("cart") || '{"items": []}';
  return JSON.parse(str);
}