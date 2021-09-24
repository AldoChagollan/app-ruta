import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import local from "date-fns/locale/es";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function FormularioAbonos() {
  return (
    <Container maxWidth="xs" sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            options={top100Films}
            fullWidth
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="N. Tarjeta"
                fullWidth
                size="small"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={local}>
            <DatePicker
              label="Fecha de abono"
              /* value={value} */
              /* onChange={(newValue) => {
                    setValue(newValue);
                  }} */
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  fullWidth
                  placeholder="ex: DD/MM/AAAA"
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Semana de cobro"
            variant="outlined"
            size="small"
            fullWidth
            inputMode="numeric"
            disabledvalue="28"
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            options={top100Films}
            fullWidth
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Cliente" fullWidth size="small" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth size="small">
            <InputLabel id="dias-cobro-label-venta">Zona</InputLabel>
            <Select
              labelId="dias-cobro-label-venta"
              /* value="CONTADO" */
              label="Zona"
              /* onChange={handleChange} */
            >
              <MenuItem value="Zona 1">Zona 1</MenuItem>
              <MenuItem value="Zona 2">Zona 2</MenuItem>
              <MenuItem value="Zona 3">Zona 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disablePortal
            options={top100Films}
            fullWidth
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Cobrador" fullWidth size="small" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Saldo anterior"
            variant="outlined"
            size="small"
            fullWidth
            inputMode="numeric"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Pago"
            variant="outlined"
            size="small"
            fullWidth
            inputMode="numeric"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Saldo pendiente"
            variant="outlined"
            size="small"
            fullWidth
            inputMode="numeric"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Comisión cobrador"
            variant="outlined"
            size="small"
            fullWidth
            inputMode="numeric"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Identificador"
            variant="outlined"
            size="small"
            fullWidth
            inputMode="numeric"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Status"
            variant="outlined"
            size="small"
            fullWidth
            inputMode="numeric"
            disabled
            value="No abono"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel id="status-cuenta-label-venta">Motivo</InputLabel>
            <Select
              labelId="status-cuenta-label-venta"
              /* value="CONTADO" */
              label="Motivo"
              /* onChange={handleChange} */
            >
              <MenuItem value="No estaba">No estaba</MenuItem>
              <MenuItem value="Pasar despues">Pasar despues</MenuItem>
              <MenuItem value="Abono">Abono</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
