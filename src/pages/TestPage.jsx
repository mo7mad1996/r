// import {
//   Box,
//   Button,
//   Grid,
//   IconButton,
//   Rating,
//   Typography,
//   styled,
// } from "@mui/material";
// import React from "react";

// import {
//   AddShoppingCart,
//   Favorite,
//   FavoriteBorder,
//   Share,
// } from "@mui/icons-material";
// import { useLocation, useNavigate } from "react-router-dom";
// import Reviews from "../../components/Reviews";
// import MainButton from "../../components/MainButton";
// import ProductPagination from "../common/Products/ProductPagination";
// import ModalComponent from "../../components/ModalComponent";
// import useShowModal from "../../hooks/useShowModal";
// import DeletePopup from "./DeletePopup";
// import CustomCheckbox from "../Dashboard/delivery/CustomCheckbox";

// const StyledIcons = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   width: "calc(100% - 46px)",
//   display: "flex",
//   justifyContent: "space-between",
//   margin: "auto",
//   top: "190px",
//   left: "23px",
//   // transform: "translateX(-50%)",

//   "& button": {
//     position: "relative",
//     width: "50px",
//     height: "50px",
//     borderRadius: "50%",
//     backgroundColor: theme.palette.colors.wi8,
//     boxShadow: "0px 0px 10px 2px #00000040",
//     cursor: "pointer",
//     zIndex: "1200",
//   },
//   "& svg": {
//     width: "90%",
//     height: "90%",
//   },
// }));
// const CustomButton = styled(Button)(({ theme }) => ({}));
// const Products = ({
//   products,
//   isReview,
//   admin,
//   pending,
//   refused,
//   pendingReview,
// }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isDashboard = location.pathname.includes("/dashboard");
//   const isAdmin = location.pathname.includes("/admin");
//   const isAll = location.pathname.includes("/all");
//   const isPending = location.pathname.includes("/pending");
//   const isRefused = location.pathname.includes("/refused");
//   const isStore = location.pathname.includes("/store");
//   const isCustom = location.pathname.includes("/custom-product");
//   const { open, handleOpen, handleClose, message, setMessage } = useShowModal();

