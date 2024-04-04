import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { projects } from '../helpers/projects';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import TabIcon from '@mui/icons-material/Tab';

export const ProjectsPage = () => {

    const [value, setValue] = useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className="container">
            <Typography color="primary" variant='h5' align="center">
                Mis proyectos
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    {projects.project.map((project, idx) => (
                        <Tab key={idx} label={project.name} />
                    ))}
                </Tabs>
            </Box>
            <Box>
                <Link >
                    <img style={{ maxWidth: '650px', padding: '15px' }} src={projects.project[value].img} alt={`Proyecto ${value + 1}`} />
                </Link>

                {projects.project.map((project, idx) => {
                    if (idx === value) {
                        return (
                            <div key={idx}>
                                <Link to={project.repo} className='btn'>
                                    <Button
                                        size='large'
                                        variant='contained'
                                        color='error'
                                        startIcon={<GitHubIcon />}
                                    >
                                        Repositorio
                                    </Button>
                                </Link>
                                <Link to={project.demo} className='btn'>
                                    <Button
                                        size='large'
                                        variant='contained'
                                        color='error'
                                        startIcon={<TabIcon />}
                                    >
                                        DEMO
                                    </Button>
                                </Link>
                            </div>
                        )
                    }
                    return null;
                })}
            </Box>
        </div>
    );
};

