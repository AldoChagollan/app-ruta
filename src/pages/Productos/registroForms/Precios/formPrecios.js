import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { Divider, FormControlLabel, Alert, FormControl, Typography, FormHelperText } from '@mui/material';
import { TextField, Checkbox, FormGroup, Box, Grid, Select, MenuItem, InputLabel } from '@mui/material';
import { TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Container } from '@mui/material';
import PreciosVenta from './preciosDeVenta';
import { ProductoContext } from '../../../../contexts/productoContext';
import FormularioInfoBasicaProducto from '../InfoBasica/formInfoBasica'

const useStyles = makeStyles({
	obligatorio: {
		'& .obligatorio': {
			color: 'red'
		}
	}

});

export default function FormularioPreciosProducto() {
	const { precios, validacion } = useContext(ProductoContext);
	const classes = useStyles();
	return (
		<Box className={classes.obligatorio}>
			<FormularioInfoBasicaProducto />
				<Divider sx={{ my: 1 }}>
					<b>Impuestos</b>
				</Divider>
			<Container maxWidth="md">
				<Grid container spacing={2}>
					<Grid item md={4}>
						<Alert severity="info" sx={{ p: 2 }}>
							Selecciona los impuestos aplicables
						</Alert>
					</Grid>
					<Grid item md={4}>
						<FormGroup>
							<FormControlLabel control={<Checkbox defaultChecked />} label="IVA" name="iva_activo" />
						</FormGroup>
						<TextField
							id="iva"
							name="iva"
							label="Porcentaje IVA"
							variant="outlined"
							size="small"
							/* fullWidth */
							type="number"
						/>
					</Grid>
					<Grid item md={4}>
						<FormGroup>
							<FormControlLabel control={<Checkbox defaultChecked />} label="IEPS" name="ieps_activo" />
						</FormGroup>
						<TextField
							id="ieps"
							name="ieps"
							label="Porcentaje IEPS"
							variant="outlined"
							size="small"
							type="number"
							/* fullWidth */
						/>
					</Grid>
				</Grid>
			</Container>
			<Divider sx={{ my: 3 }}>
				<b>Unidad y precio de compra</b>
			</Divider>
			<Container maxWidth="md">
			<Grid container spacing={2}>
				<Grid item md={2}>
					<InputLabel htmlFor="codigo_barras">Unidad</InputLabel>
					<Box display="flex">
						<FormControl
							variant="outlined"
							fullWidth
							size="small"
							error={validacion.error && !precios.unidad_de_compra.unidad}
						>
							{precios.granel ? (
								<Select
									id="form-producto-categoria"
									name="unidad"
									value={precios.unidad_de_compra.unidad}
									/* onChange={obtenerUnidadCompra} */
								>
									<MenuItem value="Kg">Kg</MenuItem>
									<MenuItem value="Costal">Costal</MenuItem>
									<MenuItem value="Lt">Lt</MenuItem>
								</Select>
							) : (
								<Select
									id="form-producto-categoria"
									name="unidad"
									value={precios.unidad_de_compra.unidad}
									/* onChange={obtenerUnidadCompra} */
								>
									<MenuItem value="Caja">Caja</MenuItem>
									<MenuItem value="Pz">Pz</MenuItem>
								</Select>
							)}
							<FormHelperText>{validacion.message}</FormHelperText>
						</FormControl>
					</Box>
				</Grid>
				<Grid item md={2}>
					<InputLabel htmlFor="codigo_barras">Conversion</InputLabel>
					<Typography variant="h6">
						{precios.unidad_de_compra.unidad === 'Caja' ? (
							'Pz'
						) : precios.unidad_de_compra.unidad === 'Costal' ? (
							'Kg'
						) : (
							precios.unidad_de_compra.unidad
						)}
					</Typography>
				</Grid>
				<Grid item md={2}>
					<InputLabel htmlFor="codigo_barras">
						<span className="obligatorio">* </span>Factor X Unidad
					</InputLabel>
					<TextField
						disabled={
							precios.unidad_de_compra.unidad === 'Caja' ||
							precios.unidad_de_compra.unidad === 'Costal' ? (
								false
							) : (
								true
							)
						}
						type="number"
						InputProps={{ inputProps: { min: 1 } }}
						size="small"
						error={validacion.error && !precios.unidad_de_compra.cantidad}
						name="cantidad"
						variant="outlined"
						value={precios.unidad_de_compra.cantidad}
						helperText={validacion.message}
						/* onChange={obtenerUnidadCompra} */
					/>
				</Grid>
				<Grid item md={3}>
					<InputLabel htmlFor="codigo_barras">
						<span className="obligatorio">* </span>Precio sin impuestos
					</InputLabel>
					<TextField
						type="number"
						InputProps={{ inputProps: { min: 0 } }}
						size="small"
						error={validacion.error && !precios.precio_de_compra.precio_sin_impuesto}
						name="precio_sin_impuesto"
						id="form-producto-precio_sin_impuesto"
						variant="outlined"
						value={precios.precio_de_compra.precio_sin_impuesto}
						helperText={validacion.message}
						/* onChange={obtenerPreciosCompra} */
					/>
				</Grid>
				<Grid item md={3}>
					<InputLabel htmlFor="codigo_barras">
						<span className="obligatorio">* </span>Precio con impuestos
					</InputLabel>
					<TextField
						disabled={!precios.iva_activo && !precios.ieps_activo}
						type="number"
						InputProps={{ inputProps: { min: 0 } }}
						size="small"
						error={validacion.error && !precios.precio_de_compra.precio_con_impuesto}
						name="precio_con_impuesto"
						id="form-producto-precio_con_impuesto"
						variant="outlined"
						value={precios.precio_de_compra.precio_con_impuesto}
						helperText={validacion.message}
						/* onChange={obtenerPreciosCompra} */
					/>
				</Grid>
			</Grid>
			<Box my={2} />
			<Grid container spacing={2}>
				<Grid item md={2}>
					<InputLabel htmlFor="codigo_barras">IVA</InputLabel>
					<Typography variant="h6">
						<b>$ {precios.precio_de_compra.iva}</b>
					</Typography>
				</Grid>
				<Grid item md={2}>
					<InputLabel htmlFor="codigo_barras">IEPS</InputLabel>
					<Typography variant="h6">
						<b>$ {precios.precio_de_compra.ieps}</b>
					</Typography>
				</Grid>
				<Grid item md={4}>
					<InputLabel htmlFor="codigo_barras">Precio unitario sin impuestos</InputLabel>
					<Typography variant="h6">
						<b>$ {precios.unidad_de_compra.precio_unitario_sin_impuesto}</b>
					</Typography>
				</Grid>
				<Grid item md={4}>
					<InputLabel htmlFor="codigo_barras">Precio unitario con impuestos</InputLabel>
					<Typography variant="h6">
						<b>$ {precios.unidad_de_compra.precio_unitario_con_impuesto}</b>
					</Typography>
				</Grid>
			</Grid>
			</Container>
			<Divider sx={{ my: 3 }}>
				<b>Precios de venta</b>
			</Divider>
			<TableContainer >
				<Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
					<TableHead>
						<TableRow>
							<TableCell />
							{[1,2,3,4,5,6].map((numero, index) => <TableCell key={index}>Precios {numero}</TableCell>)}
						</TableRow>
					</TableHead>
					<TableBody>
						{['Utilidad', 'Precios de venta', 'Precio de venta NETO', 'Unidad X mayoreo'].map((res, index) => <PreciosVenta key={index} data={res} />)}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
