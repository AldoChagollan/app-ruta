import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid, IconButton, Typography } from "@mui/material";
import { formatoMexico } from "../../config/reuserFunctions";
import { RemoveCircle } from "@mui/icons-material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ListaComprasARealizar() {
  return (
    <TableContainer sx={{ maxHeight: "42vh" }}>
      <Table aria-label="sticky table" stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={12}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Typography style={{ fontSize: 18 }}>
                    Subtotal: <b>${formatoMexico(4325234)}</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ fontSize: 18 }}>
                    Impuestos: <b>${formatoMexico(1324124)}</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ fontSize: 18 }}>
                    <b>
                      Total: <b>${formatoMexico(1432443)}</b>
                    </b>
                  </Typography>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ top: 38.8 }}>Dessert (100g serving)</TableCell>
            <TableCell style={{ top: 38.8 }}>Calories</TableCell>
            <TableCell style={{ top: 38.8 }}>Fat&nbsp;(g)</TableCell>
            <TableCell style={{ top: 38.8 }}>Carbs&nbsp;(g)</TableCell>
            <TableCell style={{ top: 38.8 }}>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>
                <IconButton color="error" size="small">
                  <RemoveCircle />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
