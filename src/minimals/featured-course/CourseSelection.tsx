import Grid from '@mui/material/Grid'
import React from 'react';
import _ from 'lodash';
import courseData from './courseData';
import { Button, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const CourseSelection = () => {
  return (
    <Grid container  >
      {
        _.map(courseData, course => (
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', width: 300 }}>
              <CardContent sx={{ display: 'flex', flexFlow: 'column' ,height: '100%' }} >
                <Grid>
                  <Card >
                    <CardMedia component='img' image={course.source} />
                  </Card>
                </Grid>
                <Grid container sx={{ marginTop: 2, display: "flex", justifyContent: 'left' }} >
                  <Chip icon={<AccessTimeIcon />} label={course.duration} />
                  <Chip icon={<PeopleAltIcon />} label={course.users} sx={{ marginLeft: 1 }} />
                </Grid>
                <Grid  sx={{flexGrow: 2}}>
                  <Typography variant='h5' sx={{ marginTop: 1, fontWeight: 'bold'}} >
                    {course.name}
                  </Typography>
                </Grid>
                <Grid >
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' , marginBottom: 5}}>
                  <Grid item sx={{ display: 'flex' }}  >
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                      &#65129;{course.fees}
                    </Typography>
                    <Typography variant='h6' sx={{ fontWeight: 'light' }} >
                      /year
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant='contained' sx={{ backgroundColor: 'black', fontWeight: 'bold' }} >Join</Button>
                  </Grid>
                </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default CourseSelection
