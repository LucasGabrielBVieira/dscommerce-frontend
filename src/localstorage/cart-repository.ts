import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function saveCart(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem(CART_KEY, str);
}

export function get(): OrderDTO {
  const str = localStorage.getItem(CART_KEY) || '{"items": []}';
  const objStr = JSON.parse(str);

  const cart = new OrderDTO();
  objStr.items.forEach((item: OrderItemDTO) => {
    cart.items.push(new OrderItemDTO(item.productId, item.quantity, item.price, item.name, item.imgUrl));
  });

  return cart;
}

export function clear() {
  localStorage.removeItem(CART_KEY);
  // localStorage.setItem(CART_KEY, '{"items": []}');
}