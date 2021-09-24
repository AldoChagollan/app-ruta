import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Imagenes from './Imagenes/ImagenesProducto';
import FormularioPreciosProducto from './Precios/formPrecios';
import FormularioPrecioPlazosProducto from './Plazos/formPrecioPlazos';
import Box from '@mui/material/Box';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ px: 3, minHeight: '70vh' }}>{children}</Box>}
		</Box>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

export default function TabPanelRegistroProducto({ value, setValue }) {
	const theme = useTheme();

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<Box >
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<FormularioPreciosProducto />
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<FormularioPrecioPlazosProducto />
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					<Imagenes />
				</TabPanel>
			</SwipeableViews>
		</Box>
	);
}
