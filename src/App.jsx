import React, { useEffect, useState, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Productdetailpage from './Components/Productdetailpage';

// Lazy-load page sections for performance
const LandingPage = React.lazy(() => import('./LandingPage'));
const Second = React.lazy(() => import('./Second'));
const Productpage = React.lazy(() => import('./Productpage'));
const About = React.lazy(() => import('./About'));
const PerfumeListing = React.lazy(() => import('./PerfumeListing'));
const Nav = React.lazy(() => import('./Components/Nav'));
const Loader = React.lazy(() => import('./Components/Loader'));

function App() {
  // 🌟 Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smooth: true,
      lerp: 0.1,
      gestureDirection: 'vertical',
      smoothTouch: true,
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // 🌟 Page-level loader (show only during initial load)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) return <Loader />;

  // 🌟 Conditional Navbar (hide on home '/')
  const location = useLocation();
  const hideNavOnRoutes = ['/'];
  const shouldShowNav = !hideNavOnRoutes.includes(location.pathname);

  return (
    <div className="w-full bg-gradient-to-br from-blue-100 via-pink-100 to-blue-100 overflow-x-hidden">
      <Suspense fallback={<Loader />}>
        {shouldShowNav && <Nav />}

        <Routes>
          {/* Homepage: includes sections with IDs */}
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <Second />
                <div id="perfumes">
                  <PerfumeListing />
                </div>
                <div id="login">
                  <Productpage />
                </div>
                <div id="about">
                  <About />
                </div>
              </>
            }
          />

          {/* Other routes: lazy loaded individually */}
          <Route path="/perfumes" element={<PerfumeListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Productpage />} />
          {/* Add detailed route later if needed */}
          <Route path="/perfumes/:id" element={<Productdetailpage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
