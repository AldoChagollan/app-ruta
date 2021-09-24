import React/* , { useState } */ from 'react';
import { TextField, Box, Grid, Divider } from '@mui/material';

export default function FormularioClientes() {
	/* const [ showPassword, setShowPassword ] = useState(false); */
	/* 
    datos

    nombre,
    direccion: {
        calle,
        numero: {
            interior,
            exterior,
        },
        colonia,
        ciudad,
        codigo_postal
    }
    telefono,
    correo_electronico,
    */

	return (
		<Box py={1}>
			<form autoComplete="off">
				<TextField
					id="nombre_proveedor"
					name="nombre"
					label="Nombre usuario"
					variant="outlined"
					size="small"
					fullWidth
					margin="dense"
				/>
				<TextField
					id="correo_proveedor"
					name="correo"
					label="Correo electrónico"
					variant="outlined"
					size="small"
					fullWidth
					margin="dense"
				/>
				<TextField
					id="telefono_proveedor"
					name="telefono"
					label="Telefono"
					variant="outlined"
					size="small"
					fullWidth
					margin="dense"
				/>
				<Divider>Domicilio</Divider>
				<Grid container spacing={1}>
					<Grid item xs={12} md={6}>
						<TextField
							id="calle_proveedor"
							name="calle"
							label="Calle"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
                    <Grid item xs={6} md={3}>
						<TextField
							id="numero_exterior_proveedor"
							name="exterior"
							label="Numero exterior"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
                    <Grid item xs={6} md={3}>
						<TextField
							id="numero_interior_proveedor"
							name="interior"
							label="Numero interior"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							id="colonia_proveedor"
							name="colonia"
							label="Colonia"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
                    <Grid item xs={12} md={4}>
						<TextField
							id="ciudad_proveedor"
							name="ciudad"
							label="Ciudad"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
                    <Grid item xs={12} md={4}>
						<TextField
							id="codigo_postal_proveedor"
							name="codigo_postal"
							label="Código postal"
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
}
