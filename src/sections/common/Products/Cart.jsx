import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

// Import local icons
import trash from "~/assets/product/trash.svg";
import addIcon from "~/assets/product/addIcon.svg";
import { Context } from "~/components/Context/Context";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Cart = () => {
  let [products, setProducts] = useState([]);
  const { t } = useTranslation();

  let { getUserCart, baseUrl } = useContext(Context);
  async function getUserAllItems() {
    let res = await getUserCart();
    setProducts(res?.data?.cart_products);
  }

  async function deleteFromCart(productId) {
    let res = await axios.delete(`${baseUrl}/user/cart/${productId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }

  async function updateQuantity(productId, quantity) {
    let res = await axios.patch(
      `https://Joumla.store/api/v1/user/cart/${productId}`,

      {
        quantity: quantity,
      },

      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  useEffect(() => {
    getUserAllItems();
  }, []);
  return (
    <>
      {/* Style tag for custom scrollbar */}
      <style>
        {`
          .cart-container {
            scrollbar-width: thin; /* For Firefox */
            scrollbar-color: #aaa #f5f5f5; /* For Firefox */
          }
          .cart-container::-webkit-scrollbar {
            width: 1px; /* Width of the scrollbar */
          }
          .cart-container::-webkit-scrollbar-thumb {
            background-color: #aaa; /* Scrollbar thumb color */
            border-radius: 1px; /* Rounded edges for the thumb */
          }
          .cart-container::-webkit-scrollbar-thumb:hover {
            background-color: #888; /* Thumb color on hover */
          }
          .cart-container::-webkit-scrollbar-track {
            background-color: #f5f5f5; /* Scrollbar track color */
          }
        `}
      </style>
      <div
        className="cart-container"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <ToggleOpen>
          <Box
            sx={{
              borderRight: "1px solid #ccc",
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              width: "100%",
              height: "100%",

              paddingTop: "20px",
            }}
          >
            <Box
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {t("Total Amount")}
            </Box>
            <Box
              sx={{
                color: "green",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              21,500.00 {t("Currency")}
            </Box>
            <Box
              component={Link}
              to="/cart"
              sx={{
                color: "green",
                fontWeight: "regular",
                fontSize: "10px",
                width: "99.5%",
                height: "30px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid green",
                borderRadius: "50px",
              }}
            >
              {t("Go to Shopping Cart")}
            </Box>
          </Box>

          {products?.map((product, index) => (
            <Box
              key={index}
              id={product.di}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <img
                src={product?.product?.image}
                alt={product.product.name}
                style={{
                  width: "80%",
                }}
              />
              <Box
                sx={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                {product.product.price_afte_discount}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "12px",
                  width: "80%",
                  height: "30px",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid green",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    width: "50%",
                    height: "100%",
                    borderLeft: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={(e) => {
                    deleteFromCart(product.product.id);
                  }}
                >
                  <img
                    src={trash}
                    alt="Add Icon"
                    style={{ width: "40%", height: "auto" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  {product.quantity}
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    borderRight: "1px solid black",
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    updateQuantity(product.di, product.quantity + 1);
                  }}
                >
                  <img
                    src={addIcon}
                    alt="Delete Icon"
                    style={{ width: "40%", height: "auto" }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </ToggleOpen>
      </div>
    </>
  );
};

export default Cart;

function ToggleOpen({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        pointerEvents: "none",
        transition: ".3s",

        transform: `translateX(${isOpen ? 0 : "-100%"})`,
      }}
    >
      <Box
        onClick={() => setIsOpen((v) => !v)}
        sx={{
          background: "white",
          position: "absolute",
          top: "50vh",
          pointerEvents: "auto",
          right: 0,
          display: "grid",
          placeContent: "center",
          padding: "1em",
          border: "1px solid #ccc",
          transform: "translate(100%, -50%) translateX(-1px)",
          cursor: "pointer",
          borderLeft: "none",
        }}
      >
        {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          height: "100vh",
          pointerEvents: "auto",
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            height: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
