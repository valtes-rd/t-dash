import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CallIcon from '@mui/icons-material/Call';
import CallEndIcon from '@mui/icons-material/CallEnd';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: height
        }}
    />
);

const inbox = [{ icon: <InboxIcon />, iconName: "Inbox" }, { icon: <DraftsIcon />, iconName: "Drafts" }];
const call = [{ icon: <CallIcon />, iconName: "Call"}, { icon: <CallEndIcon />, iconName: "End Call"}];
const satisfy = [{ icon: <SentimentVerySatisfiedIcon />,  iconName: "Happy"}, { icon: <SentimentVeryDissatisfiedIcon />, iconName: "Sad"}];

function lists(item) {
    const listItems = item.map((d) =>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                         {d.icon}
                     </ListItemIcon>
                     <ListItemText primary={d.iconName} />
            </ListItemButton>
        </ListItem>
    );
    return (
        listItems
    );
}

function Listpage() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="jumbotron">
                        <h1 className="display-4">List</h1>
                        <p className="lead">The List allows selection from a variety of specified items.</p>
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
                                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                        <nav aria-label="main mailbox folders">
                                            <List>
                                                {lists(inbox)}
                                            </List>
                                        </nav>
                                    </Box>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {lists(call)}
                                </div>
                            </div>
                            <div className="col-lg">
                                <div>
                                    {lists(satisfy)}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center"><br></br></div>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4">
                                <div>
                                    {lists(satisfy)}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    {lists(satisfy)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listpage;