import Project from '../models/project';
import farmsteadMain from '../images/farmstead-main.png?w=1080&format=webp&imagetools';
import farmsteadHours from '../images/farmstead-hours.png?w=720&format=webp&imagetools';
import farmsteadEvents from '../images/farmstead-events.png?w=1080&format=webp&imagetools';
import soundBoardMain from '../images/soundboard-main-new.png?w=1080&format=webp&imagetools';
import soundBoardAdmin from '../images/soundboard-admin.png?w=1080&format=webp&imagetools';
import soundBoardTagging from '../images/soundboard-tagging.png?w=1080&format=webp&imagetools';
import rehearsalManager from '../images/rehearsal-manager-main.jpg?w=1080&format=webp&imagetools';
import rehearsalManagerApp from '../images/rehearsal-manager-app.jpg?w=920&format=webp&imagetools';
import keyboardTools from '../images/keyboard-tools-main.jpg?w=1080&format=webp&imagetools';

const projectData: Project[] = [
  {
    title: 'Farmstead Historical Site',
    thumb: farmsteadMain,
    color: 'orange',
    techIcons: ['Cloudflare', 'Gatsby', 'NodeJS', 'TypeScript'],
    description: 'The home page for Colonial Pennsylvania Farmstead, a living history organization in southeastern PA. Created with gatsby and includes a headless CMS backend for content updates. Deployed to Cloudflare Pages for unlimited free static hosting.',
    allTechs: ['Cloudflare Workers', 'ESLint', 'Gatsby', 'NodeJS', 'Styled Components', 'TypeScript'],
    gallery: [farmsteadMain, farmsteadHours, farmsteadEvents],
  },
  {
    title: 'DiscordSoundboardBot',
    thumb: soundBoardMain,
    color: 'aqua',
    techIcons: ['Docker', 'NodeJS', 'TypeScript', 'Vite'],
    description: 'A soundboard bot for Discord servers. In additional to conventional chat commands, it includes a UI with sound buttons, user favorites and tagging, sound previews, customizable user greeting sounds, and an admin panel.',
    allTechs: ['Azure Web Apps', 'Docker', 'ESLint', 'MongoDb', 'NodeJS', 'React', 'Styled Components', 'TypeScript', 'Vite'],
    gallery: [soundBoardMain, soundBoardTagging, soundBoardAdmin],
  },
  {
    title: 'Rockhearsal Manager',
    thumb: rehearsalManager,
    color: 'pink',
    techIcons: ['Docker', 'NodeJS', 'TypeScript', 'Vite'],
    description: `A Android App made to help keep track of music school rehearsals, with an accompanying 
web app for easily casting shows and syncing data.`,
    allTechs: ['Azure Web Apps', 'Docker', 'ESLint', 'MongoDb', 'NodeJS', 'React Native', 'React Native', 'Styled Components', 'TypeScript', 'Vite'],
    gallery: [rehearsalManager, rehearsalManagerApp],
  },
  {
    title: 'Keyboard Tools',
    thumb: keyboardTools,
    color: 'lightgreen',
    techIcons: ['TypeScript', 'Vite'],
    description: 'A web app for visually teaching musical scales and modes.',
    allTechs: ['ESLint','React', 'Styled Components', 'TypeScript', 'Vite'],
    gallery: [keyboardTools],
  },
]

export default projectData;
