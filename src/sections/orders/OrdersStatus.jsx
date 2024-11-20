import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CheckOutlined, Close } from "@mui/icons-material";

const OrdersStatus = ({ statusArray }) => {
  return (
    // <Box sx={{ px: "50px", width: "1270px" }}>
    <Box
      sx={{
        position: "relative",
        width: { xs: "1006px", xl: "1270px" },
        height: "17px",
        borderRadius: "20px",
        border: (theme) => `1px solid ${theme.palette.colors.website}`,
        mt: "54px",
        mb: `${statusArray?.length ? "164px" : "34px"}`,
      }}
    >
      {/* progress  */}
      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          width: `${statusArray?.length * 20}%`,
          height: "100%",
          backgroundColor: "colors.mainGreen",
          borderRadius: "inherit",
          display: "flex",
          justifyContent: "end",
        }}
      ></Box>
      {/* status  */}
      <Box
        sx={{
          position: "relative",
          right: "calc(20% - 20px)",
          display: "flex",
          width: "fit-content",
          gap: { xs: "186px", xl: "239px" },
        }}
      >
        {statusArray?.map((item) => (
          <Box
            sx={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: "#7cc3ac",
              position: "relative",
              // left: "14px",
              // right: "calc(20% - 20px)",
            }}
          >
            <Stack
              alignItems="center"
              sx={{
                position: "absolute",
                width: "200px",
                left: "50%",
                transform: "translateX(-50%)",
                top: "23px",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: `${
                    item.complete ? "colors.mainGreen" : "colors.mainRed"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "18px",
                }}
              >
                {item.complete ? (
                  <CheckOutlined
                    sx={{ width: "33px", height: "33px", color: "colors.wi8" }}
                  />
                ) : (
                  <Close
                    sx={{ width: "33px", height: "33px", color: "colors.wi8" }}
                  />
                )}
              </Box>
              <Stack
                sx={{
                  alignItems: "center",
                  gap: "9px",
                  "& p": {
                    fontSize: "16px",
                    fontWeight: "800",
                    lineHeight: "18px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "colors.mainBlack",
                  }}
                >
                  {item.status}
                </Typography>
                <Typography
                  sx={{
                    color: "colors.website",
                  }}
                >
                  {item.date}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
    // </Box>
  );
};

export default OrdersStatus;
