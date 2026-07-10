import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import 'dayjs/locale/ko.js';

export const KoreanDatePicker = ({ label, onChange }) => {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ko"}>
        <DatePicker label={label} defaultValue={dayjs()} onChange={(date) => onChange(date)}></DatePicker>
      </LocalizationProvider>
  );
}