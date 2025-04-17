import { FC } from 'react';
import styled from 'styled-components';

const colors = ['orange', 'aqua', 'pink', 'lightgreen'];

const getRandoms = (count: number): KeyedParticleProps[] => Array.from(Array(count).keys()).map(x => ({ id: x, x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100), $time: Math.floor(Math.random() * 10 + 20), $color: colors[Math.floor((x / count) / 0.25)] }));

const randoms = getRandoms(150);

interface ParticleProps {
  $time: number;
  $color: string;
  $activeColor?: string;
}

interface KeyedParticleProps extends ParticleProps {
  id: number;
  x: number;
  y: number;
}

interface ConfettiProps {
  currentColor: string | undefined;
}

const Confetti: FC<ConfettiProps> = ({ currentColor }) => (
  <ConfettiMain>
    { randoms.map(x => <Confett key={ x.id } style={ { left: `${ x.x }%`, top: `${ x.y }%` } } $time={ x.$time } $color={ x.$color } $activeColor={ currentColor }>
      <div />
      <div />
      <div />
      <div />
    </Confett>) }
  </ConfettiMain>
);

const ConfettiMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Confett = styled.div<ParticleProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  height: 90px;
  width: 90px;
  opacity: 0.2;

  > div {
    height: 45px;
    width: 45px;
  }

  &::after {
    height: 60px;
    width: 60px;
    border-radius: 15px;
    content: '';
    transition: translate 0.6s linear, background-color 0.6s;
    pointer-events: none;
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: ${ props => props.$activeColor ? props.$activeColor : props.$color };
  }

  &:nth-child(4n) {
    animation: float1 ${ props => props.$time }s infinite linear;
  }

  &:nth-child(4n + 1) {
    animation: float2 ${ props => props.$time }s infinite linear;
  }

  &:nth-child(4n + 2) {
    animation: float3 ${ props => props.$time }s infinite linear;
  }

  &:nth-child(4n + 3) {
    animation: float3 ${ props => props.$time }s infinite linear;
  }

  &:has(:nth-child(1):hover) {
    &::after {
      translate: 40px 40px;
    }
  }

  &:has(:nth-child(2):hover) {
    &::after {
      translate: -40px 40px;
    }
  }

  &:has(:nth-child(3):hover) {
    &::after {
      translate: 40px -40px;
    }
  }


  &:has(:nth-child(4):hover) {
    &::after {
      translate: -40px -40px;
    }
  }

  @keyframes float1 {
    0% {
    }

    25% {
      transform: translate(-20px, 20px);
    }

    50% {
      transform: translate(0px, 40px);
    }

    75% {
      transform: translate(-20px, 20px);
    }

    100% {
    }
  }

  @keyframes float2 {
    0% {
    }

    25% {
      transform: translate(-5px, -20px);
    }

    50% {
      transform: translate(-10px, 0);
    }

    75% {
      transform: translate(-5px, 20px);
    }

    100% {
    }
  }

  @keyframes float3 {
    0% {
    }

    25% {
      transform: translate(-30px, 60px);
    }

    50% {
      transform: translate(0, 120px);
    }

    75% {
      transform: translate(-30px, 60px);
    }

    100% {
    }
  }

  @keyframes float4 {
    0% {
    }

    25% {
      transform: translate(10px, 10px);
    }

    50% {
      transform: translate(0, 20px);
    }

    75% {
      transform: translate(10px, 10px);
    }

    100% {
    }
  }
`;


export default Confetti;
