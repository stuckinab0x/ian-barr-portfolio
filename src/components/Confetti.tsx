import { FC } from 'react';
import styled from 'styled-components';

const randoms: KeyedParticleProps[] = Array.from(Array(50).keys()).map(x => ({ id: x, $x: Math.floor(Math.random() * 100), $y: Math.floor(Math.random() * 100), $time: Math.floor(Math.random() * 10 + 20) }));

interface ParticleProps {
  $x: number;
  $y: number;
  $time: number;
}

interface KeyedParticleProps extends ParticleProps {
  id: number;
}

const Confetti: FC = () => (
  <ConfettiMain>
    { randoms.map(x => <Confett key={ x.id } $x={ x.$x } $y={ x.$y } $time={ x.$time }>
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
  top: ${ props => props.$y }%;
  left: ${ props => props.$x }%;
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
    transition: opacity 0.2s, translate 1s linear;
    pointer-events: none;
    position: absolute;
    top: 15px;
    left: 15px;
  }

  &:nth-child(4n) {
    animation: float1 ${ props => props.$time }s infinite linear;
    &::after {
      background-color: aqua;
    }
  }

  &:nth-child(4n + 1) {
    animation: float2 ${ props => props.$time }s infinite linear;
    &::after {
      background-color: orange;
    }
  }

  &:nth-child(4n + 2) {
    animation: float3 ${ props => props.$time }s infinite linear;
    &::after {
      background-color: pink;
    }
  }

  &:nth-child(4n + 3) {
    animation: float3 ${ props => props.$time }s infinite linear;
    &::after {
      background-color: lightgreen;
    }
  }

  &:has(:nth-child(1):hover) {
    &::after {
      translate: 20px 20px;
    }
  }

  &:has(:nth-child(2):hover) {
    &::after {
      translate: -20px 20px;
    }
  }

  &:has(:nth-child(3):hover) {
    &::after {
      translate: 20px -20px;
    }
  }


  &:has(:nth-child(4):hover) {
    &::after {
      translate: -20px -20px;
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
