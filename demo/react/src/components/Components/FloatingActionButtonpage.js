import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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


var val = "";
function Floatingactionbuttons(color) {
    var message = "";


    if (color == null || color == "primary") {
        message = "BLUE";
    }
    if (color === "secondary") {
        message = "PURPLE";
    }
    if (color === "warning") {
        message = "ORANGE";
    }
    if (color === "error") {
        message = "RED";
    }
    if (color === "success") {
        message = "GREEN";
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        val = e.target.value;
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab value={"SMALL"} onClick={handleClickOpen} size="small" color={color} aria-label="add">
                <AddIcon />
            </Fab>
            <Fab value={"MEDIUM"} onClick={handleClickOpen} size="medium" color={color} aria-label="add">
                <AddIcon />
            </Fab>
            <Fab value={"LARGE"} onClick={handleClickOpen} color={color} aria-label="add">
                <AddIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"BUTTON CLICKED"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message + " " + val}
                        {/* {message} */}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CLOSE</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

function FloatingActionButtonpage() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Floating Action Button</h1>
                        <p className="lead">A floating action button is a beautifully animated web element that helps you expand your website's functionality without overcrowding your UI design.</p>
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
                                    {Floatingactionbuttons("secondary")}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {Floatingactionbuttons("primary")}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {Floatingactionbuttons("error")}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    {Floatingactionbuttons("success")}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    {Floatingactionbuttons("warning")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FloatingActionButtonpage;
