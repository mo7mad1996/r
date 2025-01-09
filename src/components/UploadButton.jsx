import { Box, Button, styled } from "@mui/material";
import uploadImg from "../assets/login/upload.png";
import { useTranslation } from "react-i18next";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const StyledUploadButton = styled(Button)(({ theme, overrideStyle }) => ({
  color: "colors.wi8",
  width: "100%",
  maxWidth: "416px",
  [theme.breakpoints.down("sm")]: {
    // width: "300px",
    fontSize: "25px",
  },
  flexWrap: "wrap",
  fontSize: "28px",
  fontWeight: "800",
  lineHeight: "31.25px",
  display: "flex",
  gap: "1em",
  backgroundColor: theme.palette.colors.website,
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: theme.palette.colors.website,
  },
  ...overrideStyle,
}));

const UploadButton = ({ title, overrideStyle }) => {
  const { t } = useTranslation();
  return (
    <StyledUploadButton
      component="label"
      variant="contained"
      disableElevation
      overridestyle={overrideStyle}
      endIcon={
        <Box
          component="img"
          src={uploadImg}
          sx={{
            height: "29px",
          }}
        />
      }
    >
      <span> {t(title)} </span>
      <VisuallyHiddenInput
        type="file"
        // onChange={(e) => setSlogan(e.target.value)}
      />
    </StyledUploadButton>
  );
};

export default UploadButton;
