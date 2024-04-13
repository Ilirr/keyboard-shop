import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet /> 
    </main>
    <Footer />
  </>
);
