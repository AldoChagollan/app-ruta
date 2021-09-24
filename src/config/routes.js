//layout
import LayoutDashboard from '../components/Layouts/Home/Home';
import LayoutLogin from '../components/Layouts/Login/login';

//Admin pages
import Abonos from '../pages/Abonos/Abonos';
import Catalogos from '../pages/Catalogos/Catalogos';
import Clientes from '../pages/Clientes/Clientes';
import Compras from '../pages/Compras/Compras';
import Cortes from '../pages/Cortes/Cortes';
import Gastos from '../pages/Gastos/Gastos';
import Indicadores from '../pages/Indicadores/Indicadores';
import Inventarios from '../pages/Inventarios/Inventarios';
import Produccion from '../pages/Produccion/Produccion';
import Productos from '../pages/Productos/Productos.js';
import Reportes from '../pages/Reportes/Reportes';
import Rutas from '../pages/Rutas/Rutas';
import Ventas from '../pages/Ventas/Ventas';
import Visitas from '../pages/Visitas/Visitas';
import Proveedores from '../pages/Proveedores/Proveedores';
import Almacenes from '../pages/Almacenes/Almacenes';

//other
import PageNotFound from '../components/Errors/PageNotFound';

const routes = [
	{
		path: '/',
		component: LayoutLogin,
		exact: true
	},
	{
		path: '/dashboard',
		component: LayoutDashboard,
		exact: false,
		routes: [
			{
				path: '/dashboard/abonos',
				component: Abonos,
				exact: true,
			},
            {
				path: '/dashboard/catalogos',
				component: Catalogos,
				exact: true,
			},
            {
				path: '/dashboard/clientes',
				component: Clientes,
				exact: true,
			},
            {
				path: '/dashboard/compras',
				component: Compras,
				exact: true,
			},
            {
				path: '/dashboard/cortes',
				component: Cortes,
				exact: true,
			},
            {
				path: '/dashboard/gastos',
				component: Gastos,
				exact: true,
			},
            {
				path: '/dashboard/indicadores',
				component: Indicadores,
				exact: true,
			},
            {
				path: '/dashboard/inventarios',
				component: Inventarios,
				exact: true,
			},
            {
				path: '/dashboard/produccion',
				component: Produccion,
				exact: true,
			},
            {
				path: '/dashboard/productos',
				component: Productos,
				exact: true,
			},
            {
				path: '/dashboard/reportes',
				component: Reportes,
				exact: true,
			},
            {
				path: '/dashboard/rutas',
				component: Rutas,
				exact: true,
			},
            {
				path: '/dashboard/ventas',
				component: Ventas,
				exact: true,
			},
            {
				path: '/dashboard/visitas',
				component: Visitas,
				exact: true,
			},
			{
				path: '/dashboard/proveedores',
				component: Proveedores,
				exact: true,
			},
			{
				path: '/dashboard/almacenes',
				component: Almacenes,
				exact: true,
			},
			{
				component: PageNotFound
			}
		]
	}
];

export default routes;
