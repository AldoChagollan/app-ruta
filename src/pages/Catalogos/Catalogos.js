import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box } from '@mui/material';
import { VerifiedUser, Store, LocalOffer } from '@mui/icons-material';
import Usuarios from './Usuarios/Usuarios';
import ConceptosAlmacen from './ConceptosAlmacen/ConceptosAlmacen';

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Descuentos from './Descuentos/Descuentos';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ py: 3 }}>{children}</Box>}
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

export default function Catalogos() {
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
					<Tab icon={<VerifiedUser />} label="Usuarios" {...a11yProps(0)} />
					<Tab icon={<LocalOffer />} label="Descuentos" {...a11yProps(1)} />
					<Tab icon={<Store />} label="Conceptos almacen" {...a11yProps(2)} />
				</Tabs>
			</Box>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0}>
					<Usuarios />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Descuentos />
				</TabPanel>
				<TabPanel value={value} index={2}>
                    <ConceptosAlmacen />
				</TabPanel>
			</SwipeableViews>
		</Box>
	);
}