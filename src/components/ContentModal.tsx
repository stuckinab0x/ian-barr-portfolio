import { FC, useMemo, useRef } from 'react';
import styled from 'styled-components';
import Project from '../models/project';
import techIconImages from '../data/tech-icons';
import closeIcon from '../images/icons/close-dark-grey.png';
import ScrollIndicator from './ScrollIndicator';

interface ContentModalProps {
  projectData: Project;
  close: () => void;
  ogSides: number[];
  mouseX: number;
  mouseY: number;
}

const ContentModal: FC<ContentModalProps> = ({ close, projectData: { title, color, image, techIcons, description, allTechs }, mouseX, mouseY }) => {
  const contentContainer = useRef<HTMLDivElement | null>(null);

  const highLightCoords = useMemo(() => {
      const contentDOMRect = contentContainer?.current?.getBoundingClientRect();
      if (!contentDOMRect)
        return [];
  
      return [mouseY - contentDOMRect.top, mouseX - contentDOMRect.left];
    }, [contentContainer, mouseX, mouseY]);

  return(
    <ModalMain>
      <div ref={ contentContainer }>
        <Content $accent={ color }>
          <ContentSection>
            <div>
              <h1>{ title }</h1>
              <Close onClick={ close }>
                <img src={ closeIcon } alt="" />
              </Close>
            </div>
            <TechIcons $accent={ color }>
              { techIcons.map(x => <img key={ x } src={ techIconImages.find(icon => icon.name === x)?.icon } />) }
            </TechIcons>
          </ContentSection>
          <ContentSection>
            <p>{ description }</p>
            <p>All Tech: { allTechs.slice(0, -1).map(x => `${ x }, `) }{ allTechs[allTechs.length - 1] }.</p>
          </ContentSection>
          <ContentSection>
            <img src={ image } />
          </ContentSection>
          <ScrollIndicator />
        </Content>
        <Highlight style={ { top: highLightCoords[0], left: highLightCoords[1] } } $color={ color } />
      </div>
    </ModalMain>
  )
}


const ModalMain = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;

  > div {
    position: fixed;
    background-color: ${ props => props.theme.colors.contentInnerA };
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    left: auto;
    right: auto;
    width: 1000px;
    height: 100%;
    padding: 0 8px;
    overflow: hidden;
    scrollbar-width: none;
  }
`;

interface ContentStyleProps {
  $accent: string;
}

const Content = styled.div<ContentStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
  box-sizing: border-box;
  overflow-y: scroll;
  scrollbar-width: none;

  container-type: scroll-state;

  @container scroll-state(scrollable: bottom) {
    &:hover > :last-child {
      opacity: 1;
    }
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: ${ props => props.theme.colors.contentInnerB };
  padding: 12px 16px;
  margin: 4px 0;

  &:first-child {
    margin-top: -6px;

    :first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  
  h1, p {
    color: white;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  h1 {
    font-size: 4rem;
    margin: 0;
    box-sizing: border-box;
    background-color: ${ props => props.theme.colors.contentInnerB };
  }

  p {
    margin: 8px 0;
    font-size: 1.5rem;
  }

  > img {
    width: 98%;
    margin: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
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

const TechIcons = styled.div<ContentStyleProps>`
  display: flex;
  border-radius: 4px;
  background-color: ${ props => props.theme.colors.contentInnerA };
  max-width: max-content;

  > img {
    margin: 4px;
    width: 60px;
    height: 60px;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  }
`;

interface HighlightStyleProps {
  $color: string;
}

const Highlight = styled.div<HighlightStyleProps>`
  border-radius: 300px;
  background-color: ${ props => props.$color };
  width: 300px;
  height: 300px;
  box-shadow: 0 0 200px 200px ${ props => props.$color };
  position: absolute;
  z-index: 0;
  opacity: 0.5;
`;

// const expandStyle = css`
//   top: 0;
//   bottom: 0;
//   left: auto;
//   right: auto;
//   width: 1000px;
//   height: 100%;
// `;

// const transitionStyle = css`
//   top: ${ props => props.$ogSides[0] }px;
//   right: ${ props => props.$ogSides[1] }px;
//   bottom: ${ props => props.$ogSides[2] }px;
//   left: ${ props => props.$ogSides[3] }px;
//   width: 400px;
//   height: 200px;
//   transition: top, right, bottom, left, width, height;
//   transition-duration: 0.4s;

//   ${ props => props.$expand && expandStyle }
// `;

export default ContentModal;
