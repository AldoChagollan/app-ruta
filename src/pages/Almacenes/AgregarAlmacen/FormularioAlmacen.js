import React from 'react';
import { InputLabel, FormControl } from '@mui/material';
import { TextField, Box, MenuItem, Select } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FormularioAlmacen() {
	/* 
    datos

    nombre_almacen,
    id_empresa,
    inicial,
    concepto,
    */

	return (
		<Box py={1}>
			<form autoComplete="off">
				<TextField
					id="nombre_almacen"
					name="nombre_almacen"
					label="Nombre almacen"
					variant="outlined"
					size="small"
					fullWidth
					margin="dense"
				/>
				<FormControl fullWidth name="concepto" size="small" margin="dense">
					<InputLabel id="concepto-label">Tipo de acceso</InputLabel>
					<Select
						labelId="concepto-label"
						id="concepto-id"
						name="concepto"
						/* value={age} */
						label="Elige Concepto"
						/* onChange={handleChange} */
					>
						<MenuItem value="concepto 1">concepto 1</MenuItem>
					</Select>
				</FormControl>
				<FormGroup>
					<FormControlLabel control={<Checkbox defaultChecked />} label="Almacen inicial" />
				</FormGroup>
			</form>
		</Box>
	);
}
