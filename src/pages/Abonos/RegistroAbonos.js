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
import { Add, Done, Close } from "@mui/icons-material";
import FormularioAbonos from "./FormularioAbonos";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegistroAbonos() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: { md: "flex", xs: "none" } }}>
        <Button
          size="large"
          color="primary"
          startIcon={<Add fontSize="inherit" />}
          onClick={() => handleClickOpen()}
        >
          Nuevo abono
        </Button>
      </Box>

      <Box sx={{ display: { sm: "flex", md: "none" } }}>
        <Tooltip title="Nuevo abono" arrow TransitionComponent={Zoom}>
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
        maxWidth="sm"
        scroll="paper"
      >
        <DialogTitle>Nuevo abono</DialogTitle>
        <DialogContent>
          <FormularioAbonos />
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
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
