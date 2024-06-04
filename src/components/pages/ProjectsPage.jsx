import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import TabIcon from '@mui/icons-material/Tab';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/FirebaseConfig';

export const ProjectsPage = () => {
    const [value, setValue] = useState(0);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsData = [];
            querySnapshot.forEach((doc) => {
                projectsData.push(doc.data());
            });
            setProjects(projectsData);
        };

        fetchProjects().catch(console.error);
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="container">
            <Typography color="primary" variant='h5' align="center">
                Mis proyectos
            </Typography>
            {projects.length > 0 && (
                <>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}>
                            {projects.map((project, idx) => (
                                <Tab key={idx} label={project.name} />
                            ))}
                        </Tabs>
                    </Box>
                    <Box>
                        <Link>
                            <img style={{ maxWidth: '650px', padding: '15px' }} src={projects[value].img} alt={`Proyecto ${value + 1}`} />
                        </Link>
                        {projects.map((project, idx) => {
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
                                );
                            }
                            return null;
                        })}
                    </Box>
                </>
            )}
        </div>
    );
};
