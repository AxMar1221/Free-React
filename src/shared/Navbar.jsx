import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material"
import LaptopIcon from '@mui/icons-material/Laptop';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" color="error">
        <Container maxWidth="xl">
          <Toolbar disableGutters >
            <LaptopIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Profe Tachi
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <MenuItem>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/hero"
              >
                Inicio
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/services"
              >
                Servicios
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/projects"
              >
                Proyectos y Demos
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/form"
              >
                Contacto
              </NavLink>
            </MenuItem>
            </Box>
            <NavLink
              className={({ isActive}) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
              to='/login'
            >
              <Button color="inherit">Iniciar sesión</Button>
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}