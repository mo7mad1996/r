import React, { useEffect, useState } from "react";
import useApi from "@/hooks/useApi";
import useMoment from "@/hooks/useMoment";

// components
import { Box, Stack, Typography } from "@mui/material";
import FilterBtn from "../../components/FilterBtn";
import ModalComponent from "../../components/ModalComponent";
import useShowModal from "../../hooks/useShowModal";
import DateFilter from "../../components/DateFilter";
import { StyledStack, StyledTypo } from "../../sections/common/StyledElements";
import SectionTitle from "../../sections/common/Products/SectionTitle";

// component
const WalletInteractionsPage = () => {
  // config
  const api = useApi();
  const moment = useMoment();

  const { open, handleOpen, handleClose } = useShowModal();

  // data
  const [transactions, setTransactions] = useState([]);

  // methods
  const getTransactions = async () => {
    try {
      const res = await api.get("/user/wallet/transactions");

      const data = res.data.wallet_with_transaction.transaction;

      setTransactions(data);
    } catch (err) {
      console.error(err);
    }
  };

  // on component render
  useEffect(() => {
    getTransactions();
  }, []);

  // render
  return (
    <>
      <SectionTitle sectionTitle={{ main: " عرض عمليات المحفظة " }} />
      <Stack sx={{ alignItems: "center", mb: "100px" }}>
        <Stack
          sx={{
            position: "relative",
            alignItems: "center",
            gap: "123px",
            mb: "100px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-94px",
              left: "23px",
            }}
          >
            <FilterBtn handleOpen={handleOpen} />
          </Box>
          {transactions.map((transaction, i) => (
            <Stack key={i} sx={{ userSelect: "text" }}>
              <StyledTypo>
                {moment(transaction.created_at).format("D MMMM  YYYY, h:mm a")}
              </StyledTypo>

              <StyledStack>
                <Typography>
                  تم <span v-if="transaction.type == 'deposit">إيداع</span>{" "}
                  <span v-if="transaction.type == 'withdraw">سحب</span>{" "}
                  <span style={{ color: "tomato", padding: ".2em" }}>
                    {new Intl.NumberFormat("ar-EG", {
                      style: "currency",
                      currency: "EGP",
                      minimumFractionDigits: 2,
                    }).format(transaction.amount)}
                  </span>
                  عن الطلب رقم {transaction.id}
                </Typography>
              </StyledStack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <ModalComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <DateFilter handleClose={handleClose} />
      </ModalComponent>
    </>
  );
};

export default WalletInteractionsPage;
