import { TechName } from "../data/tech-icons";

export default interface Project {
  title: string;
  image: string;
  color: string;
  techIcons: TechName[];
  description: string;
  allTechs: TechName[];
}
