import React from 'react';
import { Box } from "@mui/material";
import logoImg from "../../../assets/product/product.png";
// Import local icons
import trash from "../../../assets/product/trash.svg";
import addIcon from "../../../assets/product/addIcon.svg";

const Cart = () => {
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          height: '100vh',
          paddingTop: '20px',
          backgroundColor: 'white',
          borderRight: '1px solid #ccc',
          width: '8.5%',
          zIndex: 9999,
          position: 'fixed',
          overflowY: 'auto',
          left: 0,
          top: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            width: '100%',
            paddingTop: '20px',
          }}
        >
          <Box
            sx={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            الإجمالى الكلى
          </Box>
          <Box
            sx={{
              color: 'green',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            21,500.00 جنيهاً
          </Box>
          <Box
            sx={{
              color: 'green',
              fontWeight: 'regular',
              fontSize: '10px',
              width: '99.5%',
              height: '30px',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid green',
              borderRadius: '50px',
            }}
          >
            الإنتقال على عربة التسوق
          </Box>
        </Box>

        {[...Array(4)].map((_, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              width: '100%',
              marginTop: '20px',
            }}
          >
            <img
              src={logoImg}
              alt="Product Logo"
              style={{
                width: '80%',
              }}
            />
            <Box
              sx={{
                color: 'green',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              11,500.00 جنيهاً
            </Box>
            <Box
              sx={{
                display: 'flex',
                color: 'green',
                fontWeight: 'bold',
                fontSize: '12px',
                width: '80%',
                height: '30px',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid green',
                borderRadius: '5px',
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                  borderLeft: '1px solid black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={trash}
                  alt="Add Icon"
                  style={{ width: '40%', height: 'auto' }}
                />
              </Box>
              <Box
                sx={{
                  height: '100%',
                  width: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}
              >
                5
              </Box>
              <Box
                sx={{
                  height: '100%',
                  borderRight: '1px solid black',
                  width: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={addIcon}
                  alt="Delete Icon"
                  style={{ width: '40%', height: 'auto' }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </div>
    </>
  );
};

export default Cart;
