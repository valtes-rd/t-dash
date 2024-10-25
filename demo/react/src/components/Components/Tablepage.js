import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

function createData(name, calories, fat, carbs, protein, button) {
    return { name, calories, fat, carbs, protein, button };
}

const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
};

const handleCellClick = (param, event) => {
  event.stopPropagation();
};

const handleRowClick = (param, event) => {
  event.stopPropagation();
};

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, <Button variant="contained"
        color="primary"
       >VIEW</Button>),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, <Button>VIEW</Button>),
    createData('Eclair', 262, 16.0, 24, 6.0, <Button>VIEW</Button>),
    createData('Cupcake', 305, 3.7, 67, 4.3, <Button>VIEW</Button>),
    createData('Gingerbread', 356, 16.0, 49, 3.9, <Button>VIEW</Button>),
];

function tables(rowData) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="right">{row.button}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function Tablepage() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Table</h1>
                        <p className="lead">A graphical control element that provides the user a simple way to trigger an event.</p>
                    </div>
                </div>
            </div>
            <ColoredLine color="blue" height={3} />
            <div className="card text-center">
                <div className="card-header">
                    PLAYGROUND
                </div>
                <div className="bg-white">
                </div>
                <div className="card-body overflow-auto">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    {tables(rows)}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    {tables(rows)}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    {tables(rows)}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    {tables(rows)}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    {tables(rows)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tablepage;