//   return (
//     <>
//       <Grid container spacing={["40px"]}>
//         {products.map((product) => (
//           <Grid
//             item
//             xs={12}
//             sm={10}
//             md={6}
//             lg={4}
//             // xl={3}
//             sx={{
//               margin: { xs: "auto", md: "0" },
//             }}
//             key={product.id}
//           >
//             <Box
//               sx={{
//                 backgroundColor: "#FFF2F2F2",
//                 position: "relative",
//                 // height: "666px",
//                 border: "1px solid",
//                 borderColor: "colors.website",
//                 borderRadius: "5px",
//                 mx: { sm: "auto" },
//                 px: "23px",
//                 // width: "250px",
//               }}
//             >
//               {/* checkbox  */}
//               {isCustom && (
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: "21px",
//                     right: "10px",
//                   }}
//                 >
//                   <CustomCheckbox />
//                 </Box>
//               )}
//               <Box
//                 sx={{
//                   mt: "20px",
//                 }}
//               >
//                 <ProductPagination />
//               </Box>
//               <StyledIcons>
//                 <IconButton size="small" disableRipple>
//                   <AddShoppingCart />
//                 </IconButton>
//                 <IconButton size="small" disableRipple>
//                   {/* <FavoriteBorder /> */}
//                   <Favorite sx={{ color: "colors.mainRed" }} />
//                 </IconButton>
//               </StyledIcons>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontFamily: "Poppins",
//                   fontSize: "20px",
//                   fontWeight: "600",
//                   lineHeight: "30px",
//                   letterSpacing: "0em",
//                   textAlign: "right",
//                   mb: "5px",
//                 }}
//               >
//                 {product.name}
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "16px",
//                   fontWeight: "400",
//                   lineHeight: "17.86px",
//                   textAlign: "right",
//                   color: "colors.mainBlack",
//                   mb: "13px",
//                 }}
//               >
//                 {product.description}
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   mb: "25px",
//                   "& p": {
//                     fontFamily: "Poppins",
//                     fontWeight: "500",
//                   },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: "16px",
//                     lineHeight: "24px",
//                     color: "colors.mainBlack",
//                   }}
//                 >
//                   قسم
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     lineHeight: "21px",
//                     color: "colors.mainGreen",
//                   }}
//                 >
//                   {product.category}
//                 </Typography>
//               </Box>
//               {/* Rating */}
//               <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
//                 <Reviews />
//                 <Box
//                   sx={{
//                     fontFamily: "Poppins",
//                     fontSize: "16px",
//                     fontWeight: "500",
//                     lineHeight: "24px",
//                     color: "colors.greyStrock",
//                     // textAlign: "right",
//                   }}
//                 >
//                   {product.reviews}
//                 </Box>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   mt: "15.35px",
//                   "& p": {
//                     fontFamily: "Poppins",
//                     fontSize: "25px",
//                     fontWeight: "600",
//                     lineHeight: "37.5px",
//                   },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     color: "colors.mainGreen",
//                   }}
//                 >
//                   {product.price} {t("Currency")}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     position: "relative",
//                     color: "colors.mainRed",
//                     fontWeight: "500",
//                     // mt: "5px",
//                     "&::after": {
//                       content: '""',
//                       position: "absolute",
//                       width: "50px",
//                       height: "2px",
//                       top: "50%",
//                       right: "0",
//                       backgroundColor: "colors.mainRed",
//                       transform: "rotate(-20deg) translateY(-50%)",
//                     },
//                   }}
//                 >
//                   {product.oldPrice} {t("Currency")}
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{ display: "flex", gap: "20px", mt: "16px", mb: "20px" }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: "16px",
//                     lineHeight: "18px",
//                     color: "colors.mainBlack",
//                   }}
//                 >
//                   نسبة الخصم
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "20px",
//                     fontWeight: "700",
//                     lineHeight: "22px",
//                     color: "colors.website",
//                   }}
//                 >
//                   {product.discount} %
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "5px",
//                   color: "colors.mainBlack",
//                   fontFamily: "Poppins",
//                   fontSize: "16px",
//                   fontWeight: "500",
//                   lineHeight: "24px",
//                   mb: "15.65px",
//                 }}
//               >
//                 يباع بواسطة{" "}
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     lineHeight: "21px",
//                     color: "colors.mainGreen",
//                   }}
//                 >
//                   {product.owner}
//                 </Typography>
//               </Box>
//               {/* for dashboard  */}
//               {(isDashboard || isAdmin) && (
//                 <>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       // justifyContent: "center",
//                       alignItems: "center",
//                       gap: "15px",
//                       mb: "6px",
//                       "&, & p": {
//                         fontFamily: "Poppins",
//                         fontSize: "16px",
//                         fontWeight: "500",
//                         lineHeight: "24px",
//                         color: "colors.darkIcons",
//                       },
//                     }}
//                   >
//                     <Typography
//                     // sx={{
//                     //   fontSize: "16px",
//                     //   fontWeight: "500",
//                     //   lineHeight: "24px",
//                     //   color: "colors.darkIcons",
//                     // }}
//                     >
//                       المخزون
//                     </Typography>
//                     <Box
//                       sx={{
//                         width: "91px",
//                         height: "29px",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         borderRadius: "5px",
//                         border: "1px solid",
//                         borderColor: "colors.greyStrock",
//                       }}
//                     >
//                       121
//                     </Box>
//                   </Box>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       // justifyContent: "center",
//                       alignItems: "center",
//                       gap: "15px",
//                       mb: "16px",
//                       "&, & p": {
//                         fontFamily: "Poppins",
//                         fontSize: "16px",
//                         fontWeight: "500",
//                         lineHeight: "24px",
//                         color: "colors.darkIcons",
//                       },
//                     }}
//                   >
//                     <Typography
//                     // sx={{
//                     //   fontSize: "16px",
//                     //   fontWeight: "500",
//                     //   lineHeight: "24px",
//                     //   color: "colors.darkIcons",
//                     // }}
//                     >
//                       العمولة
//                     </Typography>
//                     <Typography sx={{ fontWeight: "700", marginRight: "20px" }}>
//                       15 %
//                     </Typography>
//                   </Box>
//                   {(isAdmin || isAll) && (
//                     <>
//                       {/* accept and refuse  */}
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           gap: "10px",
//                           mb: "16px",
//                           "& button": {
//                             width: "147px",
//                             height: "60px",
//                             color: "colors.wi8",
//                             fontSize: "20px",
//                             fontWeight: "800",
//                             lineHeight: "22px",
//                           },
//                         }}
//                       >
//                         <Button
//                           variant="contained"
//                           sx={{
//                             "&, &:hover": {
//                               backgroundColor: "colors.website",
//                               color: "colors.wi8",
//                             },
//                           }}
//                           onClick={() => {
//                             if (!isPending && !isRefused)
//                               navigate(
//                                 `${
//                                   admin ? "/admin" : ""
//                                 }/dashboard/products/1/modify`
//                               );
//                           }}
//                         >
//                           {(isPending || isRefused) && "موافقة"}
//                           {!isPending && !isRefused && "Edit"}
//                         </Button>
//                         <Button
//                           variant="contained"
//                           sx={[
//                             !admin
//                               ? {
//                                   "&, &:hover": {
//                                     backgroundColor: "colors.mainRed",
//                                     color: "colors.wi8",
//                                   },
//                                 }
//                               : {
//                                   backgroundColor: "transparent",
//                                   color: "red!important",
//                                   border: (theme) =>
//                                     `3px solid ${theme.palette.colors.mainRed}!important`,
//                                   "&:hover": {
//                                     backgroundColor: (theme) =>
//                                       `${theme.palette.colors.mainRed}!important`,
//                                     color: (theme) =>
//                                       `${theme.palette.colors.wi8}!important`,
//                                   },
//                                 },
//                           ]}
//                           onClick={() => {
//                             setMessage("هل ترغب حقا فى حذف هذا المنتج ؟");
//                             handleOpen();
//                           }}
//                         >
//                           {isPending && "رفض"}
//                           {!isPending && "حذف"}
//                         </Button>
//                       </Box>
//                       {/* modify and show  */}
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           gap: "10px",
//                           mb: "16px",
//                           "& button": {
//                             width: "147px",
//                             height: "60px",
//                             color: "colors.wi8",
//                             fontSize: "20px",
//                             fontWeight: "800",
//                             lineHeight: "22px",
//                           },
//                         }}
//                       >
//                         <Button
//                           variant="contained"
//                           sx={{
//                             "&, &:hover": {
//                               backgroundColor: "colors.website",
//                               color: "colors.wi8",
//                             },
//                           }}
//                           onClick={() => {
//                             if (!isPending && !isRefused)
//                               navigate(
//                                 `${
//                                   admin ? "/admin" : ""
//                                 }/dashboard/products/1/modify`
//                               );
//                           }}
//                         >
//                           {(isPending || isRefused) && "موافقة"}
//                           {!isPending && !isRefused && "Edit"}
//                         </Button>
//                         <Button
//                           variant="contained"
//                           sx={[
//                             !admin
//                               ? {
//                                   "&, &:hover": {
//                                     backgroundColor: "colors.mainRed",
//                                     color: "colors.wi8",
//                                   },
//                                 }
//                               : {
//                                   backgroundColor: "transparent",
//                                   color: "red!important",
//                                   border: (theme) =>
//                                     `3px solid ${theme.palette.colors.mainRed}!important`,
//                                   "&:hover": {
//                                     backgroundColor: (theme) =>
//                                       `${theme.palette.colors.mainRed}!important`,
//                                     color: (theme) =>
//                                       `${theme.palette.colors.wi8}!important`,
//                                   },
//                                 },
//                           ]}
//                           onClick={() => {
//                             setMessage("هل ترغب حقا فى حذف هذا المنتج ؟");
//                             handleOpen();
//                           }}
//                         >
//                           {pending && "رفض"}
//                           {!pending && "حذف"}
//                         </Button>
//                       </Box>
//                     </>
//                   )}
//                 </>
//               )}
//               {/* controllers  */}

