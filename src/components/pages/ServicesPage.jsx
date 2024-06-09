import { ExpandMoreRounded } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";

export const ServicesPage = () => {
  const [expanded, setExpanded] = useState('');
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'services'));
        const servicesData = [];
        querySnapshot.forEach((doc) => {
          servicesData.push(doc.data());
        });
        setServices(servicesData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="container mt-5">
      <Typography color="primary" variant="h5" align="center">
        Servicios
      </Typography>
      {services.map((service, idx) => (
        <Accordion key={idx} expanded={expanded === service.name} onChange={handleChange(service.name)}>
          <AccordionSummary
            expandIcon={<ExpandMoreRounded />}
            aria-controls={`${service.name}-content`}
            id={service.name}
          >
            <Typography color='primary'>
              <img style={{ maxWidth: '25px', padding: '5px' }} src={service.icon} alt="icon" />
              </Typography>
            <Typography color="primary">{service.name}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: 'justify' }}>
            <Typography color="primary">{service.info}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
