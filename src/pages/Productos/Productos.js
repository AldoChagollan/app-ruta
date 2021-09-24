import React from 'react';
import { Tooltip, Box, IconButton, Zoom, Paper } from '@mui/material';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import { Print, FileDownloadOutlined, Search } from '@mui/icons-material';
import TablaProductos from './tablaProductos';
import RegistroProducto from './registroProducto';
import { ProductoProvider } from '../../contexts/productoContext';

export default function Productos() {
	return (
		<div>
			<Box display="flex" justifyContent="space-between">
				<Box sx={{ width: '50%', mb: 1, height: '100%' }} component={Paper}>
					<FormControl variant="outlined" fullWidth>
						<OutlinedInput
							id="search-producto"
							type="text"
							size="small"
							/* onChange={handleChange('password')} */
							endAdornment={
								<InputAdornment position="start">
									<IconButton
										aria-label="search producto"
										/* onClick={handleClickShowPassword} */
										edge="end"
									>
										<Search />
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Box>
				<Box display="flex" alignItems="center">
					<Tooltip title="Exportar" arrow TransitionComponent={Zoom}>
						<IconButton aria-label="delete" size="large">
							<FileDownloadOutlined fontSize="inherit" />
						</IconButton>
					</Tooltip>
					<Tooltip title="Imprimir" arrow TransitionComponent={Zoom}>
						<IconButton aria-label="delete" size="large">
							<Print fontSize="inherit" />
						</IconButton>
					</Tooltip>
					<ProductoProvider>
						<RegistroProducto />
					</ProductoProvider>
				</Box>
			</Box>
			<TablaProductos />
		</div>
	);
}
