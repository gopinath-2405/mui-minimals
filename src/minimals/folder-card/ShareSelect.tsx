import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React, { useState, MouseEvent } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";

const ShareSelect = () => {
  const [select, setSelect] = useState<string>('Can View');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: string) => {
    setSelect(value);
    setAnchorEl(null);
  }

  return (
    <Grid>
      <Button onClick={handleMenuClick} sx={{ color: 'black', textTransform: 'none' }}>{select}{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}</Button>
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
          <MenuItem onClick={() => handleSelect('Can View')} >
            <ListItemIcon>
              <RemoveRedEyeIcon />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: 1 }} >Can View</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleSelect('Can Edit')} >
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: 1 }} >Can Edit</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText sx={{ marginLeft: 1 }} >Remove</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Grid>
  )
}

export default ShareSelect;