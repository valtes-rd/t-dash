import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

function tooltips(place) {
    return (
        <Tooltip title="Delete" placement={place}>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );
}

function Tooltippage() {
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
                                    {tooltips("top")}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {tooltips("bottom")}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {tooltips("left")}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    {tooltips("right")}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    {tooltips("top")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tooltippage;
