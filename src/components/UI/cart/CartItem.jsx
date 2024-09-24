import React from "react";
import { ListGroupItem } from "reactstrap";

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import foodCategoryImg01 from "../../../assets/images/hamburger.png";

const CartItem = (
  {item}
) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <ListGroupItem className="border-0 cart__item">
    <div className="cart__item-info d-flex gap-2">
      <img src={image01} alt="product-img" />

      <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
        <div>
          <h6 className="cart__product-title">
            {title}
          

          </h6>
          <p className=" d-flex align-items-center gap-5 cart__product-price">
            {quantity}
            x 
            <span>$
              {totalPrice}
             
              </span>
          </p>
          <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
            <span className="increase__btn" 
            onClick={incrementItem}
            >
          
        
     
      <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className="quantity">
              {quantity}
              </span>
            <span className="decrease__btn"
             onClick={decreaseItem}
             >
           
              <FontAwesomeIcon icon={faMinus} />
            </span>
          </div>
        </div>

        <span className="delete__btn" 
        onClick={deleteItem}
        >
   
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
    </div>
  </ListGroupItem>
  )
}

export default CartItem