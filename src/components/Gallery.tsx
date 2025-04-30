import { FC, useState } from 'react';
import styled from 'styled-components';

interface GalleryProps {
  images: string[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState('');

  return (
    <GalleryMain>
      { images.map(x => <ImageThumb onClick={ () => setCurrentImage(x) }><img key={ x } src={ x } /></ImageThumb>) }
      { currentImage && <ImageModal onClick={ () => setCurrentImage('') }><img src={ currentImage } /></ImageModal> }
    </GalleryMain>
  )
}

const GalleryMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ImageThumb = styled.div`
  display: flex;
  overflow: hidden;
  margin: 4px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
  max-height: 400px;
  max-width: max-content;
  background-color: black;

  > img {
    height: 100%;
    opacity: 0.9;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  z-index: 1000;
  cursor: pointer;

  > img {
    height: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`;

export default Gallery;
