import React, { /* useContext, */ useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import { Route, Switch } from 'react-router-dom';
import ListItemsComponent from './ListItemsComponent';
/* import PaletteColors from './colorPalette' */
import LogOutButton from './logOut';
/* import { themeContext } from '../../../contexts/themesContext'; */

import { useDispatch, useSelector } from 'react-redux';

/* REEDUX ACTIONS */
import { cambiarModoOscuroAction } from '../../../actions/themeActions';
import { Badge } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen
	}),
	overflowX: 'hidden'
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(9)} + 1px)`
	}
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create([ 'width', 'margin' ], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme)
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme)
	})
}));

export default function Home(props) {
	const theme = useTheme();
	const [ open, setOpen ] = useState(true);
	/* const { mode, setMode } = useContext(themeContext); */

	const { routes } = props;
	const { pathname } = props.location;
	const url = pathname.split('/');
	const [ title, setTitle ] = useState(url[2]);

	/* utilizar useDispatch y te deuleve una funcion */
	const dispatch = useDispatch();
	/* manda a llamar el action de themesAction */
	const cambiarModoOscuro = (mode) => dispatch(cambiarModoOscuroAction(mode));
	/* obtener el modo de redux */
	const { mode } = useSelector((state) => state.themes);

	const handleDrawerToggle = () => setOpen(!open);

	const setThemeMode = (mode) => {
		cambiarModoOscuro(mode);
		localStorage.setItem('rutapp_dark_theme', mode);
		/* setMode(mode); */
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open} color="inherit" elevation={1}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
						edge="start"
						sx={{
							marginRight: '36px',
							...(open && { display: 'none' })
						}}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ mx: 1, display: { xs: 'none', md: 'block' } }}>
						<Typography component="div" variant="h5" color="inherit">
							RUTA APP LOGO
						</Typography>
					</Box>
					<Typography component="div" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, mx: 2 }}>
						{`${title}`}
					</Typography>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					{mode !== 'dark' ? (
						<IconButton color="inherit" onClick={() => setThemeMode('dark')}>
							<Brightness6Icon />
						</IconButton>
					) : (
						<IconButton color="inherit" onClick={() => setThemeMode('light')}>
							<Brightness4Icon />
						</IconButton>
					)}
					{/* <PaletteColors /> */}
					<LogOutButton />
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<Box sx={{ mx: 1, display: { xs: 'block', md: 'none' } }}>
						<Typography component="div" variant="h5" color="inherit">
							RUTA APP LOGO
						</Typography>
					</Box>
					<IconButton onClick={handleDrawerToggle}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List dense>
					<ListItemsComponent setTitle={setTitle} title={title} />
				</List>
			</Drawer>
			<Box component="main" sx={{ px: 3, py: 1, width: '100%' }}>
				<DrawerHeader />
				<LoadRoutes routes={routes} />
			</Box>
		</Box>
	);
}

function LoadRoutes({ routes }) {
	return (
		<Switch>
			{routes.map((route, index) => (
				<Route key={index} path={route.path} exact={route.exact} component={route.component} />
			))}
		</Switch>
	);
}
