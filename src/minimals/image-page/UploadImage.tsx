import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {ImageData} from './imageData';
import _ from 'lodash';

interface UploadImageProps{
  handleImageUpload: (newImage: ImageData) => void;
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadImage = (props: UploadImageProps) => {
  const [imageID , setImageID] = useState<number>(0);

  const {handleImageUpload} = props;
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageID(prev => prev+1);
      handleImageUpload({name: _.toString(imageID) , source: imageUrl})
    }
  };

  return (
    <Grid container >
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex' , justifyContent: 'center'}}>
      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<PhotoCamera />}
      sx={{mt: 2}}
    >
      Upload image
      <VisuallyHiddenInput
      accept='image/jpg , image/png , image/jpeg , image/gif , image/svg'
        type="file"
        onChange={handleImageChange}
        multiple
      />
    </Button>  
      </Grid>
    </Grid>
  );
};

export default UploadImage;
