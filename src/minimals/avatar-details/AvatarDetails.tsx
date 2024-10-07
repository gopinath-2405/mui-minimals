import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { ChangeEvent, useState } from 'react';
import data, { DataType } from './data';
import _ from 'lodash';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import Popover from '@mui/material/Popover';

const AvatarDetails = () => {
  const [avatarAnchorEl, setAvatarAnchorEl] = useState<null | HTMLElement>(null);

  const [details, setDetails] = useState<DataType[]>(data);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [updateDetails, setUpdateDetails] = useState<DataType>(details[selectedIndex]);

  const handleAvatarClick = (target: HTMLElement, index: number) => {
    setAvatarAnchorEl(target);
    setSelectedIndex(index);
    setUpdateDetails(details[index]);
  };

  const open = Boolean(avatarAnchorEl);

  const handleClose = () => {
    setAvatarAnchorEl(null);
  };

  const handleUpdateDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedDetails = [...details];
    updatedDetails[selectedIndex] = updateDetails;
    setDetails(updatedDetails);
    handleClose();
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={2} sx={{ padding: 2 }}>
        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <CardContent sx={{ display: 'flex' }}>
            {_.map(details, (detail, i) => (
              <Avatar
                key={i}
                src={detail.image}
                alt={detail.name}
                onClick={(e) => handleAvatarClick(e.currentTarget, i)}
                sx={{ ml: 1 }}
              />
            ))}
          </CardContent>
        </Card>
        <Popover open={open} anchorEl={avatarAnchorEl} onClose={handleClose} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
          <Grid container sx={{ display: 'flex', flexFlow: 'column' }}>
            <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mr: 2 }}>
              <Button variant='outlined' color='error' onClick={handleClose}>
                <ClearIcon />
              </Button>
            </Grid>
            <Grid item sx={{ display: 'flex', flexFlow: 'column', padding: 2 }}>
              <TextField
                label='Name'
                name='name'
                value={updateDetails.name}
                sx={{ mt: 2 }}
                onChange={handleUpdateDetails}
              />
              <TextField
                label='Email'
                name='email'
                value={updateDetails.email}
                sx={{ mt: 2 }}
                onChange={handleUpdateDetails}
              />
              <TextField
                label='District'
                name='district'
                value={updateDetails.district}
                sx={{ mt: 2 }}
                onChange={handleUpdateDetails}
              />
            </Grid>
            <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 2, mr: 2 }}>
              <Button variant='contained' sx={{ bgcolor: 'black', fontWeight: 'bold' }} onClick={handleSave}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Popover>
      </Grid>
    </Grid>
  );
};

export default AvatarDetails;
