import React, { Fragment, /* useCallback, */ useContext/* , useEffect, useState */ } from 'react';
import { InputAdornment, TextField, Typography, TableRow, TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ProductoContext } from '../../../../contexts/productoContext';

const useStyles = makeStyles({
	input: {
		'& input[type=number]': {
			'-moz-appearance': 'textfield'
		},
		'& input[type=number]::-webkit-outer-spin-button': {
			'-webkit-appearance': 'none',
			margin: 0
		},
		'& input[type=number]::-webkit-inner-spin-button': {
			'-webkit-appearance': 'none',
			margin: 0
		}
	},
});

export default function PreciosVenta({ data, index }) {
	const { preciosVenta } = useContext(ProductoContext);

	return (
		<Fragment>
			<TableRow>
				<TableCell component="th" scope="row" sx={{ border: 0 }} width={200}>
					<b>{data}</b>
				</TableCell>
				{preciosVenta.map((res, index) => <RenderPrecios key={index} data={res} index={index} tipo={data} />)}
			</TableRow>
		</Fragment>
	);
}

const RenderPrecios = ({ data, index, tipo }) => {
	const classes = useStyles();
	/* const { preciosP, precios, unidadVentaXDefecto, setUnidadVentaXDefecto, preciosVenta } = useContext(
		ProductoContext
	); */
	/* const [ precio_venta, setPrecioVenta ] = useState(data.precio_venta);
	const [ precio_neto, setPrecioNeto ] = useState(data.precio_neto);
	const [ utilidad, setUtilidad ] = useState(data.utilidad);
	const [ mayoreo, setMayoreo ] = useState(data.unidad_mayoreo); */

	/* const obtenerUtilidad = (value) => {
		if (!value) {
			setUtilidad('');
			return;
		} else {
			for (let i = 0; i < preciosP.length; i++) {
				const element = preciosP[i];
				if (element.numero_precio === data.numero_precio) {
					preciosP[i].utilidad = parseFloat(value);
					setUtilidad(parseFloat(value));

					let utilidad = 1;
					let verificacion_entero = false;
					let valor2 = value;

					if (parseFloat(value) < 10) valor2 = '0' + value.replace(/[.]/g, '');
					if (value > 99) {
						valor2 = value / 100;
						verificacion_entero = true;
					}

					if (!verificacion_entero) {
						utilidad = '.' + valor2.replace(/[.]/g, '');
					} else {
						utilidad = parseFloat(valor2);
					}

					const ganancia_utilidad_sin_impuestos =
						precios.unidad_de_compra.precio_unitario_sin_impuesto +
						precios.unidad_de_compra.precio_unitario_sin_impuesto * utilidad;
					preciosP[i].precio_venta = parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2));
					setPrecioVenta(parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2)));

					if (precios.iva_activo || precios.ieps_activo) {
						const ganancia_utilidad_con_impuestos =
							precios.unidad_de_compra.precio_unitario_con_impuesto +
							precios.unidad_de_compra.precio_unitario_con_impuesto * utilidad;
						preciosP[i].precio_neto = parseFloat(ganancia_utilidad_con_impuestos.toFixed(2));
						setPrecioNeto(parseFloat(ganancia_utilidad_con_impuestos.toFixed(2)));
						if (element.numero_precio === 1) {
							let precio = parseFloat(ganancia_utilidad_con_impuestos.toFixed(2));
							if (unidadVentaXDefecto.unidad === 'Caja' || unidadVentaXDefecto.unidad === 'Costal') {
								precio =
									unidadVentaXDefecto.cantidad *
									parseFloat(ganancia_utilidad_con_impuestos.toFixed(2));
							}
							setUnidadVentaXDefecto({
								...unidadVentaXDefecto,
								precio: parseFloat(precio.toFixed(2))
							});
						}
					} else {
						setPrecioNeto(parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2)));
						if (element.numero_precio === 1) {
							let precio = parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2));
							if (unidadVentaXDefecto.unidad === 'Caja' || unidadVentaXDefecto.unidad === 'Costal') {
								precio =
									unidadVentaXDefecto.cantidad *
									parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2));
							}
							setUnidadVentaXDefecto({
								...unidadVentaXDefecto,
								precio: parseFloat(precio.toFixed(2))
							});
						}
					}
				}
			}
		}
	}; */

	/* const obtenerPrecioNeto = (value) => {
		if (!value) {
			setPrecioNeto('');
			return;
		} else {
			for (let i = 0; i < preciosP.length; i++) {
				const element = preciosP[i];
				if (element.numero_precio === data.numero_precio) {
					preciosP[i].precio_neto = parseFloat(value);
					setPrecioNeto(value);
					if (element.numero_precio === 1) {
						let precio = parseFloat(value);
						if (unidadVentaXDefecto.unidad === 'Caja' || unidadVentaXDefecto.unidad === 'Costal') {
							precio = unidadVentaXDefecto.cantidad * parseFloat(value);
						}
						setUnidadVentaXDefecto({
							...unidadVentaXDefecto,
							precio: parseFloat(precio.toFixed(2))
						});
					}

					let new_utilidad;

					if (precios.iva_activo || precios.ieps_activo) {
						new_utilidad =
							parseFloat(value) / parseFloat(precios.unidad_de_compra.precio_unitario_con_impuesto);
					} else {
						new_utilidad =
							parseFloat(value) / parseFloat(precios.unidad_de_compra.precio_unitario_sin_impuesto);
					}

					let porcent = parseFloat(((new_utilidad - 1) * 100).toFixed(2));
					preciosP[i].utilidad = porcent;
					setUtilidad(porcent);

					let utilidad;
					const valor = porcent.toString().replace(/[.]/g, '');

					utilidad = '.' + valor;
					if (valor < 10) utilidad = '.0' + valor;
					if (valor % 100 === 0) utilidad = valor / 100;
					const precio = (precios.unidad_de_compra.precio_unitario_sin_impuesto +
						precios.unidad_de_compra.precio_unitario_sin_impuesto * utilidad).toFixed(2);
					preciosP[i].precio_venta = parseFloat(precio);
					setPrecioVenta(precio);
				}
			}
		}
	}; */

	/* const obtenerMayoreo = (value) => {
		for (let i = 0; i < preciosP.length; i++) {
			const element = preciosP[i];
			if (element.numero_precio === data.numero_precio) {
				preciosP[i].unidad_mayoreo = parseInt(value);
				setMayoreo(value);
			}
		}
	}; */

	/* const calculos = useCallback(
		() => {
			if (!precios.unidad_de_compra.precio_unitario_sin_impuesto) return;
			for (let i = 0; i < preciosP.length; i++) {
				const element = preciosP[i];

				let nuevo_array = {
					numero_precio: element.numero_precio,
					utilidad: element.utilidad,
					precio_neto: element.precio_neto,
					unidad_mayoreo: element.unidad_mayoreo,
					precio_venta: element.precio_venta
				};

				if (element.numero_precio === data.numero_precio) {
					if (!data.utilidad) {
						nuevo_array.precio_venta = precios.unidad_de_compra.precio_unitario_sin_impuesto;
						preciosP.slice(i, 1, nuevo_array);

						setPrecioVenta(precios.unidad_de_compra.precio_unitario_sin_impuesto);
					}
					if (!precios.iva_activo && !precios.ieps_activo) {
						nuevo_array.precio_neto = precios.unidad_de_compra.precio_unitario_sin_impuesto;
						preciosP.slice(i, 1, nuevo_array);

						setPrecioNeto(precios.unidad_de_compra.precio_unitario_sin_impuesto);
						if (element.numero_precio === 1) {
							let precio = precios.unidad_de_compra.precio_unitario_sin_impuesto;
							if (unidadVentaXDefecto.unidad === 'Caja' || unidadVentaXDefecto.unidad === 'Costal') {
								precio =
									unidadVentaXDefecto.cantidad *
									precios.unidad_de_compra.precio_unitario_sin_impuesto;
							}
							setUnidadVentaXDefecto({
								...unidadVentaXDefecto,
								precio: parseFloat(precio.toFixed(2))
							});
						}
					} else {
						nuevo_array.precio_neto = precios.unidad_de_compra.precio_unitario_con_impuesto;
						preciosP.slice(i, 1, nuevo_array);
						setPrecioNeto(precios.unidad_de_compra.precio_unitario_con_impuesto);
						if (element.numero_precio === 1) {
							let precio = precios.unidad_de_compra.precio_unitario_con_impuesto;
							if (unidadVentaXDefecto.unidad === 'Caja' || unidadVentaXDefecto.unidad === 'Costal') {
								precio =
									unidadVentaXDefecto.cantidad *
									precios.unidad_de_compra.precio_unitario_con_impuesto;
							}
							setUnidadVentaXDefecto({
								...unidadVentaXDefecto,
								precio: parseFloat(precio.toFixed(2))
							});
						}
					}

					let verificacion_entero = false;
					let new_utilidad = 0;
					new_utilidad = utilidad;

					if (parseFloat(utilidad) < 10) new_utilidad = '0' + utilidad.toString().replace(/[.]/g, '');
					if (utilidad > 99) {
						new_utilidad = utilidad / 100;
						verificacion_entero = true;
					}

					if (!verificacion_entero) {
						new_utilidad = '.' + new_utilidad.toString().replace(/[.]/g, '');
					} else {
						new_utilidad = parseFloat(new_utilidad);
					}

					const ganancia_utilidad_sin_impuestos =
						precios.unidad_de_compra.precio_unitario_sin_impuesto +
						precios.unidad_de_compra.precio_unitario_sin_impuesto * new_utilidad;

					nuevo_array.precio_venta = parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2));
					preciosP.slice(i, 1, nuevo_array);

					setPrecioVenta(parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2)));

					if (precios.iva_activo || precios.ieps_activo) {
						const ganancia_utilidad_con_impuestos =
							precios.unidad_de_compra.precio_unitario_con_impuesto +
							precios.unidad_de_compra.precio_unitario_con_impuesto * new_utilidad;
						nuevo_array.precio_neto = parseFloat(ganancia_utilidad_con_impuestos.toFixed(2));
						preciosP.slice(i, 1, nuevo_array);

						setPrecioNeto(parseFloat(ganancia_utilidad_con_impuestos.toFixed(2)));
						if (element.numero_precio === 1) {
							let precio = parseFloat(ganancia_utilidad_con_impuestos.toFixed(2));
							if (unidadVentaXDefecto.unidad === 'Caja' || unidadVentaXDefecto.unidad === 'Costal') {
								precio =
									unidadVentaXDefecto.cantidad *
									parseFloat(ganancia_utilidad_con_impuestos.toFixed(2));
							}
							setUnidadVentaXDefecto({
								...unidadVentaXDefecto,
								precio: parseFloat(precio.toFixed(2))
							});
						}
					} else {
						setPrecioNeto(parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2)));
						if (element.numero_precio === 1) {
							let precio = parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2));
							if (unidadVentaXDefecto.unidad === 'Caja' || unidadVentaXDefecto.unidad === 'Costal') {
								precio =
									unidadVentaXDefecto.cantidad *
									parseFloat(ganancia_utilidad_sin_impuestos.toFixed(2));
							}
							setUnidadVentaXDefecto({
								...unidadVentaXDefecto,
								precio: parseFloat(precio.toFixed(2))
							});
						}
					}
				}
			}
		},
		[ precios.unidad_de_compra.precio_unitario_con_impuesto, precios.unidad_de_compra.precio_unitario_sin_impuesto ]
	); */

	/* const verificarCampoVacio = (name, value) => {
		switch (name) {
			case 'utilidad':
				if (!value) {
					setUtilidad(0);
					setPrecioNeto(precios.unidad_de_compra.precio_unitario_con_impuesto);
					for (let i = 0; i < preciosP.length; i++) {
						preciosP[i].utilidad = 0;
						preciosP[i].precio_neto = precios.unidad_de_compra.precio_unitario_con_impuesto;
					}
				}
				break;
			case 'precio_neto':
				if (!value) {
					setUtilidad(0);
					setPrecioNeto(precios.unidad_de_compra.precio_unitario_con_impuesto);
					for (let i = 0; i < preciosP.length; i++) {
						preciosP[i].precio_neto = precios.unidad_de_compra.precio_unitario_con_impuesto;
						preciosP[i].utilidad = 0;
					}
				}
				break;
			case 'unidad_mayoreo':
				if (!value) {
					setMayoreo(0);
					for (let i = 0; i < preciosP.length; i++) {
						preciosP[i].unidad_mayoreo = 0;
					}
				}
				break;
			default:
				break;
		}
	}; */

	/* useEffect(
		() => {
			calculos();
		},
		[ calculos ]
	); */
	
	switch (tipo) {
		case 'Utilidad':
			return (
				<TableCell sx={{ border: 0 }} className={classes.input}>
					<TextField
						/* disabled={!parseFloat(precios.unidad_de_compra.precio_unitario_sin_impuesto)} */
						fullWidth
						type="number"
						InputProps={{
							inputProps: { min: 0 },
							endAdornment: <InputAdornment position="end">%</InputAdornment>
						}}
						size="small"
						/* value={utilidad} */
						name="utilidad"
						variant="outlined"
						/* onChange={(e) => obtenerUtilidad(e.target.value)} */
						/* onBlur={() => verificarCampoVacio('utilidad', utilidad)} */
						/* error={utilidad === ''} */
					/>
				</TableCell>
			);
		case 'Precios de venta':
			return (
				<TableCell sx={{ border: 0 }}>
					<Typography>{/* <b>{precio_venta}</b> */}1</Typography>
				</TableCell>
			);
		case 'Precio de venta NETO':
			return (
				<TableCell sx={{ border: 0 }} className={classes.input}>
					<TextField
						/* disabled={!parseFloat(precios.unidad_de_compra.precio_unitario_sin_impuesto)} */
						fullWidth
						type="number"
						InputProps={{ inputProps: { min: 0 } }}
						size="small"
						name="precio_neto"
						variant="outlined"
						/* value={precio_neto} */
						/* onChange={(e) => obtenerPrecioNeto(e.target.value)} */
						/* 	onBlur={() => verificarCampoVacio('precio_neto', precio_neto)} */
						/* error={precio_neto === ''} */
					/>
				</TableCell>
			);
		case 'Unidad X mayoreo':
			return (
				<TableCell sx={{ border: 0 }} className={classes.input}>
					{data.numero_precio > 1 ? (
						<TextField
							/* disabled={!parseFloat(precios.unidad_de_compra.precio_unitario_sin_impuesto)} */
							fullWidth
							type="number"
							InputProps={{ inputProps: { min: 0 } }}
							size="small"
							name="unidad_mayoreo"
							variant="outlined"
							/* value={mayoreo} */
							/* onChange={(e) => obtenerMayoreo(e.target.value)} */
							/* onBlur={() => verificarCampoVacio('unidad_mayoreo', mayoreo)} */
							/* error={mayoreo === ''} */
						/>
					) : null}
				</TableCell>
			);
			default:
				break;
	}
};
