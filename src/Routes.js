import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const Home = lazy(() => import('./components/Home'));
const MovieListing = lazy(() => import('./components/MovieListing'));
const MovieDetail = lazy(() => import('./components/MovieDetail'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

function AllRoutes() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MovieListing />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

export default AllRoutes;