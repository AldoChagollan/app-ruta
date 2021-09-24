import * as React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Container,
  Button,
  InputAdornment,
} from "@mui/material";
import TablaProductosTraspasados from "./TablaProductosTraspasados";
import { Done, Search } from "@mui/icons-material";

export default function ProductosATraspasar() {
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Transporte</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                /* value={Transporte} */
                label="Transporte"
                /* onChange={handleChange} */
              >
                <MenuItem value="Motocicleta">Motocicleta</MenuItem>
                <MenuItem value="Automovil">Automovil</MenuItem>
                <MenuItem value="Camioneta">Camioneta</MenuItem>
                <MenuItem value="Barco">Barco</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Placas"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Encargado de transporte"
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Box mb={1} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Done />}
            >
              Realizar traspaso
            </Button>
          </Box>
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
          <TablaProductosTraspasados />
        </Box>
      </Container>
    </Box>
  );
}
