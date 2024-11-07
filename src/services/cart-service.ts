import { OrderDTO, OrderItemDTO } from '../models/order';
import * as cartRepository from '../localstorage/cart-repository';
import { ProductDTO } from '../models/product';

export function saveCart(cart: OrderDTO) {
  cartRepository.saveCart(cart);
}

export function getCart(): OrderDTO {
  return cartRepository.get();
}

export function addProductToCart(product: ProductDTO) {
  const cart = cartRepository.get();
  const item = cart.items.find((i) => i.productId === product.id);
  if (!item) {
    cart.items.push(new OrderItemDTO(product.id, 1, product.price, product.name, product.imgUrl));
    cartRepository.saveCart(cart);
  }
}

export function clearCart() {
  cartRepository.clear();
}