import React from "react";
import { Grid, Typography } from "@mui/material";
import ProductosATraspasar from "./ProdutosATraspasar";
import DatosTraspaso from "./DatosTraspaso";

export default function Traspasos() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography textAlign="center" fontSize={18} sx={{mb: 1}}>
           <b> Productos a traspasar</b>
        </Typography>
        <ProductosATraspasar />
      </Grid>
      <Grid item xs={12} md={6}>
      <Typography textAlign="center" fontSize={18} sx={{mb: 1}} >
            <b>Datos del traspaso</b>
        </Typography>
        <DatosTraspaso />
      </Grid>
    </Grid>
  );
}
