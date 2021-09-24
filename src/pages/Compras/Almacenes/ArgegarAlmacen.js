import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RegistroAlmacenes from '../../Almacenes/AgregarAlmacen/RegistroAlmacenes'

export default function AgregarAlmacen() {
	const [ almacen, setAlmacen ] = useState('almacen 1');

	const handleChange = (event) => {
		setAlmacen(event.target.value);
	};

	return (
		<Box display="flex" alignItems="center">
			<FormControl fullWidth size="small">
				<InputLabel id="select-almacen">Almacen</InputLabel>
				<Select
					labelId="select-almacen"
					value={almacen}
					label="Almacen"
					onChange={handleChange}
				>
					<MenuItem value="almacen 1">almacen 1</MenuItem>
				</Select>
			</FormControl>
			<RegistroAlmacenes lite_button={true} />
		</Box>
	);
}
