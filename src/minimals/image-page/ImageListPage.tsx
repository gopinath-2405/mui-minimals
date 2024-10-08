import React, { useRef, useState, DragEvent } from 'react';
import imageData, { ImageData } from './imageData';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Paper from '@mui/material/Paper';
import _ from 'lodash';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import UploadImage from './UploadImage';

const ImageListPage = () => {
  const [favImage, setFavImage] = useState<ImageData>(imageData[0]);
  const imageRef = useRef<HTMLUListElement>(null);
  const [images, setImages] = useState<ImageData[]>(imageData);

  const handleFavImage = (image: ImageData) => {
    setFavImage(image);
  };

  const handleRightScroll = () => {
    if (imageRef.current) {
      imageRef.current.scrollBy({
        left: imageRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleLeftScroll = () => {
    if (imageRef.current) {
      imageRef.current.scrollBy({
        left: -imageRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleImageUpload = (newImage: ImageData) => {
    setImages((prev) => [...prev, newImage]);
  };

  const handleDragStart = (event: DragEvent<HTMLLIElement>, image: string) => {
    event.dataTransfer.setData('image/drag', image);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const imageUrl = e.dataTransfer.getData('image/drag');
    const droppedImage = images.find(image => image.source === imageUrl);
    if (droppedImage) {
      handleFavImage(droppedImage); // Set the dropped image as the favorite
    }
  };

  return (
    <Grid container>
      <Grid item xs={11} sm={6} md={8} lg={3} >
        <Card>
          <CardContent>
            <Grid container>
              <Grid item sx={{ width: { xs: 300, sm: 350, md: 550, lg: 450, xl: 450 }, display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{ height: { xs: 300, sm: 350, md: 450, lg: 450, xl: 450 }, width: { xs: 300, sm: 350, md: 550, lg: 550, xl: 550 } }}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <CardMedia sx={{ height: '100%' }} component='img' src={favImage.source} alt={favImage.name} />
                </Card>
              </Grid>
              <Grid item sx={{ width: { xs: 300, sm: 350, md: 550, lg: 450, xl: 450 } }}>
                <Grid container sx={{ mt: 3, alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                  <Grid item xs={1}>
                    <IconButton onClick={handleLeftScroll} sx={{ color: 'black' }}><ArrowBackIosIcon /></IconButton>
                  </Grid>
                  <Grid item xs={10}>
                    <Paper sx={{ overflow: 'hidden', display: 'flex' }}>
                      <ImageList ref={imageRef} cols={images.length - 1} sx={{ overflow: 'hidden' }}>
                        {_.map(_.without(images, favImage), (image) => (
                          <ImageListItem
                            key={image.name}
                            sx={{ width: 75, ml: 1 }}
                            onClick={() => handleFavImage(image)}
                            onDragStart={(e) => handleDragStart(e, image.source)}
                            draggable // Make the item draggable
                          >
                            <img src={image.source} alt={image.name} />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Paper>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton onClick={handleRightScroll} sx={{ color: 'black' }}><ArrowForwardIosIcon /></IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: { xs: 300, sm: 350, md: 550, lg: 450, xl: 450 } }}>
                <UploadImage handleImageUpload={handleImageUpload} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ImageListPage;
