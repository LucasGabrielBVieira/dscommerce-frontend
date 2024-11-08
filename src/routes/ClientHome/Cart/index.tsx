import * as cartService from '../../../services/cart-service'
import { useState } from 'react';
import './style.css'
import { OrderDTO } from '../../../models/order';
import { Link } from 'react-router-dom';


function Cart() {

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  function handleClearClick() {
    cartService.clearCart();
    setCart(cartService.getCart());
  }

  function handleIncriaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  return (
    <main>
      <section id="cart-container" className="dsc-container">
        {
          cart.items.length === 0
            ? (
              <div>
                <h2 className='dsc-section-title dsc-mb20'>Seu carrinho está vazio</h2>
              </div>
            ) : (
              <div className="dsc-card dsc-mb20">
                {
                  cart.items.map(item => (
                    <div key={item.productId} className="dsc-cart-item-container ds c-line-bottom">
                      <div className="dsc-cart-item-left">
                        <img src={item.imgUrl} alt={item.name} />
                        <div className="dsc-cart-item-description">
                          <h3>{item.name}</h3>
                          <div className="dsc-cart-item-qtd-container">
                            <div className="dsc-cart-item-qtd-button">-</div>
                            <p>{item.quantity}</p>
                            <div onClick={() => handleIncriaseItem(item.productId)} className="dsc-cart-item-qtd-button">+</div>
                          </div>
                        </div>
                      </div><div className="dsc-cart-item-rigth">
                        R$ {item.subTotal.toFixed(2)}
                      </div>
                    </div>
                  ))
                }
                <div className="dsc-cart-total-container">
                  <h3>R$ {cart.total.toFixed(2)}</h3>
                </div>
              </div>
            )
        }
        <div className="dsc-btn-page-container">
          <div className="dsc-btn dsc-btn-white" onClick={handleClearClick}>Limpar Carrinho</div>
          <div className="dsc-btn dsc-btn-blue">Finalizar Pedido</div>
          <Link to="/catalog">
            <div className="dsc-btn dsc-btn-white">Continuar Comprando</div>
          </Link>

        </div>
      </section>
    </main>
  );

}

export default Cart;