import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useState } from "react";

export const HeroPage = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const imgUrls = [
    {url: 'src/assets/maker-01.jpeg', name: 'Maker1'},
    {url: 'src/assets/maker-02.jpeg', name: 'Maker2'},
    {url: 'src/assets/maker-03.jpeg', name: 'Maker3'},
    {url: 'src/assets/maker-04.jpeg', name: 'Maker4'}
  ]

  const goToNextSlide = () => {
    const newIndex = (currentImgIdx + 1) % imgUrls.length;
    setCurrentImgIdx(newIndex);
  };

  const goToPreviousSlide = () => {
    const newIndex = (currentImgIdx - 1 + imgUrls.length) % imgUrls.length;
    setCurrentImgIdx(newIndex);
  };

  return (
    <div className="container">
      <Typography color="primary" variant="h5" align="center">
        <PersonSearchIcon color="error" fontSize="large" sx={{ mr: 1}}/>
        Sobre mi 
      </Typography>
      <Card>
        <CardMedia
          component='img'
          image={imgUrls[currentImgIdx].url}
          alt={imgUrls[currentImgIdx].name}
          style={{ width: '700px', height: '500px', objectFit: 'contain', margin: 'auto' }}
        />
          <CardContent>
            <Typography>
              {currentImgIdx}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
        <Button variant='contained' color='error' size='large' onClick={goToPreviousSlide}>Previous</Button>
        <Button variant='contained' color='error' size='large' onClick={goToNextSlide}>Next</Button>
      </CardActions>
      </Card>
    </div>
  )
}
