import React from 'react'
import { Box } from '@mui/material'
import PageNotFoundImage from '../../images/pageNotFound.svg'

export default function PageNotFound() {

    return (
        <Box height="80vh" display="flex" justifyContent="center" alignContent="center">
            <img alt="pagina no encontrada" src={PageNotFoundImage} width="100%" height="100%" />
        </Box>
    )
}