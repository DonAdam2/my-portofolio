import { lazy } from 'react';
//urls
import { getAboutPageUrl, getHomePageUrl, getProjectsPageUrl, getSkillsPageUrl } from './appUrls';

const HomePage = lazy(() => import('@/js/containers/pages/HomePage'));
const AboutMePage = lazy(() => import('@/js/containers/pages/AboutMePage'));
const SkillsPage = lazy(() => import('@/js/containers/pages/SkillsPage'));
const MyProjectsPage = lazy(() => import('@/js/containers/pages/MyProjectsPage'));

export const routes = [
  { path: getHomePageUrl(), element: <HomePage /> },
  { path: getAboutPageUrl(), element: <AboutMePage /> },
  { path: getSkillsPageUrl(), element: <SkillsPage /> },
  { path: getProjectsPageUrl(), element: <MyProjectsPage /> },
];
