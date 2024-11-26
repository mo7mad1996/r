import axios from "axios";
import { createContext, useState } from "react";

export let Context = createContext("");
export function ContextProvider({ children }) {
  let [userName, setUserName] = useState("");
  let baseUrl = "https://joumla.store/api/v1";

  //  Get All Products
  async function getProducts() {
    try {
      let res = await axios.get(`${baseUrl}/products`);
      return res;
    } catch (err) {
      return err;
    }
  }
  // Add To Cart
  async function addToCart(productId, quantity) {
    try {
      let res = await axios.post(
        `${baseUrl}/user/cart`,
        {
          product_id: productId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res;
    } catch (err) {
      return err;
    }
  }

  // Get User Cart
  async function getUserCart() {
    try {
      let res = await axios.get(`${baseUrl}/user/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res;
    } catch (err) {
      return err;
    }
  }



  // Get All Vendors

  async function allVendors() {
    try {
      let res = await axios.get(`${baseUrl}/vendor`);
      return res;
    } catch (err) {
      return err;
    }
  }


  // Get Vendor Data 
  async function vendorData(id) {
    try {
      let res = await axios.get(`${baseUrl}/vendor/${id}`);
      return res;
    } catch (err) {
      return err;
    }
  }


  // All Categories
  async function allCategories() {
    try {
      let res = await axios.get(`${baseUrl}/main_categories`);
      return res;
    } catch (err) {
      return err;
    }
  }


  



  return (
    <Context.Provider
      value={{
        userName,
        setUserName,
        baseUrl,
        getProducts,
        addToCart,
        getUserCart,
        allCategories,
        allVendors,
        vendorData
      }}
    >
      {children}
    </Context.Provider>
  );
}
