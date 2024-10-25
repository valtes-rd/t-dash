import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

function comboboxes(options) {
    return (
        <Autocomplete
            options={options}
            style={{ width: 250 }}
            renderInput={(params) =>
                <TextField {...params} label="Days" variant="outlined" />}
        />
    );
}

function ComboBoxpage() {
    const options = ['Monday', 'Tuesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday'];
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Combo Box</h1>
                        <p className="lead">A form control that, after a click displays a collapsable list of multiple values which can be used in forms, menus or surveys.</p>
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
                                <div>
                                    {comboboxes(options)}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {comboboxes(options)}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {comboboxes(options)}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    {comboboxes(options)}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    {comboboxes(options)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComboBoxpage;
