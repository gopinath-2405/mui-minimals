import { Avatar, Button, DialogTitle, InputAdornment, List, ListItem, ListItemAvatar,  ListItemText, OutlinedInput, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog'
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
    <Dialog open={openShare} onClose={handleShareClose}>
      <DialogTitle>Invite</DialogTitle>
      <OutlinedInput placeholder='Email' sx={{ marginLeft: 2, marginRight: 2 }} value={value} onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            {
              value ? <Button variant='contained' sx={{ backgroundColor: 'black', fontWeight: 'bold' }} >Send Invite</Button> : <Button variant='contained' sx={{ fontWeight: 'bold' }} disabled>Send Invite</Button>
            }
          </InputAdornment>
        }
      />
      <Grid item sx={{ overflow: 'scroll', scrollbarWidth: 'none', marginRight: 1 ,scrollBehavior: 'smooth' }}
      >
        <List>
          {
            _.map(details, detail => (
              <ListItem disableGutters key={detail.id}>
                <Grid container sx={{display: 'flex' , alignItems: 'center' , justifyContent: 'space-between'}}>
                  <Grid item xs={9} sx={{flex: 1}}>
                <ListItem>
                  <Grid container sx={{display: 'flex' , justifyContent: 'left' , alignItems: 'center'}}>
                  <Grid item xs={3}>
                  <ListItemAvatar >
                    <Avatar src={detail.avatar} alt={detail.name}  />
                  </ListItemAvatar>
                  </Grid>
                  <Grid item xs={8.5} sx={{whiteSpace: 'nowrap', overflowX: "hidden" , textOverflow: 'ellipsis'   }}>
                  <ListItemText primary={detail.name} secondary={detail.email} sx={{display: 'flex' , justifyContent: 'left',flexFlow: 'column' , whiteSpace: 'nowrap', overflowX: "hidden" , textOverflow: 'ellipsis' }} />
                  </Grid>
                  </Grid>
                </ListItem>
                </Grid>
                <Grid item xs={3}>
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
