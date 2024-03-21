import { NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-success"
      style={{ position: "fixed", width: "100%", zIndex: 100 }}
    >

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/hero"
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/services"
          >
            Servicios
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/form"
          >
            Contacto
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/projects"
          >
            Proyectos y Demos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
