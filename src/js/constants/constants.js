import darkJavaScriptIcon from '@/public/assets/images/skillsIcons/dark/darkJavaScriptIcon.svg';
import darkCmsIcon from '@/public/assets/images/skillsIcons/dark/darkCmsIcon.svg';
import darkTypescriptIcon from '@/public/assets/images/skillsIcons/dark/darkTypescriptIcon.svg';
import darkStylesIcon from '@/public/assets/images/skillsIcons/dark/darkStylesIcon.svg';
import darkBackendIcon from '@/public/assets/images/skillsIcons/dark/darkBackendIcon.svg';
import darkFrontendIcon from '@/public/assets/images/skillsIcons/dark/darkFrontendIcon.svg';
import signItImage from '@/public/assets/images/signIt.png';
import flowardPremiumImage from '@/public/assets/images/flowardPremium.png';
import flowardSSOImage from '@/public/assets/images/flowardSSO.png';
import shareFeelingsImage from '@/public/assets/images/shareFeelings.png';
import flowardHubImage from '@/public/assets/images/flowardHub.png';
import keepConnectImage from '@/public/assets/images/keepConnect.png';
import trinitiImage from '@/public/assets/images/tiniti.png';
import fxprimusImage from '@/public/assets/images/fxprimus.png';
import JavascriptIcon from '@/js/components/icons/skillsIcons/JavascriptIcon';
import TypescriptIcon from '@/js/components/icons/skillsIcons/TypescriptIcon';
import NextJsIcon from '@/js/components/icons/skillsIcons/NextJsIcon';
import ReactIcon from '@/js/components/icons/skillsIcons/ReactIcon';
import ReduxIcon from '@/js/components/icons/skillsIcons/ReduxIcon';
import AngularIcon from '@/js/components/icons/skillsIcons/AngularIcon';
import RxjsIcon from '@/public/assets/images/reactivex.png';
import JestIcon from '@/js/components/icons/skillsIcons/JestIcon';
import CypressIcon from '@/js/components/icons/skillsIcons/CypressIcon';
import WebpackIcon from '@/js/components/icons/skillsIcons/WebpackIcon';
import AjaxIcon from '@/js/components/icons/skillsIcons/AjaxIcon';
import Html5Icon from '@/js/components/icons/skillsIcons/Html5Icon';
import Css3Icon from '@/js/components/icons/skillsIcons/Css3Icon';
import SassIcon from '@/js/components/icons/skillsIcons/SassIcon';
import BootstrapIcon from '@/js/components/icons/skillsIcons/BootstrapIcon';
import MaterialDesignIcon from '@/js/components/icons/skillsIcons/MaterialDesignIcon';
import NodeJsIcon from '@/js/components/icons/skillsIcons/NodeJsIcon';
import MongoDBIcon from '@/js/components/icons/skillsIcons/MongoDBIcon';
import DrupalIcon from '@/js/components/icons/skillsIcons/DrupalIcon';
import WordPressIcon from '@/js/components/icons/skillsIcons/WordPressIcon';
import GitIcon from '@/js/components/icons/skillsIcons/GitIcon';
import LinuxIcon from '@/js/components/icons/skillsIcons/LinuxIcon';
import DockerIcon from '@/js/components/icons/skillsIcons/DockerIcon';
import TravisCIIcon from '@/js/components/icons/skillsIcons/TravisCIIcon';
import JiraIcon from '@/js/components/icons/skillsIcons/JiraIcon';

export const myPhoneNumber = '97691992';
export const mySkypeUsername = 'live:don.adam8';

export const skillsImages = [
  { image: darkJavaScriptIcon },
  { image: darkCmsIcon },
  { image: darkTypescriptIcon },
  { image: darkStylesIcon },
  { image: darkBackendIcon },
  { image: darkFrontendIcon },
];

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

