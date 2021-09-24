import React, { useContext, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { Dialog, DialogTitle, DialogActions, Button, Box } from '@mui/material';
import { ProductoContext } from '../../../../contexts/productoContext';
import { DeleteOutline, Event, LocalAtm } from '@mui/icons-material';

export default function TablaPreciosPlazos({ precios }) {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table" size="small">
				<TableHead>
					<TableRow>
						<TableCell>
							<Box display="flex" alignItems="center">
								<Event color="action" />Plazo
							</Box>
						</TableCell>
						<TableCell>
							<Box display="flex" alignItems="center">
								<LocalAtm color="action" />Precio
							</Box>
						</TableCell>
						<TableCell />
					</TableRow>
				</TableHead>
				<TableBody>
					{precios.map((precio, index) => <RenderTablePlazos key={index} precio={precio} index={index} />)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

const RenderTablePlazos = ({ precio, index }) => {
	return (
		<TableRow>
			<TableCell>{precio.plazo}</TableCell>
			<TableCell>{precio.precio}</TableCell>
			<TableCell>
				<ModalDeletePlazos index={index} unidad={precio.unidad} />
			</TableCell>
		</TableRow>
	);
};

const ModalDeletePlazos = ({ index, unidad }) => {
	const [ open, setOpen ] = useState(false);
	const { preciosPlazos, setPreciosPlazos } = useContext(ProductoContext);

	const toggleModal = () => {
		setOpen(!open);
	};

	const eliminarUnidad = () => {
		switch (unidad) {
			case 'Pz':
				preciosPlazos.precio_piezas.splice(index, 1);
				setPreciosPlazos({
					...preciosPlazos,
					precio_piezas: [ ...preciosPlazos.precio_piezas ]
				});
				break;
			case 'Caja':
				preciosPlazos.precio_cajas.splice(index, 1);
				setPreciosPlazos({
					...preciosPlazos,
					precio_cajas: [ ...preciosPlazos.precio_cajas ]
				});
				break;
			case 'Costal':
				preciosPlazos.precio_costales.splice(index, 1);
				setPreciosPlazos({
					...preciosPlazos,
					precio_costales: [ ...preciosPlazos.precio_costales ]
				});
				break;
			default:
				break;
		}
		toggleModal();
	};

	return (
		<div>
			<IconButton color="primary" onClick={() => toggleModal()}>
				<DeleteOutline color="primary" />
			</IconButton>
			<Dialog open={open} onClose={toggleModal}>
				<DialogTitle>{'Se eliminará este precio'}</DialogTitle>
				<DialogActions>
					<Button onClick={() => toggleModal()} color="primary">
						Cancelar
					</Button>
					<Button onClick={() => eliminarUnidad()} color="secondary" autoFocus>
						Eliminar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
