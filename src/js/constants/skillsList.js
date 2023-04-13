//icons
import AngularIcon from '../components/icons/skillsIcons/AngularIcon';
import BootstrapIcon from '../components/icons/skillsIcons/BootstrapIcon';
import Css3Icon from '../components/icons/skillsIcons/Css3Icon';
import DrupalIcon from '../components/icons/skillsIcons/DrupalIcon';
import GitIcon from '../components/icons/skillsIcons/GitIcon';
import Html5Icon from '../components/icons/skillsIcons/Html5Icon';
import JavascriptIcon from '../components/icons/skillsIcons/JavascriptIcon';
import JiraIcon from '../components/icons/skillsIcons/JiraIcon';
import LinuxIcon from '../components/icons/skillsIcons/LinuxIcon';
import MaterialDesignIcon from '../components/icons/skillsIcons/MaterialDesignIcon';
import MongoDBIcon from '../components/icons/skillsIcons/MongoDBIcon';
import NextJsIcon from '../components/icons/skillsIcons/NextJsIcon';
import NodeJsIcon from '../components/icons/skillsIcons/NodeJsIcon';
import ReactIcon from '../components/icons/skillsIcons/ReactIcon';
import ReduxIcon from '../components/icons/skillsIcons/ReduxIcon';
import SassIcon from '../components/icons/skillsIcons/SassIcon';
import TypescriptIcon from '../components/icons/skillsIcons/TypescriptIcon';
import WebpackIcon from '../components/icons/skillsIcons/WebpackIcon';
import WordPressIcon from '../components/icons/skillsIcons/WordPressIcon';
import RxjsIcon from '@/public/assets/images/reactivex.png';
import DockerIcon from '../components/icons/skillsIcons/DockerIcon';
import TravisCIIcon from '../components/icons/skillsIcons/TravisCIIcon';
import CypressIcon from '../components/icons/skillsIcons/CypressIcon';
import JestIcon from '../components/icons/skillsIcons/JestIcon';
import AjaxIcon from '@/js/components/icons/skillsIcons/AjaxIcon';

export const skillsList = [
  { label: 'Javascript', icon: <JavascriptIcon /> },
  { label: 'Typescript', icon: <TypescriptIcon /> },
  { label: 'NextJS', icon: <NextJsIcon /> },
  { label: 'React', icon: <ReactIcon /> },
  { label: 'React Native', icon: <ReactIcon /> },
  { label: 'Redux', icon: <ReduxIcon /> },
  { label: 'Angular 2+', icon: <AngularIcon /> },
  { label: 'RxJs', icon: <img className="back-logo" src={RxjsIcon} alt="rxjs icon" /> },
  { label: 'Jest', icon: <JestIcon /> },
  { label: 'Cypress', icon: <CypressIcon /> },
  { label: 'Webpack', icon: <WebpackIcon /> },
  {
    label: 'AJAX',
    icon: <AjaxIcon />,
  },
  { label: 'HTML5', icon: <Html5Icon /> },
  { label: 'CSS3', icon: <Css3Icon /> },
  { label: 'SCSS', icon: <SassIcon /> },
  { label: 'Bootstrap', icon: <BootstrapIcon /> },
  { label: `Material D`, icon: <MaterialDesignIcon /> },
  { label: 'NodeJS', icon: <NodeJsIcon /> },
  { label: 'MongoDB', icon: <MongoDBIcon /> },
  { label: 'Drupal', icon: <DrupalIcon /> },
  { label: 'WordPress', icon: <WordPressIcon /> },
  { label: 'Git', icon: <GitIcon /> },
  { label: 'Linux', icon: <LinuxIcon /> },
  { label: 'Docker', icon: <DockerIcon /> },
  { label: 'Travis CI', icon: <TravisCIIcon /> },
  { label: 'Jira', icon: <JiraIcon /> },
];
