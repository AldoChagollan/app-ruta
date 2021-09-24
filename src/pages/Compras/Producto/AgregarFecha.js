import React from "react";
import local from "date-fns/locale/es";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";

export default function FechaCompra() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={local}>
      <DatePicker
        label="Fecha de compra"
        /* value={value} */
        /* onChange={(newValue) => {
                    setValue(newValue);
                  }} */
        renderInput={(params) => (
          <TextField {...params} size="small" placeholder="ex: DD/MM/AAAA" />
        )}
      />
    </LocalizationProvider>
  );
}
