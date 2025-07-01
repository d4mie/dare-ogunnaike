import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BureauContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  cursor: pointer;
`;

const BackgroundImage = styled.div<{ $imageUrl: string; $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  z-index: 1;
  background-color: #f2f2f2;
`;

const CenteredText = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-family: 'NeueHaasGroteskText Pro', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', helvetica, arial, sans-serif;
  mix-blend-mode: exclusion;
  color: white;
  pointer-events: none;
  z-index: 2;
  position: relative;
`;

// Using only JPG images to ensure format compatibility
const images = [
  '/images/Sporting%20Lagos%20Identity%20with%20Belonwus_04.jpg',
  '/images/rise%20HQ%20with%20DHK_01.jpg',
  '/images/Pocket%20Set%20Design%20with%20Belonwus_01.jpg',
  '/images/Spotify%20with%20Belonwus_01.jpg',
  '/images/Minies%20Kitchen%20Brand%20Identity_01.jpg',
  '/images/Babban%20Gona%20Identity.jpg',
  '/images/9mobile%20Set%20Design%20with%20Belonwus_01.jpg'
];

const Bureau = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    // Preload images and log their status
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      console.log(`Starting to load image: ${src}`);
      
      img.onload = () => {
        console.log(`Successfully loaded image: ${src}`);
      };
      
      img.onerror = (error) => {
        console.error(`Failed to load image: ${src}`, error);
      };
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const containerWidth = window.innerWidth;
    const mouseX = e.clientX;
    const section = Math.floor((mouseX / containerWidth) * images.length);
    setCurrentImageIndex(section);
    console.log(`Mouse moved to section ${section}, showing image: ${images[section]}`);
  };

  const handleClick = () => {
    navigate('/portfolio');
  };

  return (
    <BureauContainer 
      onMouseMove={handleMouseMove} 
      onMouseLeave={() => setCurrentImageIndex(-1)}
      onClick={handleClick}
    >
      {images.map((image, index) => (
        <BackgroundImage
          key={image}
          $imageUrl={image}
          $visible={currentImageIndex === index}
        />
      ))}
      <CenteredText>Dare.Ogunnaike</CenteredText>
    </BureauContainer>
  );
};

export default Bureau;