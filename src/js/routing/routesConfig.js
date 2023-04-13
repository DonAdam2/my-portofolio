//urls
import { getAboutPageUrl, getHomePageUrl, getProjectsPageUrl, getSkillsPageUrl } from './appUrls';
import HomePage from '@/js/containers/pages/HomePage';
import AboutMePage from '@/js/containers/pages/AboutMePage';
import SkillsPage from '@/js/containers/pages/SkillsPage';
import MyProjectsPage from '@/js/containers/pages/MyProjectsPage';

export const routes = [
  { path: getHomePageUrl(), element: <HomePage /> },
  { path: getAboutPageUrl(), element: <AboutMePage /> },
  { path: getSkillsPageUrl(), element: <SkillsPage /> },
  { path: getProjectsPageUrl(), element: <MyProjectsPage /> },
];
