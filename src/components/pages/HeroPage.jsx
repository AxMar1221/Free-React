import { Button, Card, CardActions, CardMedia, Typography } from "@mui/material";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useState, useEffect } from "react";

export const HeroPage = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);
  const [targetPercent, setTargetPercent] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const imgUrls = [
    { url: '/assets/html5.svg', name: 'HTML5', percent: 90 },
    { url: '/assets/css3.svg', name: 'CSS3', percent: 80 },
    { url: '/assets/javascript.svg', name: 'JavaScript', percent: 80 },
    { url: '/assets/typescript.svg', name: 'TypeScript', percent: 70 },
    { url: '/assets/react.svg', name: 'React', percent: 70 },
    { url: '/assets/node-js.svg', name: 'Node.js', percent: 50 },
    { url: '/assets/firebase.svg', name: 'Firebase', percent: 50 },
    { url: '/assets/git.svg', name: 'Git', percent: 80 }
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
    <div className="container">
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
            sx={{ height: '300px'}}
            style={{  width: 'auto', display: 'block', margin: 'auto' }}
          />
          <Typography color="error" variant="h4" align="center">
            {currentPercent}%
          </Typography>
        </div>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button variant='contained' color='error' size='large' onClick={goToPreviousSlide}>Previous</Button>
          <Button variant='contained' color='error' size='large' onClick={goToNextSlide}>Next</Button>
        </CardActions>
      </Card>
    </div>
  );
};
