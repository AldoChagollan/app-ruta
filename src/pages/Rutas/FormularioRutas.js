import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Add } from "@mui/icons-material";

export default function FormularioRutas() {
  return (
    <Container maxWidth="xs">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Autocomplete
              disablePortal
              options={top100Films}
              fullWidth
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="Zona" fullWidth size="small" />
              )}
            />
            <IconButton color="primary" size="large">
              <Add />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Autocomplete
              disablePortal
              options={top100Films}
              fullWidth
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="Ruta" fullWidth size="small" />
              )}
            />
            <IconButton color="primary" size="large">
              <Add />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Autocomplete
              disablePortal
              options={top100Films}
              fullWidth
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Vendedor"
                  fullWidth
                  size="small"
                />
              )}
            />
            <IconButton color="primary" size="large">
              <Add />
            </IconButton>
          </Box>
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
