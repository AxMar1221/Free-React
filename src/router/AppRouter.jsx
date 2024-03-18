import { Route, Routes } from "react-router-dom"
import { PagesRouter } from "../components/router"
import { Footer, Navbar } from "../shared"

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/*" element={ <PagesRouter />} />
        </Routes>
        <Footer />
    </>
  )
}
