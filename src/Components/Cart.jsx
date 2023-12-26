import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slice/cartSlice";
import { UseSelector } from "react-redux";

const Cart = () => {
  const items = useSelector(getItemsSelector);
  const total = items.reduce((a, b) => a + b.price, 0);
  console.log('Items', items);

  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items:{items.length} (Rs. {total})
      </h3>
    </div>
  );
};

export default Cart;
