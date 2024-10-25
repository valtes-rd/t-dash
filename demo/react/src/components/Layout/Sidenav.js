import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import HomeIcon from '@mui/icons-material/Home';
import ExtensionIcon from '@mui/icons-material/Extension';
import InfoIcon from '@mui/icons-material/Info';

function Sidenav() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HOME" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List className="d-grid gap-2">
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <ListItemText primary="Components" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/combobox">
                <ListItemText primary="Combo box" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/button">
                <ListItemText primary="Button" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/buttongroup">
                <ListItemText primary="Button Group" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/checkbox">
                <ListItemText primary="Checkbox" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/floatingactionbutton">
                <ListItemText primary="Floating Action Button" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/radiobutton">
                <ListItemText primary="Radio Button" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/rating">
                <ListItemText primary="Rating" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/select">
                <ListItemText primary="Select" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/slider">
                <ListItemText primary="Slider" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/switch">
                <ListItemText primary="Switch" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/textfield">
                <ListItemText primary="Textfield" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/transferlist">
                <ListItemText primary="Transfer List" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/togglebutton">
                <ListItemText primary="Toggle Button" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/list">
                <ListItemText primary="List" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/table">
                <ListItemText primary="Table" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/tooltip">
                <ListItemText primary="Tooltip" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/dialog">
                <ListItemText primary="Dialogs" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding className="d-grid gap-2">
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/accordion">
                <ListItemText primary="Accordion" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/about">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="ABOUT" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default Sidenav;
