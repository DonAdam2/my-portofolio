//urls
import { getAboutPageUrl, getHomePageUrl, getProjectsPageUrl, getSkillsPageUrl } from './appUrls';
//pages
import HomePage from '../containers/pages/HomePage';
import AboutMePage from '../containers/pages/AboutMePage';
import SkillsPage from '../containers/pages/SkillsPage';
import MyProjectsPage from '../containers/pages/MyProjectsPage';
import NotFoundPage from '../containers/pages/NotFoundPage';

export const routes = [
  { path: getHomePageUrl(), element: <HomePage /> },
  { path: getAboutPageUrl(), element: <AboutMePage /> },
  { path: getSkillsPageUrl(), element: <SkillsPage /> },
  { path: getProjectsPageUrl(), element: <MyProjectsPage /> },
  { path: '*', element: <NotFoundPage /> },
];
