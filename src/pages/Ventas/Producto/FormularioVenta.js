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
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function FormularioNuevaVenta() {
  return (
    <Container maxWidth="xs" sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Tarjeta"
            variant="outlined"
            size="small"
            fullWidth
            inputMode="numeric"
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={local}>
            <DatePicker
              label="Fecha de compra"
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
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            options={top100Films}
            fullWidth
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Vendedor" fullWidth size="small" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            options={top100Films}
            fullWidth
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Código de cliente"
                fullWidth
                size="small"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel id="dias-cobro-label-venta">Días de cobro</InputLabel>
            <Select
              labelId="dias-cobro-label-venta"
              /* value="CONTADO" */
              label="Días de cobro"
              /* onChange={handleChange} */
            >
              <MenuItem value="Lunes">Lunes</MenuItem>
              <MenuItem value="Martes">Martes</MenuItem>
              <MenuItem value="Miercoles">Miercoles</MenuItem>
              <MenuItem value="Jueves">Jueves</MenuItem>
              <MenuItem value="Viernes">Viernes</MenuItem>
              <MenuItem value="Sabado">Sabado</MenuItem>
              <MenuItem value="Domingo">Domingo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Subtotal"
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
        <Grid item xs={12}>
          <TextField
            label="Total de la venta"
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
        <Grid item xs={12}>
          <TextField
            label="Enganche"
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
        <Grid item xs={12}>
          <TextField
            label="Enganche a pagar"
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
        <Grid item xs={12}>
          <TextField
            label="Enganche pagado"
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
        <Grid item xs={12}>
          <TextField
            label="Enganche pendiente"
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
        <Grid item xs={12}>
          <TextField
            label="Saldo restante"
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
        <Grid item xs={12}>
          <TextField
            label="Abono correspondiente"
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
        <Grid item xs={12}>
          <TextField
            label="Pago comisión"
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
        <Grid item xs={12}>
          <TextField
            label="Observación"
            variant="outlined"
            size="small"
            fullWidth
            inputMode="numeric"
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={local}>
            <DatePicker
              label="Fecha de vencimiento"
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
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel id="status-cuenta-label-venta">
              Status cuenta
            </InputLabel>
            <Select
              labelId="status-cuenta-label-venta"
              /* value="CONTADO" */
              label="Status cuenta"
              /* onChange={handleChange} */
            >
              <MenuItem value="Activa">Activa</MenuItem>
              <MenuItem value="Anexada">Anexada</MenuItem>
              <MenuItem value="Cancelada">Cancelada</MenuItem>
              <MenuItem value="Pagada">Pagada</MenuItem>
              <MenuItem value="Problemática">Problemática</MenuItem>
              <MenuItem value="Tarjeta extraviada">Tarjeta extraviada</MenuItem>
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
