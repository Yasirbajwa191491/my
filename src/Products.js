import React, { useContext } from "react";
import { CartContext } from "./components/Cart";
import {products} from "./components/products";
import Dataa from "./Dataa";

const Items = () => {
  //const { removeItem, increment, decrement } = useContext(CartContext);

  
  return (
    <>
     {
      products.map((ele)=>{
  const  { id, description, title, img, price, quantity }=ele;
  return <Dataa id={id} description={description} title={title} img={img} price={price} quantity={quantity}  /> 
  })
     }
    </>
  );
};

export default Items;
