import React, { useState } from 'react';
import { OutlinedInput, InputLabel, InputAdornment, IconButton, FormControl } from '@mui/material';
import { TextField, Box, MenuItem, Select } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function FormularioUsiarios() {
	const [ showPassword, setShowPassword ] = useState(false);
	/* 
    datos

    correo,
    nombre,
    telefono,
    empresa,
    tipo_acceso,
    password,
    repeatPassword
    */
	const handleClickShowPassword = () => setShowPassword(!showPassword);

	return (
		<Box py={1}>
			<form autoComplete="off">
				<TextField
					id="nombre"
					name="nombre"
					label="Nombre usuario"
					variant="outlined"
					size="small"
					fullWidth
					margin="dense"
				/>
				<TextField
					id="correo"
					name="correo"
					label="Correo electrónico"
					variant="outlined"
					size="small"
					fullWidth
					margin="dense"
				/>
				<TextField
					id="telefono"
					name="telefono"
					label="Telefono"
					variant="outlined"
					size="small"
					fullWidth
					margin="dense"
				/>
				<FormControl fullWidth name="tipo_acceso" size="small" margin="dense">
					<InputLabel id="tipo_acceso-label">Tipo de acceso</InputLabel>
					<Select
						labelId="tipo_acceso-label"
						id="tipo_acceso-id"
						name="tipo_acceso"
						/* value={age} */
						label="Tipo de acceso"
						/* onChange={handleChange} */
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
				<FormControl variant="outlined" size="small" fullWidth name="password" margin="dense">
					<InputLabel htmlFor="password-input">Password</InputLabel>
					<OutlinedInput
						id="password-input"
						name="password"
						type={showPassword ? 'text' : 'password'}
						/* value={password} */
						/* onChange={handleChange('password')} */
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={handleClickShowPassword}
									onMouseDown={(e) => e.preventDefault()}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
				</FormControl>
				<FormControl sx={{ my: 1 }} variant="outlined" size="small" fullWidth name="repeatPassword">
					<InputLabel htmlFor="repeatPassword-input">Password</InputLabel>
					<OutlinedInput
						id="repeatPassword-input"
						name="repeatPassword"
						type={showPassword ? 'text' : 'password'}
						/* value={password} */
						/* onChange={handleChange('password')} */
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={handleClickShowPassword}
									onMouseDown={(e) => e.preventDefault()}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
				</FormControl>
			</form>
		</Box>
	);
}
