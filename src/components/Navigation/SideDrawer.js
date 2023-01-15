import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Toolbar } from '@mui/material';

export default function SideDrawer({ state, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Toolbar />
      <Divider />
      <List>

        <Link to="/" style={{textDecoration: "none", color: "black"}}>
          <ListItem key={'Articles'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={'Articles'} />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem key={'Reports'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={'Reports'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'Requests'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary={'Requests'} />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>

        <ListItem key={'My tasks'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary={'My tasks'} />
          </ListItemButton>
        </ListItem>

        <Link to="/topics" style={{textDecoration: "none", color: "black"}}>
          <ListItem key={'Topics'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BurstModeIcon />
              </ListItemIcon>
              <ListItemText primary={'Topics'} />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={'left'}>
          <Drawer
            // switch variant based on screen width
            variant={useMediaQuery('(min-width:1200px)') ? 'permanent' : 'temporary'}
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
