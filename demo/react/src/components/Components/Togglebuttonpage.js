import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

function Togglebuttonpage() {
    const [alignment1, setAlignment1] = React.useState('web');

    const handleChange1 = (event, newAlignment1) => {
        setAlignment1(newAlignment1);
    };

    const [alignment2, setAlignment2] = React.useState('web');

    const handleChange2 = (event, newAlignment2) => {
        setAlignment2(newAlignment2);
    };

    const [alignment3, setAlignment3] = React.useState('web');

    const handleChange3 = (event, newAlignment3) => {
        setAlignment3(newAlignment3);
    };

    const [alignment4, setAlignment4] = React.useState('web');

    const handleChange4 = (event, newAlignment4) => {
        setAlignment4(newAlignment4);
    };

    const [alignment5, setAlignment5] = React.useState('web');

    const handleChange5 = (event, newAlignment5) => {
        setAlignment5(newAlignment5);
    };

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Toggle Button</h1>
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
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={alignment1}
                                        exclusive
                                        onChange={handleChange1}
                                    >
                                        <ToggleButton value="web">Web</ToggleButton>
                                        <ToggleButton value="android">Android</ToggleButton>
                                        <ToggleButton value="ios">iOS</ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={alignment2}
                                        exclusive
                                        onChange={handleChange2}
                                    >
                                        <ToggleButton value="web">Web</ToggleButton>
                                        <ToggleButton value="android">Android</ToggleButton>
                                        <ToggleButton value="ios">iOS</ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={alignment3}
                                        exclusive
                                        onChange={handleChange3}
                                    >
                                        <ToggleButton value="web">Web</ToggleButton>
                                        <ToggleButton value="android">Android</ToggleButton>
                                        <ToggleButton value="ios">iOS</ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                <ToggleButtonGroup
                                        color="primary"
                                        value={alignment4}
                                        exclusive
                                        onChange={handleChange4}
                                    >
                                        <ToggleButton value="web">Web</ToggleButton>
                                        <ToggleButton value="android">Android</ToggleButton>
                                        <ToggleButton value="ios">iOS</ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                <ToggleButtonGroup
                                        color="primary"
                                        value={alignment5}
                                        exclusive
                                        onChange={handleChange5}
                                    >
                                        <ToggleButton value="web">Web</ToggleButton>
                                        <ToggleButton value="android">Android</ToggleButton>
                                        <ToggleButton value="ios">iOS</ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Togglebuttonpage;
