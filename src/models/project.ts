import { TechName } from "../data/tech-icons";

export default interface Project {
  title: string;
  thumb: string;
  color: string;
  techIcons: TechName[];
  description: string;
  allTechs: TechName[];
  gallery: string[];
}
