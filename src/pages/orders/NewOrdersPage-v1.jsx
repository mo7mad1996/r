import { Box, Stack, Typography } from "@mui/material";

import SectionTitle from "~/sections/common/Products/SectionTitle";
import Orders from "~/sections/orders/Orders";
import Search from "~/sections/common/Search";
import FilterBtn from "~/components/FilterBtn";
import ModalComponent from "~/components/ModalComponent";
import DateFilter from "~/components/DateFilter";
import useShowModal from "~/hooks/useShowModal";

const statusArray = [
  {
    status: "تم تأكيد الطلب",
    date: "30 ديسمبر 2023",
    complete: true,
    operation: 1,
  },
  {
    status: "تم تسليم الطلب للمندوب",
    date: "31 ديسمبر 2023",
    complete: true,
    operation: 1,
  },
  {
    status: "الطلب فى الطريق إليك",
    date: "1 يناير 2024",
    complete: true,
    operation: 1,
  },
  {
    status: "تم تسليم الطلب",
    date: "1 يناير 2024",
    complete: true,
    operation: 1,
  },
  {
    status: "تم إرجاع الطلب",
    date: "15 يناير 2024",
    complete: true,
    operation: 2,
  },
];

const NewOrdersPage = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = (e) => setOpen(true);
  // const handleClose = () => setOpen(false);
  const { open, handleOpen, handleClose } = useShowModal();

  return (
    <>
      <Stack sx={{ position: "relative" }}>
        <Typography
          sx={{
            position: "absolute",
            right: "20px",
            top: "23px",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "27px",
            color: "colors.mainBlack",
          }}
        >
          مرحبا , ممدوح الصيرفي
        </Typography>
        <Box sx={{ mt: "30px" }}>
          <SectionTitle sectionTitle={{ main: "الطلبات الجديدة" }} />
          {/* search and filter  */}
          <Box
            sx={{
              margin: "0 19px 41px",
              display: "flex",
              alignItems: "center",
              gap: "100px",
            }}
          >
            <Search />
            <FilterBtn handleOpen={handleOpen} />
          </Box>
        </Box>
        {Array(3)
          .fill("")
          .map((item) => (
            <Orders isNew={true} />
          ))}
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

export default NewOrdersPage;
