import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'
import { Navigate, useNavigate } from 'react-router-dom'

const Cart = () => {
  const{cartItems,food_list,removeFromCart, getTotalAmount  }=useContext(StoreContext)
  const navigate = useNavigate();
  return (
    <div className='cart'>
  <div className="cart_items">
      <div className="cart_items_title">
        <p>Items</p> 
        <p>Title</p> 
        <p>Price</p> 
        <p>Quantity</p> 
        <p>Total</p> 
        <p>Remove</p> 
      </div>
      <br />
      <hr />
      {
        food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <div>
              <div key={index} className="cart_items_title cart_items_item ">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
                <hr />
              </div>
            )
          }
        })
      }
    </div>  
    <div className="cart_bottom">
      <div className="cart_total">
        <h2>Cart Totals</h2>
      <hr />
      <div className="cart_total_details">
        <p>Subtotal</p>
        <p>{getTotalAmount()}</p>
      </div>
      <hr />
      <div className="cart_total_details">
        <p>Delivery Fee</p>
        <p>{50}</p>
      </div>
      <hr />
      <div className="cart_total_details">
        <b>Total</b>
        <b>{getTotalAmount() + 50}</b>
      </div>
      <button onClick={()=>navigate('/PlaceOrder')}> PROCEED TO CHECKOUT </button>
    </div> 
    <div className="cart_promocode">
      <div>
        <p>If you have a promo code , Enter it here</p>
        <div className="cart_promocode_input">
          <input type="text" placeholder='promo code' />
          <button>Check</button>
        </div>
      </div>
      </div>
      
      </div>   
    </div>
  )
}

export default Cart
