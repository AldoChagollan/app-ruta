import React from 'react'
import { Box } from '@mui/material'
import errorImage from '../../images/errorPage.svg'

export default function ErrorPage() {

    return (
        <Box height="80vh" display="flex" justifyContent="center" alignContent="center">
            <img alt="pagina no encontrada" src={errorImage} width="100%" height="100%" />
        </Box>
    )
}