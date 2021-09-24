import React, { Fragment, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@mui/styles';
import { Divider, Box, IconButton, createTheme, Grid } from '@mui/material';
import { AddAPhoto, Delete, RemoveRedEye } from '@mui/icons-material';

const theme = createTheme();

const useStyles = makeStyles({
	uploadBox: {
		border: `2px dashed ${theme.palette.primary.main}`,
		borderRadius: '7px',
		width: 150,
		height: 150,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	ImagenBox: {
		borderRadius: '7px',
		width: 150,
		height: 150,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
        '&:hover #imagen-actions ': {
            display: 'block',
        }
	},
	img: {
        borderRadius: '7px',
		maxWidth: '100%',
		maxHeight: '100%'
	},
    backgroundHover:{
        borderRadius: '7px',
        position: 'absolute',
        width: 150,
		height: 150,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: 'none',
    }
});

export default function ImagenesProducto() {
	const classes = useStyles();
	const onDrop = useCallback((acceptedFiles) => {
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<Fragment>
			<Divider textAlign="left" sx={{ my: 2 }}>
				Imagenes
			</Divider>
			<Grid container spacing={3} justifyContent="center">
				<Grid item>
					<Box {...getRootProps()} className={classes.uploadBox}>
						<input {...getInputProps()} />
						<AddAPhoto color="primary" sx={{ fontSize: 50 }} />
					</Box>
				</Grid>
				<Grid item>
					<Box className={classes.ImagenBox} boxShadow={3}>
						<img
							className={classes.img}
							alt="imagen producto"
							src="https://www.dportenis.mx/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/1020139-0001V1.jpg"
						/>
						<Box className={classes.backgroundHover} id="imagen-actions">
							<Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                <IconButton>
                                    <RemoveRedEye sx={{color: "white"}} />
                                </IconButton>
                                <Divider orientation="vertical" sx={{backgroundColor: "white", height: "50%"}} />
                                <IconButton>
                                    <Delete sx={{color: "white"}} />
                                </IconButton>
                            </Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Fragment>
	);
}
