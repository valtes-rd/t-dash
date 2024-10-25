import * as React from 'react';
import Switch from '@mui/material/Switch';
// import { Button } from 'react-bootstrap';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function switches() {
    return (
        <div>
            <Switch {...label} defaultChecked />
            <Switch {...label} />
            <Switch {...label} disabled defaultChecked />
            <Switch {...label} disabled />
        </div>
    );
}

function Switchpage() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Switch</h1>
                        <p className="lead">Switch is a two-state toggle switch widget that is used to select a choice between two options. It is generally an on/off button that indicates the current state of the switch.</p>
                    </div>
                </div>
            </div>
            <ColoredLine color="blue" height={3} />
            <div className="card text-center">
                <div className="card-header">
                    PLAYGROUND
                </div>
                <div className="bg-white">
                    {/* <img src={Header_image} height="70" /> */}
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">COMPONENT</h5> */}
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg">
                                {/* <div>
                                    <Switch {...label} defaultChecked />
                                    <Switch {...label} />
                                    <Switch {...label} disabled defaultChecked />
                                    <Switch {...label} disabled />
                                </div> */}
                                {switches()}
                            </div>
                            <div className="col-lg">
                                {switches()}
                            </div>
                            <div className="col-lg">
                                {switches()}
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                {switches()}
                            </div>
                            <div className="col-lg-4">
                                {switches()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Switchpage;
