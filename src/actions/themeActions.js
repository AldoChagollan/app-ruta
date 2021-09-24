import { CAMBIAR_MODO_OSCURO, CAMBIAR_COLOR_TEMA, OBTENER_MODO_OSCURO, OBTENER_COLOR_TEMA } from '../types';

/* DARKMODE */
export function cambiarModoOscuroAction(mode) {
    return (dispatch) => {
        dispatch ( cambiarModoOscuro(mode))
    }
}
export function obtenerModoOscuroAction(mode) {
    return (dispatch) => {
        dispatch ( obtenerModoOscuro(mode))
    }
}
const cambiarModoOscuro = mode => ({
    type: CAMBIAR_MODO_OSCURO,
    payload: mode
})
const obtenerModoOscuro = mode => ({
    type: OBTENER_MODO_OSCURO,
    payload: mode
})


/* CAMBIAR TEMA */
export function cambiarTemaAction(tema) {
    return (dispatch) => {
        dispatch ( cambiarTema(tema))
    }
}
export function obtenerTemaAction(tema) {
    return (dispatch) => {
        dispatch ( obtenerTema(tema))
    }
}

const cambiarTema = tema => ({
    type: CAMBIAR_COLOR_TEMA,
    payload: tema
})
const obtenerTema = tema => ({
    type: OBTENER_COLOR_TEMA,
    payload: tema
})

