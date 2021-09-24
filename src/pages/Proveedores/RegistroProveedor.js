import React, { useState, forwardRef, Fragment } from 'react';
import { IconButton, Slide, Button, Tooltip, Zoom, DialogTitle } from '@mui/material';
import { Dialog, DialogActions, DialogContent, Box } from '@mui/material';
import { Add, Done, Close } from '@mui/icons-material';
import FormularioProveedor from './FormularioProveedor';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegistroProveedor({ lite_button }) {
	const [ open, setOpen ] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			{lite_button ? (
				<IconButton size="large" color="primary" onClick={() => handleClickOpen()}>
					<Add fontSize="inherit" />
				</IconButton>
			) : (
				<Fragment>
					<Box sx={{ display: { md: 'flex', xs: 'none' } }}>
						<Button
							size="large"
							color="primary"
							startIcon={<Add fontSize="inherit" />}
							onClick={() => handleClickOpen()}
						>
							Nuevo Proveedor
						</Button>
					</Box>

					<Box sx={{ display: { sm: 'flex', md: 'none' } }}>
						<Tooltip title="Nuevo proveedor" arrow TransitionComponent={Zoom}>
							<IconButton size="large" color="primary" onClick={() => handleClickOpen()}>
								<Add fontSize="inherit" />
							</IconButton>
						</Tooltip>
					</Box>
				</Fragment>
			)}

			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => handleClose()}
				fullWidth
				maxWidth="sm"
				scroll="paper"
			>
				<DialogTitle>Registrar nuevo proveedor</DialogTitle>
				<DialogContent>
					<FormularioProveedor />
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
