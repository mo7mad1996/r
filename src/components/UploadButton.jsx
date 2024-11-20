import { Box, Button, styled } from "@mui/material";
import uploadImg from "../assets/login/upload.png";

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
  width: "416px",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    fontSize: "25px",
  },
  height: "60px",
  color: "colors.wi8",
  fontSize: "28px",
  fontWeight: "800",
  lineHeight: "31.25px",
  backgroundColor: theme.palette.colors.website,
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: theme.palette.colors.website,
  },
  ...overrideStyle,
}));

const UploadButton = ({ title, overrideStyle }) => {
  return (
    <StyledUploadButton
      component="label"
      variant="contained"
      disableElevation
      sx={{ mt: "35px" }}
      overrideStyle={overrideStyle}
      endIcon={
        <Box
          component="img"
          src={uploadImg}
          sx={{
            width: "29px",
            height: "29px",
            mr: "10px",
          }}
        />
      }
    >
      {title}
      <VisuallyHiddenInput
        type="file"
        // onChange={(e) => setSlogan(e.target.value)}
      />
    </StyledUploadButton>
  );
};

export default UploadButton;
