import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box } from '@mui/material';
import { ListAlt, Store, CompareArrows } from '@mui/icons-material';
/* import ConceptosAlmacen from './ConceptosAlmacen/ConceptosAlmacen'; */

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Almacen from './AgregarAlmacen/Almacen';
import InventarioAlmacen from './InvetarioPorAlmacen/InventarioAlmacen';
import Traspasos from './Traspasos/Traspasos';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			style={{minHeight: '75vh'}}
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ py: 2 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

export default function Almacenes() {
	const [ value, setValue ] = useState(0);
	const theme = useTheme();

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab icon={<Store />} label="Almacenes" {...a11yProps(0)} />
					<Tab icon={<CompareArrows />} label="Traspasos" {...a11yProps(1)} />
					<Tab icon={<ListAlt />} label="Inventario por almacen" {...a11yProps(2)} />
				</Tabs>
			</Box>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0}>
					<Almacen />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Traspasos />
				</TabPanel>
				<TabPanel value={value} index={2}>
                    <InventarioAlmacen />
				</TabPanel>
			</SwipeableViews>
		</Box>
	);
}