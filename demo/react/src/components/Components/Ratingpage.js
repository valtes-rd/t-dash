import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

function ratings(values, name) {
    return (
        <div>
            <Typography component="legend">{name}</Typography>
            <Rating
                name="simple-controlled"
                value={values[0]}
                onChange={(event, newValue) => {
                    values[1](newValue);
                }}
            />
        </div>
    );
}

function Ratingpage() {
    const [value1, setValue1] = React.useState(2);
    const [value2, setValue2] = React.useState(2);
    const [value3, setValue3] = React.useState(2);
    const [value4, setValue4] = React.useState(2);
    const [value5, setValue5] = React.useState(2);
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Rating</h1>
                        <p className="lead">Rating is a rating system for your Blog or Website. A voting control which enables rating elements.</p>
                    </div>
                </div>
            </div>
            <ColoredLine color="blue" height={3} />
            <Box
                sx={{
                    '& > legend': { mt: 3 },
                }}
            ></Box>
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
                                {ratings([value1, setValue1], "Rating 1")}
                            </div>
                            <div className="col-lg">
                                {ratings([value2, setValue2], "Rating 2")}
                            </div>
                            <div className="col-lg">
                                {ratings([value3, setValue3], "Rating 3")}
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                {ratings([value4, setValue4], "Rating 4")}
                            </div>
                            <div className="col-lg-4">
                                {ratings([value5, setValue5], "Rating 5")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ratingpage;
