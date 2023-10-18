import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2';

const PaypalButton = ({ total }) => {
    const state = useContext(GlobalState)
    const [, setCart] = state.userAPI.cart;
    const [token] = state.token
    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }
  const onCancel = (data) => {
    console.log('The payment was cancelled!', data);
  };

  const onError = (err) => {
    console.log('Error!', err);
  };

  const options = {
    clientId: process.env.PAYPAL_CLIENT_ID, // Replace with your PayPal Client ID
    currency: 'USD',
  };

  const clearCartAndAlert = () => {
    console.log('The payment was succeeded!');
    // Clear the cart
    setCart([]);
    addToCart([]);
    alert('You have successfully placed an order.');
  }

  return (
    <PayPalButton
      amount={total}
      onSuccess={(details, data) => {
        clearCartAndAlert();
      }}
      onCancel={onCancel}
      onError={onError}
      options={options}
    />
  );
};

export default PaypalButton;