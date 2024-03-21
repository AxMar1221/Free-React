import { Navigate, Route, Routes } from "react-router-dom"
import { FormPage, HeroPage, ProjectsPage, ServicesPage } from "../pages"


export const PagesRouter = () => {
  return (
    <>
        <div>
            <Routes>
                <Route path="/form" element={<FormPage />}/>
                <Route path="/hero" element={<HeroPage />}/>
                <Route path="/services" element={<ServicesPage />}/>
                <Route path="/projects" element={<ProjectsPage />}/>

                <Route path="/" element={<Navigate to="/hero" />}/>
            </Routes>
        </div>
    </>
  )
}
