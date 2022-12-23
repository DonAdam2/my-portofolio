import { lazy } from 'react';
//urls
import { getAboutPageUrl, getHomePageUrl, getProjectsPageUrl, getSkillsPageUrl } from './appUrls';

const HomePage = lazy(() => import('../containers/pages/HomePage')),
  AboutMePage = lazy(() => import('../containers/pages/AboutMePage')),
  SkillsPage = lazy(() => import('../containers/pages/SkillsPage')),
  MyProjectsPage = lazy(() => import('../containers/pages/MyProjectsPage'));

export const routes = [
  { path: getHomePageUrl(), element: <HomePage /> },
  { path: getAboutPageUrl(), element: <AboutMePage /> },
  { path: getSkillsPageUrl(), element: <SkillsPage /> },
  { path: getProjectsPageUrl(), element: <MyProjectsPage /> },
];
