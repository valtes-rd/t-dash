import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

var num = "";

function Buttongroups(color) {
    var message = "";

    if (color == null) {
        message = "BLUE";
    }
    if (color == "secondary") {
        message = "PURPLE";
    }
    if (color == "warning") {
        message = "ORANGE";
    }
    if (color == "error") {
        message = "RED";
    }
    if (color == "success") {
        message = "GREEN";
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        num = e.target.value;
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <ButtonGroup variant="contained" color={color} aria-label="outlined primary button group">
            <Button value={"ONE"} onClick={handleClickOpen}>One</Button>
            <Button value={"TWO"} onClick={handleClickOpen}>Two</Button>
            <Button value={"THREE"} onClick={handleClickOpen}>Three</Button>
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
                        {message + " " + num}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CLOSE</Button>
                </DialogActions>
            </Dialog>
        </ButtonGroup >

    );
}

function Buttongrouppage() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Button Group</h1>
                        <p className="lead">Group a series of buttons together on a single line with the button group.</p>
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
                                    {Buttongroups()}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {Buttongroups("secondary")}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {Buttongroups("warning")}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    {Buttongroups("error")}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    {Buttongroups("success")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buttongrouppage;
