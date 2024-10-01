import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatars from './Avatars';
import React from 'react'
import Box from '@mui/material/Box';
import FolderIcon from '@mui/icons-material/Folder';
import { Rating, Typography } from '@mui/material';
import IconMenu from './IconMenu';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const FolderCard = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardContent>
          <Grid container sx={{display: 'flex' , flexFlow: 'column' }}>
            <Grid item xs={12}>
              <Box sx={{display: 'flex' ,justifyContent: 'space-between' }}>
                <FolderIcon sx={{color: 'rgb(249,181,82)' , fontSize: 'xxx-large' }} />
                <Box sx={{display: 'flex' , alignItems: 'center'}}>
                  <Rating name='customized-1'  max={1} sx={{fontSize: 'xx-large'}} />
                  <IconMenu/>
                </Box>
              </Box>
            </Grid>
            <Grid item>
            <Typography variant="h5" component="div" sx={{fontWeight: 'bold'}}  >
               Docs
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}> 
              2.24Gb {bull} 100 files
            </Typography>
            </Grid>
            <Grid item sx={{display: 'flex' , justifyContent: 'flex-start'}}  >
              <Avatars/>
            </Grid>
          </Grid>    
        </CardContent>
      </Card>
      </Grid>
    </Grid>
  )
}

export default FolderCard
