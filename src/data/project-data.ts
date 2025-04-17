import Project from '../models/project';
import farmstead from '../images/farmstead-thumb.png';
import soundBoard from '../images/soundboardthumbtemp.png';
import rehearsalManager from '../images/rehearsal-manager-thumb-temp.png';

const projectData: Project[] = [
  {
    title: 'Farmstead Historical Site',
    image: farmstead,
    color: 'orange',
    techIcons: ['Cloudflare', 'Gatsby', 'NodeJS', 'TypeScript'],
    description: 'A gatsby page for Colonial Pennsylvania Farmstead, a living history organization in southeastern PA. Includes a headless CMS backend for content updates. Deployed to Cloudflare Pages for unlimited free static hosting.',
    allTechs: ['Cloudflare Workers', 'ESLint', 'Gatsby', 'NodeJS', 'Styled Components', 'TypeScript'],
  },
  {
    title: 'DiscordSoundboardBot',
    image: soundBoard,
    color: 'aqua',
    techIcons: ['Docker', 'NodeJS', 'TypeScript', 'Vite'],
    description: 'A soundboard bot for Discord servers. In additional to conventional chat commands, it includes a UI with sound buttons, user favorites and tagging, sound previews, customizable user greeting sounds, and an admin panel.',
    allTechs: ['Azure Web Apps', 'Docker', 'ESLint', 'MongoDb', 'NodeJS', 'React', 'Styled Components', 'TypeScript', 'Vite'],
  },
  {
    title: 'Rockhearsal Manager',
    image: rehearsalManager,
    color: 'pink',
    techIcons: ['Docker', 'NodeJS', 'TypeScript', 'Vite'],
    description: `A personal Android App made to help keep track of private music school rehearsals, with an accompanying 
web app for easily casting shows and syncing data.`,
    allTechs: ['Azure Web Apps', 'Docker', 'ESLint', 'MongoDb', 'NodeJS', 'React Native', 'React Native', 'Styled Components', 'TypeScript', 'Vite'],
  },
  {
    title: '',
    image: '',
    color: 'lightgreen',
    techIcons: [],
    description: '',
    allTechs: [],
  },
]

export default projectData;
