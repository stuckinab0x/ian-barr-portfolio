import Project from '../models/project';
import farmstead from '../images/farmstead-thumb.png';
import soundBoard from '../images/soundboardthumbtemp.png';
import rehearsalManager from '../images/rehearsal-manager-main.jpg';
import rehearsalManagerApp from '../images/rehearsal-manager-app.jpg';

const projectData: Project[] = [
  {
    title: 'Farmstead Historical Site',
    thumb: farmstead,
    color: 'orange',
    techIcons: ['Cloudflare', 'Gatsby', 'NodeJS', 'TypeScript'],
    description: 'A gatsby page for Colonial Pennsylvania Farmstead, a living history organization in southeastern PA. Includes a headless CMS backend for content updates. Deployed to Cloudflare Pages for unlimited free static hosting.',
    allTechs: ['Cloudflare Workers', 'ESLint', 'Gatsby', 'NodeJS', 'Styled Components', 'TypeScript'],
    gallery: [farmstead],
  },
  {
    title: 'DiscordSoundboardBot',
    thumb: soundBoard,
    color: 'aqua',
    techIcons: ['Docker', 'NodeJS', 'TypeScript', 'Vite'],
    description: 'A soundboard bot for Discord servers. In additional to conventional chat commands, it includes a UI with sound buttons, user favorites and tagging, sound previews, customizable user greeting sounds, and an admin panel.',
    allTechs: ['Azure Web Apps', 'Docker', 'ESLint', 'MongoDb', 'NodeJS', 'React', 'Styled Components', 'TypeScript', 'Vite'],
    gallery: [soundBoard],
  },
  {
    title: 'Rockhearsal Manager',
    thumb: rehearsalManager,
    color: 'pink',
    techIcons: ['Docker', 'NodeJS', 'TypeScript', 'Vite'],
    description: `A Android App made to help keep track of private music school rehearsals, with an accompanying 
web app for easily casting shows and syncing data.`,
    allTechs: ['Azure Web Apps', 'Docker', 'ESLint', 'MongoDb', 'NodeJS', 'React Native', 'React Native', 'Styled Components', 'TypeScript', 'Vite'],
    gallery: [rehearsalManager, rehearsalManagerApp],
  },
  {
    title: 'Keyboard Tools',
    thumb: '',
    color: 'lightgreen',
    techIcons: ['TypeScript', 'Vite'],
    description: 'A web app for visual teaching musical scales and modes.',
    allTechs: ['ESLint','React', 'Styled Components', 'TypeScript', 'Vite'],
    gallery: [],
  },
]

export default projectData;
