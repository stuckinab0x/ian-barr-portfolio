import { FC, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import Project from '../models/project';

interface BubbleProps {
  open: (clockWiseBubbleCoords: number[]) => void;
  mouseX: number;
  mouseY: number;
  project: Project;
}

const Bubble: FC<BubbleProps> = ({ open, mouseX, mouseY, project: { color, image, title } }) => {
  const bubbleContainer = useRef<HTMLDivElement | null>(null);

  const highLightCoords = useMemo(() => {
    const bubbleDOMRect = bubbleContainer?.current?.getBoundingClientRect();
    if (!bubbleDOMRect)
      return [];

    return [mouseY - bubbleDOMRect.top, mouseX - bubbleDOMRect.left];
  }, [bubbleContainer, mouseX, mouseY]);

  const handleClick = useCallback(() => {  
    const bubbleDOMRect = bubbleContainer?.current?.getBoundingClientRect();
    if (!bubbleDOMRect)
      return;
    
    open([bubbleDOMRect.top + 6, bubbleDOMRect.right + 20, bubbleDOMRect.bottom + 20, bubbleDOMRect.left + 6]);
  }, [open]);

  return (
    <BubbleMain ref={ bubbleContainer } $accent={ color } onClick={ handleClick }>
      <Center>
        { image && <img src={ image } alt='' /> }
        <h2>
          { title }
        </h2>
      </Center>
      <Highlight style={ { top: highLightCoords[0], left: highLightCoords[1] } } $color={ color } />
      <div />
    </BubbleMain>
  );
};

interface BubbleMainStyleProps {
  $accent: string;
}

const BubbleMain = styled.div<BubbleMainStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin: 10px;
  border-radius: 4px;
  height: 200px;
  width: 400px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  background-color: #3a3a3a;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4d4d4d;
  border-radius: 4px;
  z-index: 10;
  overflow: hidden;

  > h2 {
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    position: absolute;
    left: 20px;
    bottom: 10px;
    margin: 0;
    z-index: 10;
    font-size: 1.8rem;
    opacity: 0.4;
  }

  > img {
    opacity: 1;
    width: 100%;
  }

  > img, h2 {
    transition: opacity 0.4s;
  }

  &:hover {
    > img {
      opacity: 0.5;
    }

    > h2 {
      opacity: 1;
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

export default Bubble;
