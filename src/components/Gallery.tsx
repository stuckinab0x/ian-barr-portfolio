import { FC, useState } from 'react';
import styled from 'styled-components';

interface GalleryProps {
  images: string[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState('');

  return (
    <GalleryMain>
      { images.map(x => <ImageThumb key={ x } onClick={ () => setCurrentImage(x) }><img key={ x } src={ x } /></ImageThumb>) }
      { currentImage && <ImageModal onClick={ () => setCurrentImage('') }><div><img src={ currentImage } /></div></ImageModal> }
    </GalleryMain>
  )
}

const GalleryMain = styled.div`
  display: flex;
  flex-direction: column;
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
    user-select: none;

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
 overflow-y: auto;
 z-index: 1000;
 background-color: rgba(0, 0, 0, 0.7);

 > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: max-content;
  box-sizing: border-box;
  padding: 20px;
  cursor: pointer;

  > img {
    width: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
 }
`;

export default Gallery;
