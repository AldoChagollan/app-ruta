import React from 'react';
import { InputLabel, FormControl } from '@mui/material';
import { TextField, Box, MenuItem, Select } from '@mui/material';

export default function FormularioConceptosAlmacen() {

	return (
		<Box py={1}>
			<form autoComplete="off">
				<TextField
					id="concepto"
					name="concepto"
					label="Concepto"
					variant="outlined"
					size="small"
					fullWidth
					margin="dense"
				/>
				<FormControl fullWidth name="tipo" size="small" margin="dense">
					<InputLabel id="tipo-label">Tipo</InputLabel>
					<Select
						labelId="tipo-label"
						id="tipo-id"
						name="tipo"
						/* value={age} */
						label="Tipo de acceso"
						/* onChange={handleChange} */
					>
						<MenuItem value="ENTRADA">Entrada</MenuItem>
						<MenuItem value="SALIDA">Salida</MenuItem>
					</Select>
				</FormControl>
			</form>
		</Box>
	);
}
