import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

function selects(values, handler) {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values[0]}
                    label="Age"
                    onChange={handler}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30 </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

function Selectpage() {
    const [age1, setAge1] = React.useState('');
    const [age2, setAge2] = React.useState('');
    const [age3, setAge3] = React.useState('');
    const [age4, setAge4] = React.useState('');
    const [age5, setAge5] = React.useState('');

    const handleChange1 = (event) => {
        setAge1(event.target.value);
    };

    const handleChange2 = (event) => {
        setAge2(event.target.value);
    };

    const handleChange3 = (event) => {
        setAge3(event.target.value);
    };

    const handleChange4 = (event) => {
        setAge4(event.target.value);
    };

    const handleChange5 = (event) => {
        setAge5(event.target.value);
    };
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Select</h1>
                        <p className="lead">The select element is used to create a drop-down list.</p>
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
                <div className="card-body">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg">
                                {selects([age1, setAge1], handleChange1)}
                            </div>
                            <div className="col-lg">
                                {selects([age2, setAge2], handleChange2)}
                            </div>
                            <div className="col-lg">
                                {selects([age3, setAge3], handleChange3)}
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                {selects([age4, setAge4], handleChange4)}
                            </div>
                            <div className="col-lg-4">
                                {selects([age5, setAge5], handleChange5)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selectpage;
