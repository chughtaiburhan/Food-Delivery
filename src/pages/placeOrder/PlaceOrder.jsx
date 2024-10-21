import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {
  
    const {getTotalAmount} = useContext(StoreContext);
  return (
    <form className='place_order'>
        <div className="place_order_left">
    <p className='title'> Delivery Information</p>

    <div className="multi_fields">
        <input
         type="text" 
        placeholder='First name' />
        <input
         type="text" 
        placeholder='Last name' />
    </div>
    <input type="email" placeholder='Enter Email' />
    <input type="text" placeholder='Street' />

    <div className="multi_fields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
    </div>

    <div className="multi_fields">
        <input type="text" placeholder='Zip code' />
        <input type="text" placeholder='Country' />
    </div>

    <input type="text" placeholder='Phone' />

        </div>

        {/* Right */}
        <div className="place_order_right">
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
      <button> PROCEED TO PAYMENT </button>
    </div>
        </div>

    </form>
  )
}

export default PlaceOrder
