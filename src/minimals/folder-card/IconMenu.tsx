import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LinkIcon from '@mui/icons-material/Link';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import ShareDialog from './ShareDialog';

export default function IconMenu() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openShare, setOpenShare] = React.useState<boolean>(false);

  const handleShareOpen = () => {
    setOpenShare(true);
  };

  const handleShareClose = () => {
    setOpenShare(false);
  };

  return (
    <Grid>
      <IconButton
      aria-label="more"
      id="long-button"
      aria-controls={open ? 'long-menu' : undefined}
      aria-expanded={open ? 'true' : undefined}
      aria-haspopup="true"
      onClick={handleMenuClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: 'fit-content',
              width: '20ch',
            },
          },
        }}
      >
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <LinkIcon fontSize="large" sx={{ transform: 'rotate(-45deg)' , color: 'black' }}  />
          </ListItemIcon>
          <ListItemText sx={{marginLeft: 1}} >Copy Link</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleShareOpen}>
          <ListItemIcon>
            <ShareIcon fontSize="large" sx={{color: 'black'}} />
          </ListItemIcon>
          <ListItemText  sx={{marginLeft: 1}}  >Share</ListItemText>
        </MenuItem>
        <ShareDialog  openShare={openShare} handleShareClose={handleShareClose} />
        <MenuItem >
          <ListItemIcon>
            <EditIcon fontSize="large"  sx={{color: 'black'}}  />
          </ListItemIcon>
          <ListItemText  sx={{marginLeft: 1}} >Edit</ListItemText>
        </MenuItem>
        <MenuItem sx={{borderTop: "2px dotted rgb(117,117,117)"}} >
          <ListItemIcon>
            <DeleteIcon fontSize="large"  sx={{color: 'rgb(255,86,48)'}}  />
          </ListItemIcon>
          <ListItemText   sx={{marginLeft: 1 , color: 'rgb(255,86,48)' }} >Delete</ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
    </Grid>
  );
}


