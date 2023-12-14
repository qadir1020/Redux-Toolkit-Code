import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";
import { UseSelector } from "react-redux";

const Cart = () => {
  const items = useSelector(state => state);
  console.log('Items',items);

  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        
      </h3>
    </div>
  );
};

export default Cart;
