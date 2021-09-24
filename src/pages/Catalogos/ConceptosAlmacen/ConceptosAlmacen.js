import React, { useState, forwardRef } from 'react';
import { Slide, Button, DialogTitle } from '@mui/material';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { Tooltip, Box, IconButton, Zoom, Paper } from '@mui/material';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import { Print, FileDownloadOutlined, Search, Add, Done, Close } from '@mui/icons-material';
import TablaConceptosAlmacen from './TablaConceptos';
import FormularioConceptosAlmacen from './FormularioConceptos';

export default function ConceptosAlmacen() {
	return (
		<div>
			<Box display="flex" justifyContent="space-between">
				<Box sx={{ width: '50%', mb: 1, height: '100%' }} component={Paper}>
					<FormControl variant="outlined" fullWidth size="medium">
						<OutlinedInput
							id="search-producto"
							type="text"
							size="small"
							/* onChange={handleChange('password')} */
							endAdornment={
								<InputAdornment position="start">
									<IconButton
										aria-label="search producto"
										/* onClick={handleClickShowPassword} */
										edge="end"
									>
										<Search />
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Box>
				<Box display="flex" alignItems="center">
					<Tooltip title="Exportar" arrow TransitionComponent={Zoom}>
						<IconButton aria-label="delete" size="large">
							<FileDownloadOutlined fontSize="inherit" />
						</IconButton>
					</Tooltip>
					<Tooltip title="Imprimir" arrow TransitionComponent={Zoom}>
						<IconButton aria-label="delete" size="large">
							<Print fontSize="inherit" />
						</IconButton>
					</Tooltip>
					<RegistroUsuariosDialog />
				</Box>
			</Box>
			<TablaConceptosAlmacen />
		</div>
	);
}


const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const RegistroUsuariosDialog = () => {
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
					Nuevo Concepto
				</Button>
			</Box>

			<Box sx={{ display: { sm: 'flex', md: 'none' } }}>
				<Tooltip title="Nuevo concepto" arrow TransitionComponent={Zoom}>
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
				maxWidth="sm"
				scroll="paper"
			>
				<DialogTitle>Nuevo concepto almacen</DialogTitle>
				<DialogContent>
					<FormularioConceptosAlmacen />
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
