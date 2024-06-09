import { Button, Card, CardActions, CardMedia, Typography } from "@mui/material";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useState, useEffect } from "react";

export const HeroPage = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);
  const [targetPercent, setTargetPercent] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const imgUrls = [
    { url: 'https://firebasestorage.googleapis.com/v0/b/profe-tachi-6a634.appspot.com/o/logos%2Fhtml5.svg?alt=media&token=400624df-647b-467c-8bbe-e2ae90d50c21', name: 'HTML5', percent: 90 },
    { url: 'https://firebasestorage.googleapis.com/v0/b/profe-tachi-6a634.appspot.com/o/logos%2Fcss3.svg?alt=media&token=08b0e408-32f2-4a0b-ad68-482bc425e1d5', name: 'CSS3', percent: 80 },
    { url: 'https://firebasestorage.googleapis.com/v0/b/profe-tachi-6a634.appspot.com/o/logos%2Fjavascript.svg?alt=media&token=8cf33253-d425-415e-987a-13d6dd61d8f1', name: 'JavaScript', percent: 80 },
    { url: 'https://firebasestorage.googleapis.com/v0/b/profe-tachi-6a634.appspot.com/o/logos%2Ftypescript.svg?alt=media&token=f51b2743-da51-474e-8b5f-a68824f5b25b', name: 'TypeScript', percent: 70 },
    { url: 'https://firebasestorage.googleapis.com/v0/b/profe-tachi-6a634.appspot.com/o/logos%2Freact.svg?alt=media&token=f099bfd1-20d5-4fb0-9c5e-878e8275ae09', name: 'React', percent: 70 },
    { url: 'https://firebasestorage.googleapis.com/v0/b/profe-tachi-6a634.appspot.com/o/logos%2Fnode-js.svg?alt=media&token=c3117696-b45c-40fd-973f-4765ce23b75a', name: 'Node.js', percent: 50 },
    { url: 'https://firebasestorage.googleapis.com/v0/b/profe-tachi-6a634.appspot.com/o/logos%2Ffirebase.svg?alt=media&token=3db2defd-4a7d-4a64-96d6-0479e677cba1', name: 'Firebase', percent: 50 },
    { url: 'https://firebasestorage.googleapis.com/v0/b/profe-tachi-6a634.appspot.com/o/logos%2Fgit.svg?alt=media&token=13b67daa-5217-4940-b543-222c7247e79c', name: 'Git', percent: 80 }
  ];

  const changeImage = (index) => {
    setCurrentPercent(0);
    setTargetPercent(imgUrls[index].percent);
    const increment = Math.ceil(imgUrls[index].percent / 50);
    setTimerId(setInterval(() => {
      setCurrentPercent((prevPercent) => {
        if (prevPercent + increment >= imgUrls[index].percent) {
          clearInterval(timerId);
          return imgUrls[index].percent;
        }
        return prevPercent + increment;
      });
    }, 10));
    setCurrentImgIdx(index);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImgIdx + 1) % imgUrls.length;
    changeImage(newIndex);
  };

  const goToPreviousSlide = () => {
    const newIndex = (currentImgIdx - 1 + imgUrls.length) % imgUrls.length;
    changeImage(newIndex);
  };

  const currentImage = imgUrls[currentImgIdx];

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  return (
    <div className="container mt-5">
      <Typography color="error" variant="h5" align="center">
        <PersonSearchIcon color="error" fontSize="large" sx={{ mr: 1 }} />
        Tecnologías
      </Typography>
      <Card>
        <div className="image-container">
          <CardMedia
            component='img'
            image={currentImage.url}
            alt={currentImage.name}
            sx={{ height: '300px' }}
            style={{ width: 'auto', display: 'block', margin: 'auto' }}
          />
          <Typography color="error" variant="h4" align="center">
            {currentPercent}%
          </Typography>
        </div>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button variant='contained' color='error' size='large' onClick={goToPreviousSlide}>
            <SkipPreviousIcon fontSize="large" sx={{ mr: 1 }} />Anterior
          </Button>
          <Button variant='contained' color='error' size='large' onClick={goToNextSlide}>
            Siguiente<SkipNextIcon fontSize="large" sx={{ mr: 1 }} />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};