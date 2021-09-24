import { CAMBIAR_MODO_OSCURO, CAMBIAR_COLOR_TEMA, OBTENER_MODO_OSCURO, OBTENER_COLOR_TEMA } from '../types';
/* cada reducer tiene su propio state */
const initial_state = {
	mode: localStorage.getItem('rutapp_dark_theme') ? localStorage.getItem('rutapp_dark_theme') : 'light',
	colorTheme: localStorage.getItem('rutapp_theme')
		? JSON.parse(localStorage.getItem('rutapp_theme'))
		: {
				primary: '#2196f3',
				secondary: '#ff1744'
			},
	error: null,
	loading: false
};

export default function themesReducer(state = initial_state, action) {
	switch (action.type) {
		case CAMBIAR_MODO_OSCURO:
			return {
				...state,
				mode: action.payload
			};
		case OBTENER_MODO_OSCURO:
			return {
				...state,
				mode: action.payload
			};
		case CAMBIAR_COLOR_TEMA:
			return {
				...state,
				colorTheme: action.payload
			};
		case OBTENER_COLOR_TEMA:
			return {
				...state,
				colorTheme: action.payload
			};
		default:
			return state;
	}
}
