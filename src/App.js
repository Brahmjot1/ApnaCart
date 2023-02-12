import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
function App() {
  const products = [
    {
      price: 100000,
      name: "Iphone",
      quantity: 0,
    },
    {
      price: 50000,
      name: "OnePlus",
      quantity: 0,
    },
    {
      price: 30000,
      name: "Oppo",
      quantity: 0,
    },
  ];
  let [productList, setproductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setproductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setproductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
      setproductList(newProductList);
      setTotalAmount(0);
    });
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= productList[index].quantity * productList[index].price;
    newProductList.splice(index, 1);
    setproductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({ name: name, price: price, quantity: 0 });
    setproductList(newProductList);
  };
  return (
    <>
      <Navbar />
      <AddItem addItem={addItem}/>
      <ProductList
        productsData={productList}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
      />
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
