import { ExpandMoreRounded } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import LaptopIcon from '@mui/icons-material/Laptop';
import LanguageIcon from '@mui/icons-material/Language';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { useState } from "react";

export const ServicesPage = () => {

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="container">
      <Typography color="primary" variant="h5" align="center">
        Servicios
      </Typography>
      <Accordion expanded={expanded === 'design'} onChange={handleChange('design')}>
        <Typography color="primary">
          <AccordionSummary
            expandIcon={<ExpandMoreRounded />}
            aria-controls="service1-content"
            id="design"
            color="primary"
          >
            <LanguageIcon sx={{ mr: 1}}/>
            Diseño web
          </AccordionSummary>
        </Typography>
        <AccordionDetails sx={{ textAlign: 'justify' }}>
          <Typography color="primary">
            Diseñador web con experiencia en HTML, CSS y JavaScript. Mi enfoque se centra en
            crear interfaces atractivas y funcionales, combinando habilidades técnicas con diseños
            estéticos. Me gusta convertir ideas en sitios web dinámicos y responsivos que cautiven a los
            usuarios y cumplan con los objetivos del cliente.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'react'} onChange={handleChange('react')}>
        <Typography color="primary">

          <AccordionSummary
            expandIcon={<ExpandMoreRounded />}
            aria-controls="service2-content"
            id="react"
          >
            <LogoDevIcon sx={{ mr: 1}}/>
            React
          </AccordionSummary>
        </Typography>
        <AccordionDetails sx={{ textAlign: 'justify' }}>
          <Typography color="primary">

            Desarrollador front-end especializado en el uso de frameworks como React y Angular, con
            sólidos conocimientos en JavaScript y TypeScript. Apasionado por crear experiencias de usuario
            dinámicas y funcionales, me destaco en la implementación de interfaces interactivas y optimizadas
            para diversos dispositivos. Con experiencia en el diseño y desarrollo de aplicaciones web modernas,
            estoy siempre en busca de nuevas formas de mejorar la eficiencia y la calidad del código.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'prof'} onChange={handleChange('prof')}>
        <Typography color="primary">

          <AccordionSummary
            expandIcon={<ExpandMoreRounded />}
            aria-controls="service3-content"
            id="prof"
          >
            <LaptopIcon sx={{ mr: 1 }} />
            Profesor de informática
          </AccordionSummary>
        </Typography>
        <AccordionDetails sx={{ textAlign: 'justify' }}>
          <Typography color="primary">
            Profesor de informática con amplio dominio en ofimática, especializado en configuración,
            mantenimiento preventivo y correctivo de computadoras. Experto en programación básica utilizando
            Java y JavaScript, capacitado para enseñar de manera efectiva, objetiva y dinámica tanto a principiantes como a
            estudiantes más avanzados
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
