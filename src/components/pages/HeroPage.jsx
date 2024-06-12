import { Button, Card, CardActions, CardMedia, Typography } from "@mui/material";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";

export const HeroPage = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);
  const [targetPercent, setTargetPercent] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    const fetchTech = async () => {
      const querySnapshot = await getDocs(collection(db, 'tech'));
      const techData = [];
      querySnapshot.forEach((doc) => {
        techData.push(doc.data());
        console.log(techData)
      });
      setTechData(techData);
    };

    fetchTech();
  }, []);

  const changeImage = (index) => {
    setCurrentPercent(0);
    setTargetPercent(techData[index].percent);
    const increment = Math.ceil(techData[index].percent / 50);
    setTimerId(setInterval(() => {
      setCurrentPercent((prevPercent) => {
        if (prevPercent + increment >= techData[index].percent) {
          clearInterval(timerId);
          return techData[index].percent;
        }
        return prevPercent + increment;
      });
    }, 10));
    setCurrentImgIdx(index);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImgIdx + 1) % techData.length;
    changeImage(newIndex);
  };

  const goToPreviousSlide = () => {
    const newIndex = (currentImgIdx - 1 + techData.length) % techData.length;
    changeImage(newIndex);
  };

  const currentImage = techData[currentImgIdx];

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  return (
    <div className="container mt-5">
      <Typography color="error" variant="h5" align="center">
        <PersonSearchIcon color="error" fontSize="large" sx={{ mr: 1 }} />
        Tecnologías
      </Typography>
      {techData.length > 0 && (
        <Card>
          <div className="image-container mt-3">
            <Typography color="error" variant="h5" align="center">
              {currentImage.name}
            </Typography>
            <CardMedia
              component='img'
              image={currentImage.img}
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
              Siguiente<SkipNextIcon fontSize="large" sx={{ ml: 1 }} />
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};
