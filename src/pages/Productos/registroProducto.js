import React, { Fragment, forwardRef, useState } from 'react';
import { IconButton, Slide, Button, Tooltip, Zoom, DialogTitle } from '@mui/material';
import { Dialog, DialogActions, DialogContent, Tab, Tabs, AppBar, Box } from '@mui/material';
import { AppRegistration, /* PriceChange, */ Event, AddPhotoAlternate } from '@mui/icons-material';
import { Add, Done, NavigateNext, NavigateBefore, Close } from '@mui/icons-material';
import TabPanelRegistroProducto from './registroForms';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

export default function RegistroProducto({ litle_button }) {
	const [ open, setOpen ] = useState(false);
	const [ value, setValue ] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setValue(0);
	};

	return (
		<Fragment>
			{litle_button ? (
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
							Nuevo producto
						</Button>
					</Box>
					<Box sx={{ display: { sm: 'flex', md: 'none' } }}>
						<Tooltip title="Nuevo producto" arrow TransitionComponent={Zoom}>
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
				maxWidth="lg"
				scroll="paper"
			>
				<DialogTitle sx={{ px: 0, py: 0 }}>
					<AppBar position="static" color="transparent" elevation={1}>
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="primary"
							/* variant="fullWidth" */
							centered
						>
							{/* <Tab icon={<AppRegistration fontSize="large" />} label="Datos básicos" {...a11yProps(0)} /> */}
							<Tab icon={<AppRegistration fontSize="large" />} label="Datos Básicos" {...a11yProps(0)} />
							<Tab icon={<Event fontSize="large" />} label="Precio a plazos" {...a11yProps(1)} />
							<Tab icon={<AddPhotoAlternate fontSize="large" />} label="Imagenes" {...a11yProps(2)} />
						</Tabs>
					</AppBar>
				</DialogTitle>
				<DialogContent sx={{ p: 0 }}>
					<TabPanelRegistroProducto value={value} setValue={setValue} />
				</DialogContent>
				<DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						variant="text"
						color="primary"
						onClick={() => setValue(value - 1)}
						size="large"
						startIcon={<NavigateBefore />}
						disabled={value === 0}
					>
						Anterior
					</Button>
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
						color={value === 2 ? 'success' : 'primary'}
						onClick={() => (value === 2 ? handleClose() : setValue(value + 1))}
						size="large"
						endIcon={value === 2 ? <Done /> : <NavigateNext />}
						disableElevation
					>
						{value === 2 ? 'Guardar' : 'Siguiente'}
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
}
