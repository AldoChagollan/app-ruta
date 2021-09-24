import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
/* import { useContext } from 'react'; */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './config/routes';
/* import { themeContext } from './contexts/themesContext'; */

/* REDUX */
import { useSelector } from 'react-redux';

function App() {
	/* const { mode, colorTheme } = useContext(themeContext); */
	const { mode, colorTheme } = useSelector(state => state.themes);

	const theme = createTheme({
		palette: {
			mode,
			primary: {
				main: colorTheme.primary
			},
			secondary: {
				main: colorTheme.secondary
			}
		}
	});

	return (
		
			<ThemeProvider theme={theme}>
				<div className="App">
					<Router>
						<Switch>{routes.map((route, index) => <RoutesWithSubRoutes key={index} {...route} />)}</Switch>
					</Router>
				</div>
			</ThemeProvider>
	);
}

function RoutesWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => <route.component routes={route.routes} {...props} />}
		/>
	);
}

export default App;
