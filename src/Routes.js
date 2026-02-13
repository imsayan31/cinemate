import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieListing from "./components/MovieListing";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import MovieDetail from "./components/MovieDetail";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieListing />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AllRoutes;