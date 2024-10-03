import { Avatar, Button, DialogTitle, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, OutlinedInput, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import details from './details';
import Grid from '@mui/material/Grid';
import LinkIcon from '@mui/icons-material/Link';
import _ from 'lodash';
import React from 'react';
import ShareSelect from './ShareSelect';


interface ShareDialogProps {
  openShare: boolean;
  handleShareClose: () => void;
}

const ShareDialog = (props: ShareDialogProps) => {
  const { openShare, handleShareClose } = props;
  const [value, setValue] = React.useState<string>('');
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value);
  }
  return (
    <Dialog open={openShare} onClose={handleShareClose} sx={{width: '100%'}}>
      <DialogTitle>Invite</DialogTitle>
      <OutlinedInput placeholder='Email' sx={{ marginLeft: 2, marginRight: 2 }} value={value} onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            {
              value ? <Button variant='contained' sx={{ backgroundColor: 'black', fontWeight: 'bold' }}>Send Invite</Button> : <Button variant='contained' sx={{ fontWeight: 'bold' }} disabled>Send Invite</Button>
            }
          </InputAdornment>
        }
      />
      <Grid container sx={{ overflowY: 'scroll', scrollbarWidth: 'none', scrollBehavior: 'smooth' }}
      >
        <List>
          {
            _.map(details, detail => (
              <ListItem disableGutters key={detail.id}>
                <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Grid item xs={8} sx={{ flex: 1 }}>
                      <Grid container sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' , ml: 1 }}>
                        <Grid item xs={2.5}>
                          <ListItemAvatar >
                            <Avatar src={detail.avatar} alt={detail.name} />
                          </ListItemAvatar>
                        </Grid>
                        <Grid item xs={8.5}  >
                          <ListItemText primary={<Typography variant='h6'>{detail.name}</Typography>} secondary={<Tooltip title={detail.email}><Typography sx={{whiteSpace: 'nowrap' , overflowX: 'hidden' , textOverflow: 'ellipsis' }}>{detail.email}</Typography></Tooltip>} />
                        </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={4} sx={{width: '100%'}}>
                    <ShareSelect />
                  </Grid>
                </Grid>
              </ListItem>
            ))
          }
        </List>
      </Grid>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', padding: 4 }}>
        <Grid item sx={{ display: 'flex' }}>
          <LinkIcon fontSize="large" sx={{ transform: 'rotate(-45deg)', color: 'black' }} />
          <Typography variant='h6' sx={{ alignItem: 'center' }}>
            Copy Link
          </Typography>
        </Grid>
        <Grid item>
          <Button variant='outlined' sx={{ color: 'black', borderColor: 'black' }} onClick={handleShareClose} >Close</Button>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default ShareDialog
