import React from "react";
import Product from "./Product";
export default function ProductList(props) {
  return(
    <>
  {props.productsData.length>0?props.productsData.map(function (product, idx) {
    return (
    <Product
        key={idx}
        index={idx}
        product={product}
        incrementQuantity={props.incrementQuantity}
        decrementQuantity={props.decrementQuantity}
        removeItem={props.removeItem}
      />
    );
  }):
  <h1>No Data Found</h1>
  }
  </>
  )
}
