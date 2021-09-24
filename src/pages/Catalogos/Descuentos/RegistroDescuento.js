import React, { useState, forwardRef } from 'react';
import { IconButton, Slide, Button, Tooltip, Zoom, DialogTitle } from '@mui/material';
import { Dialog, DialogActions, DialogContent, Box } from '@mui/material';
import { Add, Done, Close } from '@mui/icons-material';
import FormularioDescuento from './FormularioDescuento';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegistroDescuento() {
	const [ open, setOpen ] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Box sx={{ display: { md: 'flex', xs: 'none' } }}>
				<Button
					size="large"
					color="primary"
					startIcon={<Add fontSize="inherit" />}
					onClick={() => handleClickOpen()}
				>
					Nuevo descuento
				</Button>
			</Box>

			<Box sx={{ display: { sm: 'flex', md: 'none' } }}>
				<Tooltip title="Nuevo descuento" arrow TransitionComponent={Zoom}>
					<IconButton size="large" color="primary" onClick={() => handleClickOpen()}>
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
				maxWidth="xs"
				scroll="paper"
			>
				<DialogTitle>Nuevo descuento</DialogTitle>
				<DialogContent>
					<FormularioDescuento />
				</DialogContent>
				<DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
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
						startIcon={<Done /> }
						disableElevation
					>
						Guardar
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
