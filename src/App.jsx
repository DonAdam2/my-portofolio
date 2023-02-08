import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
//dark images
import darkHomeDesktop from '@/public/assets/images/mandala/home/darkHomeDesktop.svg';
import darkHomeMobile from '@/public/assets/images/mandala/home/darkHomeMobile.svg';
import darkAbout from '@/public/assets/images/mandala/about/darkAbout.svg';
import darkSkillsDesktop from '@/public/assets/images/mandala/skills/darkSkillsDesktop.svg';
import darkSkillsLaptop from '@/public/assets/images/mandala/skills/darkSkillsLaptop.svg';
import leftDarkProjects from '@/public/assets/images/mandala/projects/left.svg';
import rightDarkProjects from '@/public/assets/images/mandala/projects/right.svg';
import darkNotFoundDesktop from '@/public/assets/images/mandala/notFound/darkNotFoundDesktop.svg';
import darkNotFoundMobile from '@/public/assets/images/mandala/notFound/darkNotFoundMobile.svg';
import darkBackendIcon from '@/public/assets/images/skillsIcons/dark/darkBackendIcon.svg';
import darkCmsIcon from '@/public/assets/images/skillsIcons/dark/darkCmsIcon.svg';
import darkFrontendIcon from '@/public/assets/images/skillsIcons/dark/darkFrontendIcon.svg';
import darkJavaScriptIcon from '@/public/assets/images/skillsIcons/dark/darkJavaScriptIcon.svg';
import darkStylesIcon from '@/public/assets/images/skillsIcons/dark/darkStylesIcon.svg';
import darkTypescriptIcon from '@/public/assets/images/skillsIcons/dark/darkTypescriptIcon.svg';
import introImg from '@/public/assets/images/intro.png';
//constants
import {
  getAboutPageUrl,
  getHomePageUrl,
  getProjectsPageUrl,
  getSkillsPageUrl,
} from './js/constants/appUrls';
import { routes } from './js/constants/routesConfig';
import { setTimeoutRAF } from './js/constants/helpers';
//icons
import DarkLogoIcon from './js/components/icons/floatingButtonIcons/dark/DarkLogoIcon';
import DarkHomeIcon from './js/components/icons/floatingButtonIcons/dark/DarkHomeIcon';
import DarkInfoIcon from './js/components/icons/floatingButtonIcons/dark/DarkInfoIcon';
import DarkGearIcon from './js/components/icons/floatingButtonIcons/dark/DarkGearIcon';
import DarkBagIcon from './js/components/icons/floatingButtonIcons/dark/DarkBagIcon';
//components
import FloatingButton from '@/js/containers/FloatingButton';
import Gate from './js/components/UI/Gate';
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
    const images = [
      darkHomeDesktop,
      darkHomeMobile,
      darkAbout,
      darkSkillsDesktop,
      darkSkillsLaptop,
      leftDarkProjects,
      rightDarkProjects,
      darkNotFoundDesktop,
      darkNotFoundMobile,
      darkBackendIcon,
      darkCmsIcon,
      darkFrontendIcon,
      darkJavaScriptIcon,
      darkStylesIcon,
      darkTypescriptIcon,
      introImg,
    ];
    images.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
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
      gateTimeout / 2,
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
    },
    {
      icon: <DarkInfoIcon width={iconWidth} />,
      click: () => buttonHandler(getAboutPageUrl()),
    },
    {
      icon: <DarkGearIcon width={iconWidth} />,
      click: () => buttonHandler(getSkillsPageUrl()),
    },
    {
      icon: <DarkBagIcon width={iconWidth} />,
      click: () => buttonHandler(getProjectsPageUrl()),
    },
  ];

  return (
    <>
      <Gate isAnimateGate={isAnimateGate}>
        <div className="page">
          <div className="content">
            <Routes>
              {routes.map((el, i) => (
                <Route key={i} path={el.path} element={el.element} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
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
