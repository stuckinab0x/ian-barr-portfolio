import { FC, useMemo, useRef } from 'react';
import styled from 'styled-components';
import githubIcon from '../images/icons/GitHub_Invertocat_Light.png';

interface HomeAboutButtonsProps {
  mouseX: number;
  mouseY: number;
  openAbout: () => void;
}

const HomeAboutButtons: FC<HomeAboutButtonsProps> = ({ mouseX, mouseY, openAbout }) => {
  const container = useRef<HTMLDivElement | null>(null);
  
    const highLightCoords = useMemo(() => {
      const DOMRect = container?.current?.getBoundingClientRect();
      if (!DOMRect)
        return [];
  
      return [mouseY - DOMRect.top, mouseX - DOMRect.left];
    }, [container, mouseX, mouseY]);


  return (
    <HighlightBackground ref={ container }>
      <AboutContainerMain>
        <h2 onClick={ openAbout }>About</h2>
        <span />
        <a href="https://github.com/stuckinab0x" target='_blank' rel="noreferrer noopener"><img src={ githubIcon } alt="" /></a>
      </AboutContainerMain>
      <Highlight $color='white' style={ { top: highLightCoords[0], left: highLightCoords[1] } } />
    </HighlightBackground>
  )
};

const HighlightBackground = styled.div`
  background-color: ${ props => props.theme.colors.contentInnerA };
  z-index: 10;
  padding: 6px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const AboutContainerMain = styled.div`
  display: flex;
  color: white;
  background-color: ${ props => props.theme.colors.contentInnerB };
  padding: 10px 6px;
  border-radius: 4px;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  position: relative;

  > h2, img {
    margin: 0 20px;
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0 0 4px rgba(237, 237, 237, 0.5));
      transition: filter 0.4s;
    }
  }

  > h2 {
    font-size: 2rem;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  }

  > a {
    height: 40px;

    img {
      height: 40px;
      width: 40px;
      filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
    }
  }

  > span {
    height: 44px;
    width: 4px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 500px) {
    width: 80vw;
    box-sizing: border-box;

    > h2 {
      font-size: 1.4rem;
    }

    > span {
      height: 30px;
    }

    > a {
      height: 30px;
      
      img {
        height: 30px;
        width: 30px;
      }
    }
  }
`;

interface HighlightStyleProps {
  $color: string;
}

const Highlight = styled.div<HighlightStyleProps>`
  border-radius: 30px;
  background-color: ${ props => props.$color };
  width: 2px;
  height: 2px;
  box-shadow: 0 0 200px 200px ${ props => props.$color };
  position: absolute;
`;

export default HomeAboutButtons;
