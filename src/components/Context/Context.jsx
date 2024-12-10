import axios from "axios";
import { createContext, useState } from "react";

import useApi from "@/hooks/useApi";

export let Context = createContext("");
export function ContextProvider({ children }) {
  let [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  let baseUrl = import.meta.env.VITE_API_URL;
  const address_type = [
    {
      key: "Home",
      value: "منزل",
    },
    {
      key: "Office",
      value: "مكتب",
    },
    {
      key: "Work",
      value: "عمل",
    },
    {
      key: "Company",
      value: "شركة",
    },
    {
      key: "Other",
      value: "أخرى",
    },
  ];

  const api = useApi();

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
        user,
        setUser,
        baseUrl,
        getProducts,
        addToCart,
        getUserCart,
        allCategories,
        allVendors,
        vendorData,
        address_type,
      }}
    >
      {children}
    </Context.Provider>
  );
}
