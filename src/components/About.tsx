import { FC, useMemo, useRef } from 'react';
import styled from 'styled-components';
import closeIcon from '../images/icons/close-dark-grey.png';

interface AboutProps {
  mouseX: number;
  mouseY: number;
  close: () => void;
}

const About: FC<AboutProps> = ({ mouseX, mouseY, close }) => {
  const aboutMain = useRef<HTMLDivElement | null>(null);
    
      const highLightCoords = useMemo(() => {
        const DOMRect = aboutMain?.current?.getBoundingClientRect();
        if (!DOMRect)
          return [];
    
        return [mouseY - DOMRect.top, mouseX - DOMRect.left];
      }, [aboutMain, mouseX, mouseY]);

  return (
    <AboutContainer>
      <AboutMain ref={ aboutMain }>
        <Content>
          <div>
            <h1>About</h1>
            <Close onClick={ close }>
              <img src={ closeIcon } alt="" />
            </Close>
          </div>
          <p>Ian is a Web Developer, Keyboard Teacher and Composer in southeastern PA. He currently handles all things Web Design/Dev related for Colonial Pennsylvania Farmstead, a living history organization in Delaware County, and has been teaching music with School of Rock for a decade. UI/UX design and QoL for users is a major focus for Ian when creating apps—as a teacher, he knows the power of something that anyone can understand and start using just by looking at it. Ian graduated Magna Cum Laude from Westminster Choir College with a BM in Music/Theory Composition.</p>
          <p>Skills: Typescript/Javascript, React, HTML + CSS, Styled Components, GraphQL, REST, Git.</p>
          <p><a href='https//github.com/stuckinab0x'>https//github.com/stuckinab0x</a></p>
        </Content>
        <Highlight $color='white' style={ { top: highLightCoords[0], left: highLightCoords[1] } } />
      </AboutMain>
      <div  onClick={ close } />
    </AboutContainer>
  )
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 100;

  > div:last-child {
    width: 100%;
    height: 100%;
    position: fixed;
  }
`;

const AboutMain = styled.div`
  background-color: ${ props => props.theme.colors.contentInnerA };
  padding: 6px;
  width: 1000px;
  height: 600px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: ${ props => props.theme.colors.contentInnerB };
  z-index: 10;
  position: relative;
  color: white;
  box-sizing: border-box;

  > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    > h1 {
      margin: 0;
    }
  }

  h1, p {
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    margin: 0 0 30px 0;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.75rem;
    line-height: 2rem;

    > a {
      color: white;
    }
  }
`;

const Close = styled.div`
  width: 60x;
  height: 60px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.8);
  margin: 0 8px 0 0;
  opacity: 0.6;
  
  &:hover {
    opacity: 1;
  }

  > img {
    width: 100%;
    height: 100%;
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

export default About;
