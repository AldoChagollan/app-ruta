import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/system";
import {
  Alert,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  Tooltip
} from "@mui/material";
import TablaProductoATraspasar from "./TablaProductos";
import { Close, DoubleArrow, Search } from "@mui/icons-material";

export default function ProductosATraspasar() {
  const [productoSeleccionado, setProductoSeleccionado] = React.useState("");

  const handleCancelSelect = () => setProductoSeleccionado('');

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="unidad-traspaso"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Unidad traspaso" />
              )}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="concepto-traspaso"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Concepto" />
              )}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="almacen-origen"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Almacen de origen" />
              )}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="almacen-destino"
              options={top100Films}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Almacen de destino"
                />
              )}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          {!productoSeleccionado ? (
            <Box mb={1}>
              <Alert severity="info">Selecciona un producto</Alert>
            </Box>
          ) : (
            <Box mb={1} display="flex" alignItems="center">
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Typography>p{productoSeleccionado}</Typography>
                <Tooltip title="Cancelar" arrow placement="right" onClick={handleCancelSelect}>
                    <IconButton size="small">
                    <Close />
                    </IconButton>
                </Tooltip>
              </Box>
              <TextField
                sx={{ width: 120, mx: 1 }}
                variant="outlined"
                size="small"
                label="Cantidad"
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<DoubleArrow />}
              >
                traspasar
              </Button>
            </Box>
          )}

          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Buscar un producto..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <TablaProductoATraspasar
            productoSeleccionado={productoSeleccionado}
            setProductoSeleccionado={setProductoSeleccionado}
          />
        </Box>
      </Container>
    </Box>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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
];
