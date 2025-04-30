import { FC } from 'react';
import styled from 'styled-components';
import scrollImage from '../images/scrolldown.png';

const ScrollIndicator: FC = () => (
  <ScrollIndicatorMain>
    <img src={ scrollImage } alt="" />
  </ScrollIndicatorMain>
)

const ScrollIndicatorMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 150px;
  width: 1000px;
  background: linear-gradient(rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.8));
  bottom: 0;
  opacity: 0;
  z-index: 100;
  transition: opacity 0.5s;
  pointer-events: none;

  > img {
    width: 100px;
    height: 40px;
    opacity: 0.5;
  }
`;

export default ScrollIndicator;
