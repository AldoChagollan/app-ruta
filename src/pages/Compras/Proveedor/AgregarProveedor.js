import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RegistroProveedor from '../../Proveedores/RegistroProveedor'

export default function AgregarProveedor() {
	const [ proveedor, setProveedor ] = useState('proveedor 1');

	const handleChange = (event) => {
		setProveedor(event.target.value);
	};

	return (
		<Box display="flex" alignItems="center">
			<FormControl fullWidth size="small">
				<InputLabel id="select-proveedor">Proveedor</InputLabel>
				<Select
					labelId="select-proveedor"
					value={proveedor}
					label="Proveedor"
					onChange={handleChange}
				>
					<MenuItem value="proveedor 1">proveedor 1</MenuItem>
				</Select>
			</FormControl>
			<RegistroProveedor lite_button={true} />
		</Box>
	);
}
