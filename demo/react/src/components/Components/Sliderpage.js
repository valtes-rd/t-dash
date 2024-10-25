import * as React from 'react';
import Slider from '@mui/material/Slider';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

function Sliderpage() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Slider</h1>
                        <p className="lead">A Slider widget allows you to select a value from a defined range of values by moving the thumb in a horizontal or vertical direction.</p>
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
                                    <Slider defaultValue={50} aria-label="Disabled slider" />
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    <Slider defaultValue={50} aria-label="Disabled slider" />
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    <Slider defaultValue={50} aria-label="Disabled slider" />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    <Slider defaultValue={50} aria-label="Disabled slider" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <Slider defaultValue={50} aria-label="Disabled slider" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sliderpage;
