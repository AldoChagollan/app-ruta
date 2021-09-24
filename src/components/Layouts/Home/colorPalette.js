import React, { Fragment/* , useContext */ } from 'react';
import { Menu, IconButton, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PaletteIcon from '@mui/icons-material/Palette';
import { Done } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
/* import { themeContext } from '../../../contexts/themesContext'; */

import { useDispatch, useSelector } from 'react-redux'

/* REEDUX ACTIONS */
import { cambiarTemaAction } from '../../../actions/themeActions';


const useStyles = makeStyles((theme) => ({
	colorContainer: {
		/* display: 'inline-block', */
		height: 50,
		width: 50,
		/* margin: 1, */
		/* 	borderRadius: '100%', */
		cursor: 'pointer'
	},
	icon: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}));

export default function PaletteColors() {
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const classes = useStyles();
	/* const { colorTheme, setColorTheme } = useContext(themeContext); */

	/* utilizar useDispatch y te deuleve una funcion */
    const dispatch = useDispatch(); 
	/* manda a llamar el action de themesAction */
    const cambiarTema = tema => dispatch(cambiarTemaAction(tema));
	/* obtener el modo de redux */
	const { colorTheme } = useSelector(state => state.themes);
	const [ selected, setSelected ] = React.useState(colorTheme);

	const setColor = (color) => {
		setSelected(color.primary);
        const to_localStorage = {
			primary: color.primary,
			secondary: color.secondary
		}
		/* setColorTheme(to_localStorage); */
		cambiarTema(to_localStorage)
		localStorage.setItem('rutapp_theme', JSON.stringify(to_localStorage) );
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const colores = [
		{ primary: '#f44336', secondary: '#000000' },
		{ primary: '#e91e63', secondary: '#d500f9' },
		{ primary: '#9c27b0', secondary: '#d500f9' },
		{ primary: '#673ab7', secondary: '#d500f9' },
		{ primary: '#3f51b5', secondary: '#ff1744' },
		{ primary: '#2196f3', secondary: '#e91e63' },
		{ primary: '#03a9f4', secondary: '#e91e63' },
		{ primary: '#00bcd4', secondary: '#e91e63' },
		{ primary: '#009688', secondary: '#1de9b6' },
		{ primary: '#4caf50', secondary: '#1de9b6' },
		{ primary: '#8bc34a', secondary: '#76ff03' },
		{ primary: '#cddc39', secondary: '#e91e63' },
		{ primary: '#ffeb3b', secondary: '#e91e63' },
		{ primary: '#ffc107', secondary: '#e91e63' },
		{ primary: '#ff9800', secondary: '#e91e63' },
		{ primary: '#ff5722', secondary: '#000000' }
	];

	return (
		<Fragment>
			<IconButton color="inherit" onClick={(e) => handleClick(e)}>
				<PaletteIcon />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				/* onClick={handleClose} */
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0
						}
					}
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<Box display="flex" maxWidth={350}>
					{colores.map((color, index) => {
						return (
							<Box
								key={index}
								className={classes.colorContainer}
								style={{
									backgroundColor: color.primary,
									color: theme.palette.getContrastText(color.primary)
								}}
								onClick={() => setColor(color)}
							>
								<Box className={classes.icon}>{selected === color.primary ? <Done /> : null}</Box>
							</Box>
						);
					})}
				</Box>
			</Menu>
		</Fragment>
	);
}
