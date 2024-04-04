import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useState } from "react";

export const HeroPage = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const imgUrls = [
    { url: 'src/assets/vscode.png', name: 'Maker1' },
    { url: 'src/assets/vscode.png', name: 'Maker2' },
    { url: 'src/assets/vscode.png', name: 'Maker3' },
    { url: 'src/assets/vscode.png', name: 'Maker4' }
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
        <PersonSearchIcon color="error" fontSize="large" sx={{ mr: 1 }} />
        Sobre mi
      </Typography>
      <Card>
        <CardMedia
          component='img'
          image={imgUrls[currentImgIdx].url}
          alt={imgUrls[currentImgIdx].name}
          style={{ width: '700px', height: '500px', objectFit: 'contain', margin: 'auto'}}
        />
        <CardContent>
          <Typography>
            {imgUrls[currentImgIdx].name}
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
