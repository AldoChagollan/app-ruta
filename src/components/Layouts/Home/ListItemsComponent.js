import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MapIcon from '@mui/icons-material/Map';
import RoomIcon from '@mui/icons-material/Room';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PieChartIcon from '@mui/icons-material/PieChart';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PrintIcon from '@mui/icons-material/Print';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { Category, ContentPaste, PriceChange, Storefront } from '@mui/icons-material';

const sizeIcon = 33;

export default function ListItemsComponent({ setTitle, title }) {
	return (
		<div>
			<ListItem
				button
				component={Link}
				to="/dashboard/indicadores"
				onClick={() => setTitle('Indicadores')}
				selected={title.toLowerCase() === 'indicadores'}
			>
				<ListItemIcon>
					<PieChartIcon
						sx={{fontSize: sizeIcon}}
						color={title.toLowerCase() === 'indicadores' ? 'primary' : 'inherit'}
					/>
				</ListItemIcon>
				<ListItemText primary="Indicadores" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/catalogos"
				onClick={() => setTitle('Catalogos')}
				selected={title.toLowerCase() === 'catalogos'}
			>
				<ListItemIcon>
					<DashboardCustomizeIcon
						sx={{fontSize: sizeIcon}}
						color={title.toLowerCase() === 'catalogos' ? 'primary' : 'inherit'}
					/>
				</ListItemIcon>
				<ListItemText primary="Catalogos" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/productos"
				onClick={() => setTitle('Productos')}
				selected={title.toLowerCase() === 'productos'}
			>
				<ListItemIcon>
					<Category sx={{fontSize: sizeIcon}} color={title.toLowerCase() === 'productos' ? 'primary' : 'inherit'} />
				</ListItemIcon>
				<ListItemText primary="Productos" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/almacenes"
				onClick={() => setTitle('Almacenes')}
				selected={title.toLowerCase() === 'almacenes'}
			>
				<ListItemIcon>
					<AddBusinessIcon
						sx={{fontSize: sizeIcon}}
						color={title.toLowerCase() === 'almacenes' ? 'primary' : 'inherit'}
					/>
				</ListItemIcon>
				<ListItemText primary="Almacenes" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/compras"
				onClick={() => setTitle('Compras')}
				selected={title.toLowerCase() === 'compras'}
			>
				<ListItemIcon>
					<LocalMallIcon
						sx={{fontSize: sizeIcon}}
						color={title.toLowerCase() === 'compras' ? 'primary' : 'inherit'}
					/>
				</ListItemIcon>
				<ListItemText primary="Compras" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/ventas"
				onClick={() => setTitle('Ventas')}
				selected={title.toLowerCase() === 'ventas'}
			>
				<ListItemIcon>
					<ShoppingCartIcon sx={{fontSize: sizeIcon}} color={title.toLowerCase() === 'ventas' ? 'primary' : 'inherit'} />
				</ListItemIcon>
				<ListItemText primary="Ventas" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/clientes"
				onClick={() => setTitle('Clientes')}
				selected={title.toLowerCase() === 'clientes'}
			>
				<ListItemIcon>
					<AccountBoxIcon
						sx={{fontSize: sizeIcon}}
						color={title.toLowerCase() === 'clientes' ? 'primary' : 'inherit'}
					/>
				</ListItemIcon>
				<ListItemText primary="Clientes" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/proveedores"
				onClick={() => setTitle('Proveedores')}
				selected={title.toLowerCase() === 'proveedores'}
			>
				<ListItemIcon>
					<Storefront
						sx={{fontSize: sizeIcon}}
						color={title.toLowerCase() === 'proveedores' ? 'primary' : 'inherit'}
					/>
				</ListItemIcon>
				<ListItemText primary="Proveedores" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/rutas"
				onClick={() => setTitle('Rutas')}
				selected={title.toLowerCase() === 'rutas'}
			>
				<ListItemIcon>
					<MapIcon sx={{fontSize: sizeIcon}} color={title.toLowerCase() === 'rutas' ? 'primary' : 'inherit'} />
				</ListItemIcon>
				<ListItemText primary="Rutas" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/abonos"
				onClick={() => setTitle('Abonos')}
				selected={title.toLowerCase() === 'abonos'}
			>
				<ListItemIcon>
					<PaymentIcon sx={{fontSize: sizeIcon}} color={title.toLowerCase() === 'abonos' ? 'primary' : 'inherit'} />
				</ListItemIcon>
				<ListItemText primary="Abonos" />
			</ListItem>
			{/* <ListItem
				button
				component={Link}
				to="/dashboard/produccion"
				onClick={() => setTitle('Producción')}
				selected={title.toLowerCase() === 'producción'}
			>
				<ListItemIcon>
					<AddBusinessIcon
						sx={{fontSize: sizeIcon}}
						color={title.toLowerCase() === 'producción' ? 'primary' : 'inherit'}
					/>
				</ListItemIcon>
				<ListItemText primary="Producción" />
			</ListItem> */}
			<ListItem
				button
				component={Link}
				to="/dashboard/visitas"
				onClick={() => setTitle('Visitas')}
				selected={title.toLowerCase() === 'visitas'}
			>
				<ListItemIcon>
					<RoomIcon sx={{fontSize: sizeIcon}} color={title.toLowerCase() === 'visitas' ? 'primary' : 'inherit'} />
				</ListItemIcon>
				<ListItemText primary="Visitas" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/gastos"
				onClick={() => setTitle('Gástos')}
				selected={title.toLowerCase() === 'gástos'}
			>
				<ListItemIcon>
					<PriceChange sx={{fontSize: sizeIcon}} color={title.toLowerCase() === 'gástos' ? 'primary' : 'inherit'} />
				</ListItemIcon>
				<ListItemText primary="Gástos" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/inventarios"
				onClick={() => setTitle('Inventarios')}
				selected={title.toLowerCase() === 'inventarios'}
			>
				<ListItemIcon>
					<ContentPaste
						sx={{fontSize: sizeIcon}}
						color={title.toLowerCase() === 'inventarios' ? 'primary' : 'inherit'}
					/>
				</ListItemIcon>
				<ListItemText primary="Inventarios" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/cortes"
				onClick={() => setTitle('Cortes de caja')}
				selected={title.toLowerCase() === 'cortes de caja'}
			>
				<ListItemIcon>
					<LogoutIcon
						sx={{fontSize: sizeIcon}}
						color={title.toLowerCase() === 'cortes de caja' ? 'primary' : 'inherit'}
					/>
				</ListItemIcon>
				<ListItemText primary="Cortes de caja" />
			</ListItem>
			<ListItem
				button
				component={Link}
				to="/dashboard/reportes"
				onClick={() => setTitle('Reportes')}
				selected={title.toLowerCase() === 'reportes'}
			>
				<ListItemIcon>
					<PrintIcon sx={{fontSize: sizeIcon}} color={title.toLowerCase() === 'reportes' ? 'primary' : 'inherit'} />
				</ListItemIcon>
				<ListItemText primary="Reportes" />
			</ListItem>
		</div>
	);
}
