import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Add, Done, Close } from "@mui/icons-material";
import AgregarProveedor from "./Proveedor/AgregarProveedor";
import AgregarAlmacen from "./Almacenes/ArgegarAlmacen";

import "date-fns";
import FechaCompra from "./Producto/AgregarFecha";
import FormularioNuevaCompra from "./Producto/FormularioCompra";
import ListaComprasARealizar from "./ListaComprasARealizar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegistroCompra() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* datos
	  fecha,
	  proveedor: {
		  nombre,
		  telefono,
		  correo_electronico,
		  id,
	  },
	  almacen_destino: {
		  id,
		  nombre
	  },
	  productos: [{
		  id,
		  codigo_barras,
		  descripcion,
	  }],
	  observaciones
	  */

  return (
    <React.Fragment>
      <Box sx={{ display: { md: "flex", xs: "none" } }}>
        <Button
          size="large"
          color="primary"
          startIcon={<Add fontSize="inherit" />}
          onClick={() => handleClickOpen()}
        >
          Nueva Compra
        </Button>
      </Box>

      <Box sx={{ display: { sm: "flex", md: "none" } }}>
        <Tooltip title="Nueva Compra" arrow TransitionComponent={Zoom}>
          <IconButton
            size="large"
            color="primary"
            onClick={() => handleClickOpen()}
          >
            <Add fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose()}
        fullWidth
        maxWidth="lg"
        scroll="paper"
      >
        <DialogTitle> Crear nueva compra</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <AgregarProveedor />
            </Grid>
            <Grid item md={4}>
              <AgregarAlmacen />
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <FechaCompra />
            </Grid>
          </Grid>
          <FormularioNuevaCompra />
          <ListaComprasARealizar />
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleClose()}
            size="large"
            startIcon={<Close />}
          >
            Cancelar
          </Button>
          <Button
            variant="text"
            color="primary"
            onClick={() => handleClose()}
            size="large"
            startIcon={<Done />}
            disableElevation
          >
            Realizar Compra
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
