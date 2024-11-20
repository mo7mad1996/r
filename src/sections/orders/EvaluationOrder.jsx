import React, { useState } from "react";
import {
  Box,
  Button,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const EvaluationOrder = ({ handleClose }) => {
  const [value, setValue] = useState(0);
  return (
    <Stack
      sx={{
        // width: "fit-content",
        width: "985px",
        // height: "706px",
        padding: "27px",
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
          color: "colors.mainBlack",
          marginRight: "auto",
        }}
      >
        <Close
          sx={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
      </Box>
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "45px",
            color: "colors.mainBlack",
            textAlign: "center",
            mt: "14px",
            mb: "50px",
          }}
        >
          أكتب تقييمك
        </Typography>

        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            "& label": {
              margin: "0 -3px",
            },
            "& svg": {
              color: "colors.mainGreen",
            },
            mb: "30px",
          }}
        />
        <TextField
          multiline
          rows={6}
          placeholder="أكتب مراجعتك ..."
          sx={{
            width: "900px",
            "& *": {
              border: "0",
            },
            "& .MuiInputBase-root": {
              borderRadius: "12px",
              border: "3px solid",
              borderColor: "colors.greyStrock",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "20px",
              color: "colors.iconsBlack",
            },
          }}
        />

        <Button
          sx={{
            width: "382px",
            height: "53px",
            backgroundColor: "#008C5D",
            color: "colors.wi8",
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "31px",
            textAlign: "center",
            mt: "75px",
            mb: "87px",
            "&:hover": {
              backgroundColor: "#008C5D",
            },
          }}
        >
          أنشر تقييمك
        </Button>
      </Stack>
    </Stack>
  );
};

export default EvaluationOrder;
