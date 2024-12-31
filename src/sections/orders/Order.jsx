import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        borderRadius: "5px",
        border: "2px solid",
        borderColor: "colors.website",
        p: "23px 65px",
        "& p": {
          fontSize: "20px",
          lineHeight: "22px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "colors.website",
          mb: "41px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          {order.date}
        </Typography>
        <Typography
          sx={{
            fontWeight: "800",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/user/orders/1?status=${order.statusCode}`)}
        >
          {t("Offer")}
        </Typography>
      </Box>
      <Box
        sx={{
          fontSize: "18px",
          fontWeight: "700",
          lineHeight: "20px",
        }}
      >
        {!isDashboard && <Typography>{order.owner}</Typography>}
        <Typography
          sx={{
            mt: "37px",
            mb: "34px",
          }}
        >
          طلب جديد رقم {order.num}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          حالة الطلب الآن
        </Typography>
        <Typography
          sx={{
            color: `${
              order.operation == 0 ? "colors.mainRed" : "colors.mainGreen"
            }`,
            fontWeight: "700",
            lineHeight: "25px",
          }}
        >
          {order.status}
        </Typography>
      </Box>
    </Box>
  );
};

export default Order;
