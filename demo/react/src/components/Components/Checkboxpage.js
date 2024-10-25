import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

function checkboxes() {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Enabled 1" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled 1" />
        </FormGroup>
    );
}

function Checkboxpage() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Checkbox</h1>
                        <p className="lead">A checkbox is a Graphical widget that permits the user to make a binary choice, i.e. a choice between one of two possible mutually exclusive options.</p>
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
                                    {checkboxes()}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {checkboxes()}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {checkboxes()}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    {checkboxes()}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    {checkboxes()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkboxpage;
