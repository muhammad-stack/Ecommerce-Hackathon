"use client";
import { useDispatch } from "react-redux";
import  { cartActions } from "@/store/slice/cartSlice";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

const AddtoCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ quantity: 1 }));
    toast.success("Product added Succssefully");
  };
  return (
    
      <Button onClick={addItem} variant={"default"} className="mt-5 font-bold px-6  gap-x-3">
        <ShoppingCart />
        Add To Cart
      </Button>
    
  );
};

export default AddtoCart;
