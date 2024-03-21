import { Box, Link, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { projects } from '../helpers/projects';

export const ProjectsPage = () => {
    
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    return (
        <div className="container">
            <Typography color="primary" variant='h5' align="center">
                Mis proyectos
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    {projects.project.map((project,idx)=>(
                        <Tab key={idx} label={project.name} />
                    ))}
                </Tabs>
            </Box>
            <Box>
                <Link >
                <img style={{ maxWidth: '550px', padding: '15px' }} src={projects.project[value].img} alt={`Proyecto ${value + 1}`} />
                </Link>
            </Box>

        </div>
    );
};