//               <Box mb="35px">
//                 {/* for user  */}
//                 {!isDashboard && !isAdmin && !isCustom && (
//                   <MainButton
//                     content={"عرض تفاصيل المنتج"}
//                     onClick={() => navigate(`/store/${product.id}`)}
//                   />
//                 )}
//                 {/* for admin and seller  */}
//                 {(isDashboard || isAdmin) && (
//                   <Button
//                     variant="contained"
//                     sx={{
//                       width: "100%",
//                       height: "60px",
//                       color: "colors.wi8",
//                       fontSize: "20px",
//                       fontWeight: "800",
//                       lineHeight: "22px",
//                       "&, &:hover": {
//                         backgroundColor: "colors.website",
//                         color: "colors.wi8",
//                       },
//                     }}
//                     onClick={() => {
//                       if (isReview) {
//                         navigate(`/dashboard/products/reviews/${product.id}`);
//                       } else navigate(`/store/${product.id}`);
//                     }}
//                   >
//                     {isReview ? "عرض مراجعات المنتج" : " عرض تفاصيل المنتج"}
//                   </Button>
//                 )}
//                 {/* {isAdmin && (
//                   <Button
//                     variant="contained"
//                     sx={{
//                       width: "168px",
//                       height: "60px",
//                       color: "colors.wi8",
//                       fontSize: "20px",
//                       fontWeight: "800",
//                       lineHeight: "22px",
//                       display: "block",
//                       mx: "auto",
//                       mt: "36px",
//                       p: "0",
//                       "&, &:hover": {
//                         backgroundColor: "colors.website",
//                         color: "colors.wi8",
//                       },
//                     }}
//                     onClick={() =>
//                       navigate(
//                         `/admin/dashboard/reviews/products/${product.id}?pending=${pendingReview}`
//                       )
//                     }
//                   >
//                     عرض المراجعات
//                   </Button>
//                 )} */}
//                 {/* {isDashboard && (
//                   <Button
//                     variant="contained"
//                     sx={{
//                       width: "100%",
//                       height: "60px",
//                       color: "colors.wi8",
//                       fontSize: "20px",
//                       fontWeight: "800",
//                       lineHeight: "22px",
//                       "&, &:hover": {
//                         backgroundColor: "colors.website",
//                         color: "colors.wi8",
//                       },
//                     }}
//                     onClick={() => {
//                       if (isReview) {
//                         navigate(`/dashboard/products/reviews/${product.id}`);
//                       } else navigate(`/store/${product.id}`);
//                     }}
//                   >
//                     {isReview ? "عرض مراجعات المنتج" : " عرض تفاصيل المنتج"}
//                   </Button>
//                 )} */}

//                 {isCustom && (
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Button
//                       variant="contained"
//                       sx={{
//                         width: "138px",
//                         height: "60px",
//                         color: "colors.wi8",
//                         fontSize: "20px",
//                         fontWeight: "800",
//                         lineHeight: "22px",
//                         "&, &:hover": {
//                           backgroundColor: "colors.website",
//                           color: "colors.wi8",
//                         },
//                       }}
//                       onClick={() => {
//                         navigate(`/store/${product.id}`);
//                       }}
//                     >
//                       عرض
//                     </Button>
//                   </Box>
//                 )}
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//       <ModalComponent
//         open={open}
//         handleOpen={handleOpen}
//         handleClose={handleClose}
//         message={message}
//       >
//         {admin && <DeletePopup handleClose={handleClose} refused={refused} />}
//       </ModalComponent>
//     </>
//   );
// };

// export default Products;
