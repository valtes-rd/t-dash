import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

function Transferlistpage() {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3]);
    const [right, setRight] = React.useState([4, 5, 6, 7]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const customList = (items) => (
        <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">Transfer</h1>
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
                            <div className="col-lg-8">
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item>{customList(left)}</Grid>
                                    <Grid item>
                                        <Grid container direction="column" alignItems="center">
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleAllRight}
                                                disabled={left.length === 0}
                                                aria-label="move all right"
                                            >
                                                ≫
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedRight}
                                                disabled={leftChecked.length === 0}
                                                aria-label="move selected right"
                                            >
                                                &gt;
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedLeft}
                                                disabled={rightChecked.length === 0}
                                                aria-label="move selected left"
                                            >
                                                &lt;
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleAllLeft}
                                                disabled={right.length === 0}
                                                aria-label="move all left"
                                            >
                                                ≪
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item>{customList(right)}</Grid>
                                </Grid>
                            </div>
                            <div className="col-lg-8">
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item>{customList(left)}</Grid>
                                    <Grid item>
                                        <Grid container direction="column" alignItems="center">
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleAllRight}
                                                disabled={left.length === 0}
                                                aria-label="move all right"
                                            >
                                                ≫
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedRight}
                                                disabled={leftChecked.length === 0}
                                                aria-label="move selected right"
                                            >
                                                &gt;
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedLeft}
                                                disabled={rightChecked.length === 0}
                                                aria-label="move selected left"
                                            >
                                                &lt;
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleAllLeft}
                                                disabled={right.length === 0}
                                                aria-label="move all left"
                                            >
                                                ≪
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item>{customList(right)}</Grid>
                                </Grid>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg">
                                {/* <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item>{customList(left)}</Grid>
                                    <Grid item>
                                        <Grid container direction="column" alignItems="center">
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleAllRight}
                                                disabled={left.length === 0}
                                                aria-label="move all right"
                                            >
                                                ≫
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedRight}
                                                disabled={leftChecked.length === 0}
                                                aria-label="move selected right"
                                            >
                                                &gt;
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedLeft}
                                                disabled={rightChecked.length === 0}
                                                aria-label="move selected left"
                                            >
                                                &lt;
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleAllLeft}
                                                disabled={right.length === 0}
                                                aria-label="move all left"
                                            >
                                                ≪
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item>{customList(right)}</Grid>
                                </Grid> */}
                            </div>
                            <div className="col-lg">
                                {/* <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item>{customList(left)}</Grid>
                                    <Grid item>
                                        <Grid container direction="column" alignItems="center">
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleAllRight}
                                                disabled={left.length === 0}
                                                aria-label="move all right"
                                            >
                                                ≫
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedRight}
                                                disabled={leftChecked.length === 0}
                                                aria-label="move selected right"
                                            >
                                                &gt;
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedLeft}
                                                disabled={rightChecked.length === 0}
                                                aria-label="move selected left"
                                            >
                                                &lt;
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleAllLeft}
                                                disabled={right.length === 0}
                                                aria-label="move all left"
                                            >
                                                ≪
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item>{customList(right)}</Grid>
                                </Grid> */}
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center"></div>
                        <div className="col-lg">
                            {/* <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item>{customList(left)}</Grid>
                                <Grid item>
                                    <Grid container direction="column" alignItems="center">
                                        <Button
                                            sx={{ my: 0.5 }}
                                            variant="outlined"
                                            size="small"
                                            onClick={handleAllRight}
                                            disabled={left.length === 0}
                                            aria-label="move all right"
                                        >
                                            ≫
                                        </Button>
                                        <Button
                                            sx={{ my: 0.5 }}
                                            variant="outlined"
                                            size="small"
                                            onClick={handleCheckedRight}
                                            disabled={leftChecked.length === 0}
                                            aria-label="move selected right"
                                        >
                                            &gt;
                                        </Button>
                                        <Button
                                            sx={{ my: 0.5 }}
                                            variant="outlined"
                                            size="small"
                                            onClick={handleCheckedLeft}
                                            disabled={rightChecked.length === 0}
                                            aria-label="move selected left"
                                        >
                                            &lt;
                                        </Button>
                                        <Button
                                            sx={{ my: 0.5 }}
                                            variant="outlined"
                                            size="small"
                                            onClick={handleAllLeft}
                                            disabled={right.length === 0}
                                            aria-label="move all left"
                                        >
                                            ≪
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid item>{customList(right)}</Grid>
                            </Grid> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transferlistpage;
