import React, { useState } from 'react';
import avatars from './avatars';
import AvatarGroup from '@mui/material/AvatarGroup';
import _ from 'lodash';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const GroupAvatar = () => {
  const [anchorElement, setAnchorElemnt] = useState<null | HTMLElement>(null);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([])

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElemnt(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElemnt(null);
  };

  const open = Boolean(anchorElement);

  const handleSelectedMembers = (avatarid: number): void => {
    setSelectedMembers(prev => {
      const membersID = _.includes(prev, avatarid) ? _.without(selectedMembers, avatarid) : [...prev, avatarid];
      const members = _.map(_.filter(avatars , avatar => _.includes(membersID , avatar.id)), image => image.name)
      console.log(members);
      return membersID;
    }
    );
  }

  const renderSurplus = (surplus: number) => {
    return <Avatar onClick={handleOpen}>+{surplus}</Avatar>
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mt: 2 }}>
        <AvatarGroup max={4} spacing={2} renderSurplus={renderSurplus}>
          {
            _.map(avatars, avatar => (
              <Avatar key={avatar.id} src={avatar.image} alt={avatar.name} onClick={() => handleSelectedMembers(avatar.id)} />
            ))
          }
        </AvatarGroup>
      </Grid>
      <Grid item>
        <Menu open={open} anchorEl={anchorElement} onClose={handleClose}>
          {
            _.map(_.slice(avatars, 3, _.size(avatars)), avatar => (
              <MenuItem key={avatar.id}>
                <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item>
                    <Checkbox {...label} checked={_.includes(selectedMembers, avatar.id)} onChange={() => handleSelectedMembers(avatar.id)} />
                  </Grid>
                  <Grid item>
                    <Avatar src={avatar.image} alt={avatar.name} />
                  </Grid>
                  <Grid item sx={{ display: 'flex', flexFlow: 'column', ml: 1.5 }} >
                    <Typography variant='h6' fontWeight='bold'>{avatar.name}</Typography>
                    <Typography variant='body1' fontWeight='light'>{avatar.job}</Typography>
                  </Grid>
                </Grid>
              </MenuItem>
            ))
          }
        </Menu>
      </Grid>
    </Grid>
  )
}

export default GroupAvatar;
