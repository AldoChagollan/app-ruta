import React from 'react';
import { OutlinedInput, InputLabel, InputAdornment, IconButton, FormControl } from '@mui/material';
import { TextField, Checkbox, FormGroup, FormControlLabel, Box, Grid } from '@mui/material';
import { Cached } from '@mui/icons-material';

export default function FormularioInfoBasicaProducto() {
	return (
		<Box py={1}>
			<Grid container spacing={2}>
				<Grid item md={4}>
					<FormControl variant="outlined" name="codigo_barras" size="small" fullWidth>
						<InputLabel htmlFor="codigo_barras">Código de barras</InputLabel>
						<OutlinedInput
							id="codigo_barras"
							name="codigo_barras"
							size="small"
							/* value={values.password} */
							/* onChange={handleChange('password')} */
							endAdornment={
								<InputAdornment position="end">
									<IconButton color="primary">
										<Cached />
									</IconButton>
								</InputAdornment>
							}
							label="codigo de barras"
						/>
					</FormControl>
				</Grid>
				<Grid item md={4}>
					<TextField
						id="descripcion"
						name="descripcion"
						label="Producto"
						variant="outlined"
						size="small"
						fullWidth
					/>
				</Grid>
				<Grid item md={4}>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox id="granel" name="granel" checked />}
							label="Vender a granel"
						/>
					</FormGroup>
				</Grid>
			</Grid>
		</Box>
	);
}
