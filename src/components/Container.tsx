import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';
import { throttle } from '../utils';
import farmstead from '../images/farmstead-thumb.png';
import Confetti from './Confetti';

const Container: FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = throttle(20, (event: MouseEvent) => { setMousePos({ x: event.pageX, y: event.pageY }); }, );
    document.addEventListener('mousemove', updateMouse);
    return () => document.removeEventListener('mousemove', updateMouse, true)
  }, []);

  return (
    <ContainerMain>
      <h1>Ian Barr/Web Developer</h1>
      <BubblesContainer>
        <Bubble mouseX={ mousePos.x } mouseY={ mousePos.y } color='orange' image={ farmstead } title='CPF Historical Site' />
        <Bubble mouseX={ mousePos.x } mouseY={ mousePos.y } color='aqua' title='DiscordSoundboardBot' />
        <Bubble mouseX={ mousePos.x } mouseY={ mousePos.y } color='pink' title='Rockhearsal Manager' />
        <Bubble mouseX={ mousePos.x } mouseY={ mousePos.y } color='lightgreen' />
      </BubblesContainer>
      <Confetti />
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
`;

export default Container;
