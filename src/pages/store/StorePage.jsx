import React, { useState, useEffect } from "react";
import useApi from "@/hooks/useApi";

// components
import { Box } from "@mui/material";
import ProductsSection from "@/sections/common/Products/ProductsSection";
import SectionTitle from "@/sections/common/Products/SectionTitle";
import ProductsSidebar from "@/sections/common/Products/ProductsSidebar";
import Cart from "@/sections/common/Products/Cart";

// component
const StorePage = () => {
  // config
  const api = useApi();

  // data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // methods
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/products", {
        params: {
          page,
        },
      });
      const data = res.data.products;

      setTotalPages(data.meta?.last_page);
      setProducts(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // on component render
  useEffect(() => {
    getProducts();
  }, [page]);

  // render
  return (
    <Box>
      <Cart />
      <SectionTitle sectionTitle={{ main: "store", second: "All Products" }} />
      <Box
        sx={{
          display: "flex",
          gap: { xs: "20px", sm: "25px", md: "30px", lg: "86px" },
          pl: { xs: "39px", sm: "40px", md: "66px" },
        }}
      >
        <ProductsSidebar />
        <Box sx={{ flex: 1 }}>
          <ProductsSection
            {...{ products, totalPages, loading, page, setPage }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default StorePage;
