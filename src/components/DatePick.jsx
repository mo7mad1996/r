import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers";

const DatePick = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <DatePicker
      slots={{ openPickerIcon: ExpandMore }}
      slotProps={{
        textField: {},
      }}
      value={selectedDate}
      format="dd MMMM yyyy"
      maxDate={new Date()}
      onChange={(newValue) => setSelectedDate(newValue)}
      views={["day", "month", "year"]}
      sx={{
        ".css-v91h9l-MuiInputBase-root-MuiOutlinedInput-root": {
          // borderRadius: "0",
        },
        "& .MuiInputBase-root": {
          width: "297px",
          height: "48px",
          border: `1px solid`,
          borderColor: "colors.website",
          borderRadius: "0",
        },
        "& .Mui-focused": {
          border: "1px solid",
          outline: "none",
        },
        "& input": {
          color: "colors.mainBlack",
          fontSize: "24px",
          lineHeight: "27px",
        },
        "& svg": {
          color: "colors.mainBlack",
          width: "40px",
          height: "40px",
        },
      }}
    />
  );
};

export default DatePick;
