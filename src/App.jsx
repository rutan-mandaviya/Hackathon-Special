import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Productdetailpage from './Components/Productdetailpage';
import LoginPage from './Components/LoginPage';
import MarqueeLancome from './Components/MarqueeLancome';

const LandingPage = React.lazy(() => import('./LandingPage'));
const Second = React.lazy(() => import('./Second'));
const Productpage = React.lazy(() => import('./Productpage'));
const About = React.lazy(() => import('./About'));
const PerfumeListing = React.lazy(() => import('./PerfumeListing'));
const Nav = React.lazy(() => import('./Components/Nav'));
const Loader = React.lazy(() => import('./Components/Loader'));

function App() {
  const location = useLocation();
  const lenisRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if current route is login page
  const isLoginPage = location.pathname === '/login';

  // ✅ Smooth scroll initialization (Lenis)
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenisRef.current.destroy();
  }, []);

  // ✅ Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 0.7 });
    }
  }, [location]);

  // ✅ Initial loader only (runs once)
  if (isLoading) {
    return (
      <Suspense fallback={<div className="fixed inset-0 bg-white z-50"></div>}>
        <Loader onComplete={() => setIsLoading(false)} />
      </Suspense>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-pink-50 to-blue-50 min-h-screen">
      <Suspense fallback={<div className="fixed inset-0 bg-white z-50" />}>
        {/* Conditionally render Nav based on route */}
        {!isLoading && !isLoginPage && <Nav />}

        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <Second />
                <div id="perfumes">
                  <PerfumeListing />
                </div>
                <div id="products">
                  <Productpage />
                  <MarqueeLancome />
                </div>
                <div id="about">
                  <About />
                </div>
              </>
            }
          />
          <Route path="/perfumes" element={<PerfumeListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/perfumes/:id" element={<Productdetailpage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;