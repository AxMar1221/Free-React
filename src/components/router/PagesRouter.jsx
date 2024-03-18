import { Navigate, Route, Routes } from "react-router-dom"
import { FormPage, HeroPage, ServicesPage } from "../pages"


export const PagesRouter = () => {
  return (
    <>
        <div>
            <Routes>
                <Route path="/form" element={<FormPage />}/>
                <Route path="/hero" element={<HeroPage />}/>
                <Route path="/services" element={<ServicesPage />}/>

                <Route path="/" element={<Navigate to="/hero" />}/>
            </Routes>
        </div>
    </>
  )
}
