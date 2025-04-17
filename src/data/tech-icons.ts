import cloudFlare from '../images/icons/cloudflare-icon_256.png';
import gatsby from '../images/icons/Gatsby_Monogram_256.png';
import nodeJs from '../images/icons/node_jsIconGreen_256.png';
import typeScript from '../images/icons/ts-logo-256.png';
import docker from '../images/icons/docker-mark-blue_256.png';
import viteIcon from '../images/icons/icons8-vite_256.png';

export type TechName = 'Azure Web Apps' | 'Cloudflare' | 'Cloudflare Workers' | 'DecapCMS' | 'Docker' | 'ESLint' | 'Gatsby' | 'GraphQL' | 'MongoDb' | 'NodeJS' | 'React' | 'React Native' | 'Styled Components' | 'TypeScript' | 'Vite';

interface TechIcon {
  name: TechName;
  icon: string;
}

const techIconImages: TechIcon[] = [
  {
    name: 'Cloudflare',
    icon: cloudFlare,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Gatsby',
    icon: gatsby,
  },
  {
    name: 'NodeJS',
    icon: nodeJs,
  },
  {
    name: 'TypeScript',
    icon: typeScript,
  },
  {
    name: 'Vite',
    icon: viteIcon,
  }
];

export default techIconImages;
