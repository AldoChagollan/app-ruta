import React, { Fragment, useContext, useState } from 'react';
import { Grid, InputLabel, Typography, Select, FormControl, MenuItem, TextField, Button } from '@mui/material';
import TablaPreciosPlazos from './TablaPreciosPlazos';
import { ProductoContext } from '../../../../contexts/productoContext';

export default function PrecioPlazosProducto() {
	const { preciosPlazos, setPreciosPlazos, precios } = useContext(ProductoContext);
	const [ plazo, setPlazo ] = useState({
		plazo: '1',
		unidad: precios.granel ? 'Costal' : 'Pz',
		precio: 0
	});

	const obtenerPlazos = (e) => {
		if (e.target.name === 'precio') {
			setPlazo({
				...plazo,
				[e.target.name]: parseFloat(e.target.value)
			});
			return;
		}
		setPlazo({
			...plazo,
			[e.target.name]: e.target.value
		});
	};

	const guardarPlazo = () => {
		if (!plazo.plazo || !plazo.precio || !plazo.unidad) return;
		switch (plazo.unidad) {
			case 'Pz':
				setPreciosPlazos({
					...preciosPlazos,
					precio_piezas: [ ...preciosPlazos.precio_piezas, plazo ]
				});
				break;
			case 'Caja':
				setPreciosPlazos({
					...preciosPlazos,
					precio_cajas: [ ...preciosPlazos.precio_cajas, plazo ]
				});
				break;
			case 'Costal':
				setPreciosPlazos({
					...preciosPlazos,
					precio_costales: [ ...preciosPlazos.precio_costales, plazo ]
				});
				break;
			default:
				break;
		}
		setPlazo({
			...plazo,
			precio: 0
		});
	};

	return (
		<Fragment>
			<Typography className="precios-box" textAlign="center">
				Precio venta en PZ........ con impuestos(NETO): <b>$1234</b>
			</Typography>
			<Grid container spacing={3} sx={{ my: 3 }} justifyContent="center">
				<Grid item md={2}>
					<FormControl variant="outlined" fullWidth size="small" name="plazo">
						<InputLabel htmlFor="id-plazo-plazo">Plazo</InputLabel>
						<Select
							id="id-plazo-plazo"
							name="plazo"
							value={plazo.plazo}
							onChange={obtenerPlazos}
							label="Plazo"
						>
							<MenuItem value="1">1 Mes</MenuItem>
							<MenuItem value="2">2 Meses</MenuItem>
							<MenuItem value="6">6 Meses</MenuItem>
							<MenuItem value="8">8 Meses</MenuItem>
							<MenuItem value="12">12 Meses</MenuItem>
							<MenuItem value="18">18 Meses</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item md={2}>
					<FormControl variant="outlined" fullWidth size="small" name="unidad">
						<InputLabel htmlFor="id-unidad-plazo">Unidad</InputLabel>
						{precios.granel ? (
							<Select
								id="id-unidad-plazo"
								label="Unidad"
								name="unidad"
								value={plazo.unidad}
								onChange={obtenerPlazos}
							>
								<MenuItem value="Costal">Costal</MenuItem>
							</Select>
						) : (
							<Select
								id="id-unidad-plazo"
								label="Unidad"
								name="unidad"
								value={plazo.unidad}
								onChange={obtenerPlazos}
							>
								<MenuItem value="Caja">Caja</MenuItem>
								<MenuItem value="Pz">Pz</MenuItem>
							</Select>
						)}
					</FormControl>
				</Grid>
				<Grid item>
					<TextField
						label="Precio"
						type="number"
						InputProps={{ inputProps: { min: 0 } }}
						size="small"
						name="precio"
						value={plazo.precio}
						variant="outlined"
						onChange={obtenerPlazos}
					/>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary" onClick={() => guardarPlazo()}>
						Agregar
					</Button>
				</Grid>
			</Grid>
			<Grid container spacing={2} justifyContent="center">
				{precios.granel ? (
					<Grid item lg={3}>
						<Typography variant="h6" align="center">
							Costal
						</Typography>
						<TablaPreciosPlazos precios={preciosPlazos.precio_costales} />
					</Grid>
				) : (
					<Fragment>
						<Grid item lg={3}>
							<Typography variant="h6" align="center">
								Piezas
							</Typography>
							<TablaPreciosPlazos precios={preciosPlazos.precio_piezas} />
						</Grid>
						<Grid item lg={3}>
							<Typography variant="h6" align="center">
								Cajas
							</Typography>
							<TablaPreciosPlazos precios={preciosPlazos.precio_cajas} />
						</Grid>
					</Fragment>
				)}
			</Grid>
		</Fragment>
	);
}