export const projects = [
  {
    title: 'SignIt',
    isImg: true,
    imgSrc: signItImage,
    iframe: '',
    desc: `This app is created using React 19 in 2 languages Arabic and English. It's an e-signature site.`,
    skills: [
      'React, Redux toolkit',
      'Typescript',
      'PDFTron for e-signatures',
      'ES6',
      'Shadcn UI',
      'Tailwind CSS',
      'HTML5',
    ],
  },
  {
    title: 'FlwPremium',
    isImg: true,
    imgSrc: flowardPremiumImage,
    iframe: '',
    desc: `This app is created using NextJS in 2 languages Arabic and English. It's an e-commerce site for VIP customers
		 which has social login (Facebook, Google, Apple) and payments using frames and apple pay.`,
    skills: [
      'Custom NextJS boilerplate',
      'React, Redux, Redux thunk',
      'Apple pay',
      'ES6',
      'SCSS',
      'HTML5',
    ],
  },
  {
    title: 'FlowardSSO',
    isImg: true,
    imgSrc: flowardSSOImage,
    iframe: '',
    desc: `Single sign-on (SSO) app which enables users to securely authenticate with multiple applications and websites by using just one set of credentials.`,
    skills: ['Custom webpack build', 'React, Redux, Redux thunk', 'ES6', 'SCSS', 'HTML5'],
  },
  {
    title: 'ShareFeelings',
    isImg: true,
    imgSrc: shareFeelingsImage,
    iframe: '',
    desc: `Allows receivers (users) to get the shared feelings from senders through videos, messages or links.`,
    skills: ['Custom webpack build', 'React', 'ES6', 'SCSS', 'HTML5'],
  },
  {
    title: 'FlowardHub',
    isImg: true,
    imgSrc: flowardHubImage,
    iframe: '',
    desc: `Created few pages in the internal Floward dashboard in React, Redux, SCSS and HTML5 which has many features such as authentication,
		 authorization, payments, orders list, products list, drivers list and notifications.`,
    skills: ['React, Redux, Redux thunk', 'ES6', 'Socket IO', 'SCSS', 'HTML5'],
  },
  {
    title: 'KeepConnect',
    isImg: true,
    imgSrc: keepConnectImage,
    iframe: '',
    desc: `My primary role on this site is to manage the frontend team and tickets as well as coding using best practices.
		 This app was created using React, Redux and socket IO. It allows users to open multiple sites in one tab while chating and browse their account.`,
    skills: [
      'Custom webpack build',
      'React, Redux, Redux thunk',
      'ES6',
      'Socket IO',
      'SCSS',
      'HTML5',
    ],
  },
  {
    title: 'Triniti',
    isImg: true,
    imgSrc: trinitiImage,
    iframe: '',
    desc: `This app is created using React and Redux. It has different authorization levels
 				(admin, biller agent and no charge agent). It allows them to create agents,
				subscriptions, transactions, refund transactions, notes, email templates, email
 				offers, quick phrases, search using multiple fields such as email, username,
				firstname, etc..., send errors and manage products.`,
    skills: [
      'Custom webpack build',
      'React, Redux, Redux thunk',
      'ES6',
      'IndexedDB',
      'SCSS',
      'HTML5',
    ],
  },
  {
    title: 'FxPrimus',
    isImg: true,
    imgSrc: fxprimusImage,
    iframe: '',
    desc: `My primary role on this site was to create landing pages, update data on it and use APIs to get the required data. Also we used web sockets to get live data.
Created the infrastructure of the new members area using angular 8.`,
    skills: [
      'Web sockets',
      'Javascript',
      'Typescript',
      'Angular 8',
      'ES6',
      'JQuery',
      'HTML5/CSS3',
      'SCSS',
      'Bootstrap',
    ],
  },
  {
    title: 'React carousel',
    isImg: false,
    imgSrc: '',
    iframe: (
      <iframe
        height="265"
        style={{ width: '100%' }}
        scrolling="no"
        title="React 3D carousel"
        src="https://codepen.io/AdamMorsi/embed/preview/xxRgGmo?height=265&theme-id=default&default-tab=result,result"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen <a href="https://codepen.io/AdamMorsi/pen/xxRgGmo">React 3D Carousel</a> by Adam
        Morsi (<a href="https://codepen.io/AdamMorsi">@AdamMorsi</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    ),
    desc: `Amazing 3D carousel with nice animations`,
    skills: ['React', 'Custom hooks', 'Javascript', 'ES6', 'JSX', 'SCSS'],
  },
  {
    title: 'React stepper',
    isImg: false,
    imgSrc: '',
    iframe: (
      <iframe
        height="265"
        style={{ width: '100%' }}
        scrolling="no"
        title="React Stepper"
        src="https://codepen.io/AdamMorsi/embed/preview/qBRazPM?height=265&theme-id=default&default-tab=result,result"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen <a href="https://codepen.io/AdamMorsi/pen/qBRazPM">React Stepper</a> by Adam
        Morsi (<a href="https://codepen.io/AdamMorsi">@AdamMorsi</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    ),
    desc: `This stepper has 3 types (default, inline, vertical) and it supports RTL`,
    skills: ['React', 'Custom hooks', 'Javascript', 'ES6', 'JSX', 'SCSS'],
  },
  {
    title: 'React datatable',
    isImg: false,
    imgSrc: '',
    iframe: (
      <iframe
        height="265"
        style={{ width: '100%' }}
        scrolling="no"
        title="React Datatable"
        src="https://codepen.io/AdamMorsi/embed/preview/mdqqpyX?height=265&theme-id=default&default-tab=result,result"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen <a href="https://codepen.io/AdamMorsi/pen/mdqqpyX">React Datatable</a> by Adam
        Morsi (<a href="https://codepen.io/AdamMorsi">@AdamMorsi</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    ),
    desc: `This datatable has the following functionalities: sorting, searching and pagination`,
    skills: ['React', 'Custom hooks', 'Javascript', 'ES6', 'JSX', 'SCSS'],
  },
  {
    title: 'React Dropdown',
    isImg: false,
    imgSrc: '',
    iframe: (
      <iframe
        height="265"
        style={{ width: '100%' }}
        scrolling="no"
        title="React Dropdown"
        src="https://codepen.io/AdamMorsi/embed/preview/vYdQXze?height=265&theme-id=default&default-tab=result,result"
        frameBorder="no"
        loading="lazy"
      >
        See the Pen <a href="https://codepen.io/AdamMorsi/pen/mdqqpyX">React Dropdown</a> by Adam
        Morsi (<a href="https://codepen.io/AdamMorsi">@AdamMorsi</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    ),
    desc: `This pen allows you to create a very dynamic dropdown with many options`,
    skills: ['React', 'TypeScript', 'ES6', 'TSX', 'SCSS'],
  },
];
