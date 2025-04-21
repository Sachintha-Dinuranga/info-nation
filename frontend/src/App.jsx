import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const CountryDetails = lazy(() => import("./pages/CountryDetails"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* Wrap routes in Suspense for fallback loading state */}
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />

            <Route
              path="/country/:code"
              element={
                <PrivateRoute>
                  <CountryDetails />
                </PrivateRoute>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default App;
