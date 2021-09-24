import * as React from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Add } from "@mui/icons-material";
import { Box } from "@mui/system";
import RegistroProducto from "../../Productos/registroProducto";

export default function AgregarProducto() {
  return (
    <Box>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box display="flex" alignItems="center">
            <Autocomplete
              disablePortal
              options={top100Films}
              fullWidth
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Producto"
                  fullWidth
                  size="small"
                />
              )}
            />
            <RegistroProducto litle_button={true} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Autocomplete
            disablePortal
            options={top100Films}
            fullWidth
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Código de barras"
                fullWidth
                size="small"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="Plazo-label-venta">Plazo</InputLabel>
            <Select
              labelId="Plazo-label-venta"
              value="CONTADO"
              label="Plazo"
              /* onChange={handleChange} */
            >
              <MenuItem value="CONTADO">Contado</MenuItem>
              <MenuItem value="1">30 días</MenuItem>
              <MenuItem value="2">2 Mes</MenuItem>
              <MenuItem value="6">6 Mes</MenuItem>
              <MenuItem value="8">8 Mes</MenuItem>
              <MenuItem value="12">12 Mes</MenuItem>
              <MenuItem value="18">18 Mes</MenuItem>
              <MenuItem value="24">24 Mes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Precio"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Cantidad"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Total"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button color="primary" size="large" startIcon={<Add />}>
            Agregar
          </Button>
        </Grid>
      </Grid>
    </Box>
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
