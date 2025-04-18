import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';
import { throttle } from '../utils';
import Confetti from './Confetti';
import ContentModal from './ContentModal';
import projectData from '../data/project-data';
import Project from '../models/project';

const Container: FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [currentContent, setCurrentContent] = useState<Project | null>(null);
  const [currentBubbleOGSides, setCurrentBubbleOGSides] = useState<number[]>([]);

  useEffect(() => {
    const updateMouse = throttle(20, (event: MouseEvent) => { setMousePos({ x: event.pageX, y: event.pageY }); }, );
    document.addEventListener('mousemove', updateMouse);
    return () => document.removeEventListener('mousemove', updateMouse, true)
  }, []);

  const openModal = useCallback((projectData: Project, clockWiseBubbleCoords: number[]) => {
    setCurrentBubbleOGSides(clockWiseBubbleCoords);
    setCurrentContent(projectData);
  }, []);

  return (
    <ContainerMain>
      <h1>Ian Barr/Web Developer</h1>
      { !currentContent && <BubblesContainer>
        { projectData.map(x => <Bubble key={ x.title } mouseX={ mousePos.x } mouseY={ mousePos.y }  project={ x } open={ (clockWiseBubbleCoords: number[]) => openModal(x, clockWiseBubbleCoords) } /> ) }
      </BubblesContainer> }
      <Confetti currentColor={ currentContent?.color } />
      { currentContent && <ContentModal close={ () => setCurrentContent(null) } ogSides={ currentBubbleOGSides } projectData={ currentContent } mouseX={ mousePos.x } mouseY={ mousePos.y }  /> }
    </ContainerMain>
  );
}; 

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${ props => props.theme.colors.bgMain };
  background: radial-gradient(${ props => props.theme.colors.bgSecondary }, ${ props => props.theme.colors.bgMain });

  > h1 {
    color: white;
    font-size: 5rem;
    margin: 0;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    z-index: 10;
  }
`;

const BubblesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;

  @media only screen and (max-width: 910px) {
    grid-template-columns: 1fr;
  }
`;

export default Container;
