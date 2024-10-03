import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CustomerDetails = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Card sx={{ margin: 1 }}>
          <List>
            <ListItem>
              <Grid container sx={{ display: 'flex', flexFlow: 'column' }}>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5" component="div">
                    Customer Info
                  </Typography>
                  <EditIcon />
                </Grid>
                <Grid item>
                  <Grid container sx={{ display: 'flex', flexFlow: 'column' }}>
                    <Grid item sx={{ display: 'flex', alignItems: 'center' }} >
                      <ListItemAvatar>
                        <Avatar alt='ucian Obeien' src='https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp' />
                      </ListItemAvatar>
                      <ListItemText primary='Lucian Obrian' secondary="ashlynn.ohara62@gmail.com" />
                    </Grid>
                    <Grid item sx={{ display: 'flex', juestifyContent: 'center', alignItems: 'center' }}>
                      <ListItemText primary="IP address: " secondary='192.158.1.38' sx={{ display: 'flex', alignItems: 'center', ml: 7 }} />
                    </Grid>
                    <Grid item sx={{ ml: 7 }}>
                      <Button variant="text" color='error' startIcon={<AddIcon />} sx={{ fontWeight: 'bold' }}>Add to Blocklist</Button>
                    </Grid >
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid container sx={{ display: 'flex', flexFlow: 'column' }}>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5" component="div">
                    Delivery
                  </Typography>
                  <EditIcon />
                </Grid>
                <Grid item>
                  <ListItemText primary={<Typography sx={{ width: '50%', color: 'rgb(139,151,161)' }}>Ship by</Typography>} secondary={<Typography sx={{ width: '50%', fontWeight: 'light' }}>DHL</Typography>} sx={{ display: 'flex' }} />
                </Grid>
                <Grid item>
                  <ListItemText primary={<Typography sx={{ width: '50%', color: 'rgb(139,151,161)' }}>Speedy</Typography>} secondary={<Typography sx={{ width: '50%' }}>Standard</Typography>} sx={{ display: 'flex' }} />
                </Grid>
                <Grid item>
                  <ListItemText primary={<Typography sx={{ width: '50%', color: 'rgb(139,151,161)' }} >Tracking No.</Typography>} secondary={<Typography sx={{ width: '50%', textDecoration: 'underline' }}  >SPX037739199373
                  </Typography>} sx={{ display: 'flex' }} />
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid container sx={{ display: 'flex', flexFlow: 'column' }}>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5" component="div">
                    Shipping
                  </Typography>
                  <EditIcon />
                </Grid>
                <Grid item>
                  <ListItemText primary={<Typography sx={{ width: '50%', color: 'rgb(139,151,161)' }} >Address</Typography>} secondary={<Typography sx={{ width: '50%' }}  >19034 Verna Unions Apt. 164.  - Honolulu, RI / 87535
                  </Typography>} sx={{ display: 'flex' }} />
                </Grid>
                <Grid item>
                  <ListItemText primary={<Typography sx={{ width: '50%', color: 'rgb(139,151,161)' }} >Phone number</Typography>} secondary={<Typography sx={{ width: '50%' }}  >365-374-4961
                  </Typography>} sx={{ display: 'flex' }} />
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid container sx={{ display: 'flex', flexFlow: 'column' }}>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5" component="div">
                    Payment
                  </Typography>
                  <EditIcon />
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' , mt: 2 }}>
                  **** **** **** 5678 <img src='data:image/png;base64,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' width='50' height='50' />
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CustomerDetails
