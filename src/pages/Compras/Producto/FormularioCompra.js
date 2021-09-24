import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { Add } from "@mui/icons-material";
import RegistroProducto from "../../Productos/registroProducto";
import EditarPreciosProducto from "./EditarPreciosProducto";

export default function FormularioNuevaCompra() {
  return (
    <Box mt={1} mb={3}>
      <Box my={1} display="flex" alignItems="center">
        <RegistroProducto />
        <EditarPreciosProducto />
        <Box mx={2}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography style={{ fontSize: 17 }}>
                Subtotal:{" "}
                {/* <b>${formatoMexico(datosProducto.subtotal)}</b> */}
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: 17 }}>
                Impuestos:{" "}
                {/* <b>${formatoMexico(datosProducto.impuestos)}</b> */}
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: 17 }}>
                <b>Total: ${/* {formatoMexico(datosProducto.total)} */}</b>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Autocomplete
            disablePortal
            options={top100Films}
            fullWidth
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Producto" fullWidth size="small" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Código de barras"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Costo"
            variant="outlined"
            size="small"
            fullWidth
            /* value={datosProducto.costo} */
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Cantidad"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            startIcon={<Add />}
          >
            Agregar a compra
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
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
];
