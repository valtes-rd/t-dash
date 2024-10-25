import * as React from 'react';
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

function Buttonpage() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Button</h1>
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
                <div className="card-body">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg">
                                <div>
                                    <Button variant="contained" size="large">BUTTON 1</Button>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    <Button variant="contained" color="warning" size="large">BUTTON 2</Button>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    <Button variant="contained" color="secondary" size="large">BUTTON 3</Button>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    <Button variant="contained" color="success" size="large">BUTTON 4</Button>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <Button variant="contained" color="error" size="large">BUTTON 5</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buttonpage;
