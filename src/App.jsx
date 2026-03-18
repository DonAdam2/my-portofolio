import { useState, useEffect, useRef, Suspense } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
//constants
import {
  getAboutPageUrl,
  getHomePageUrl,
  getProjectsPageUrl,
  getSkillsPageUrl,
} from '@/js/routing/appUrls';
import { routes } from '@/js/routing/routesConfig';
import { setTimeoutRAF } from './js/constants/helpers';
//icons
import DarkLogoIcon from './js/components/icons/floatingButtonIcons/dark/DarkLogoIcon';
import DarkHomeIcon from './js/components/icons/floatingButtonIcons/dark/DarkHomeIcon';
import DarkInfoIcon from './js/components/icons/floatingButtonIcons/dark/DarkInfoIcon';
import DarkGearIcon from './js/components/icons/floatingButtonIcons/dark/DarkGearIcon';
import DarkBagIcon from './js/components/icons/floatingButtonIcons/dark/DarkBagIcon';
//components
import FloatingButton from '@/js/containers/FloatingButton';
import Gate from '@/js/components/Gate';
import Footer from './js/components/Footer';
//pages
import NotFoundPage from '@/js/containers/pages/NotFoundPage';

const App = () => {
  const navigate = useNavigate(),
    { pathname } = useLocation(),
    [isAnimateGate, setIsAnimateGate] = useState(false),
    gateTimeout = 2000,
    gateCancelPauseTimer = useRef(() => {}),
    registerGateCancelPauseTimer = (fn) => (gateCancelPauseTimer.current = fn),
    routeCancelPauseTimer = useRef(() => {}),
    registerRouteCancelPauseTimer = (fn) => (routeCancelPauseTimer.current = fn),
    iconWidth = 55;

  useEffect(() => {
    return () => {
      gateCancelPauseTimer.current();
      routeCancelPauseTimer.current();
    };
  }, []);

  useEffect(() => {
    const preloadImages = () => {
      const imagePaths = require.context('@/public/assets/images/mandala', true, /\.svg$/);
      imagePaths.keys().forEach((key) => {
        const img = new Image();
        img.src = imagePaths(key);
      });
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(preloadImages);
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(preloadImages, 3000);
      return () => clearTimeout(id);
    }
  }, []);

  const animateGate = () => {
    gateCancelPauseTimer.current();
    setIsAnimateGate(true);
    setTimeoutRAF(
      () => {
        setIsAnimateGate(false);
      },
      gateTimeout,
      registerGateCancelPauseTimer
    );
  };

  const animateRoute = (path) => {
    routeCancelPauseTimer.current();
    setTimeoutRAF(
      () => {
        navigate(path);
      },
      gateTimeout / 2.1,
      registerRouteCancelPauseTimer
    );
  };

  const buttonHandler = (path) => {
    if (pathname !== path) {
      animateGate();
      animateRoute(path);
    }
  };

  const buttons = [
    {
      icon: <DarkHomeIcon width={iconWidth} />,
      click: () => buttonHandler(getHomePageUrl()),
      tooltipLabel: 'Home',
    },
    {
      icon: <DarkInfoIcon width={iconWidth} />,
      click: () => buttonHandler(getAboutPageUrl()),
      tooltipLabel: 'About Me',
    },
    {
      icon: <DarkGearIcon width={iconWidth} />,
      click: () => buttonHandler(getSkillsPageUrl()),
      tooltipLabel: 'My Skills',
    },
    {
      icon: <DarkBagIcon width={iconWidth} />,
      click: () => buttonHandler(getProjectsPageUrl()),
      tooltipLabel: 'My Projects',
    },
  ];

  return (
    <>
      <Gate isAnimateGate={isAnimateGate}>
        <div className="page">
          <div className="content">
            <Suspense>
              <Routes>
                {routes.map((el, i) => (
                  <Route key={i} path={el.path} element={el.element} />
                ))}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </Gate>
      <FloatingButton
        menuIdentifier={{ enable: true }}
        location="top-left"
        buttons={buttons}
        mainButtonIcon={<DarkLogoIcon width={iconWidth} />}
      />
    </>
  );
};

export default App;
