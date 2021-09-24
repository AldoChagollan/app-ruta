import React, { createContext, useState } from 'react';
import {
	initial_state_datos_generales,
	initial_state_precios,
	initial_state_preciosVenta,
	initial_state_unidadesVenta,
	initial_state_preciosPlazos,
	initial_state_imagenes,
	initial_state_imagenes_eliminadas,
	initial_state_onPreview,
	initial_state_validacion,
} from './initialStatesProducto';

export const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
	const [datos_generales, setDatosGenerales] = useState(initial_state_datos_generales);
	const [precios, setPrecios] = useState(initial_state_precios);
	const [preciosVenta, setPreciosVenta] = useState(initial_state_preciosVenta);
	const [unidadesVenta, setUnidadesVenta] = useState(initial_state_unidadesVenta);
	const [preciosPlazos, setPreciosPlazos] = useState(initial_state_preciosPlazos);
	const [imagenes, setImagenes] = useState(initial_state_imagenes);
	const [imagenes_eliminadas, setImagenesEliminadas] = useState(initial_state_imagenes_eliminadas);
	const [onPreview, setOnPreview] = useState(initial_state_onPreview);
	const [validacion, setValidacion] = useState(initial_state_validacion);
	const [ update, setUpdate ] = useState(false);

	return (
		<ProductoContext.Provider
			value={{
				datos_generales,
				setDatosGenerales,
				precios,
				setPrecios,
				imagenes,
				setImagenes,
				imagenes_eliminadas,
				setImagenesEliminadas,
				onPreview,
				setOnPreview,
				validacion,
				setValidacion,
				preciosVenta,
				setPreciosVenta,
				preciosPlazos,
				setPreciosPlazos,
				unidadesVenta,
				setUnidadesVenta,
				update, 
				setUpdate,
			}}
		>
			{children}
		</ProductoContext.Provider>
	);
};
