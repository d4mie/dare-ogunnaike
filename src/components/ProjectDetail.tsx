import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects, Project } from './PortfolioGrid';

const ProjectDetailContainer = styled.div`
  padding: 0;
  max-width: 100%;
  margin: 0;
`;

const BackButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 3rem;
  position: fixed;
  top: 2rem;
  left: 3rem;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  z-index: 1000;
  mix-blend-mode: difference;
  color: white;
  z-index: 1000;
  mix-blend-mode: difference;
  color: white;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ProjectHeader = styled.div`
  position: fixed;
  top: 2rem;
  right: 3rem;
  display: flex;
  gap: 2rem;
  z-index: 1000;
  mix-blend-mode: difference;
`;

const HeaderLink = styled(Link)`
  color: white;
  font-size: var(--f-s);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: #61dafb;
    text-decoration: underline;
  }
`;

const MediaGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
`;

const CustomCursor = styled.div<{ x: number; y: number; visible: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 2000;
  transform: translate(-50%, -50%);
  will-change: transform;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.18s cubic-bezier(0.4,0,0.2,1);
`;

const ProjectDetailPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  cursor: none;
`;

const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  max-width: 900px;
  height: calc(100vh - 2.5rem - 7vh - 0.8rem);
  max-height: none;
  margin: 2.5rem auto 0.2rem auto;
  background: #f8f8f8;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  position: relative;
  overflow: hidden;
  cursor: none;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #f8f8f8;
  border-radius: 12px;
`;

const NextProjectButton = styled.button`
  background: none;
  border: none;
  color: #181818;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: color 0.2s;
  margin-left: auto;
  z-index: 1200;

  &:hover {
    /* No color change on hover */
  }

  .next-text {
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    margin-right: 0.5rem;
  }
  &:hover .next-text {
    transform: translateX(-12px);
  }
  .arrow {
    opacity: 0;
    transform: translateX(-8px);
    transition: opacity 0.3s, transform 0.3s cubic-bezier(0.4,0,0.2,1);
    font-size: 1.3em;
  }
  &:hover .arrow {
    opacity: 1;
    transform: translateX(0);
  }
`;

const InfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7vh;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  padding: 0 4rem;
  background: #fff;
  z-index: 1100;
  border-top: 1px solid #000;
  box-sizing: border-box;
`;

const InfoTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  color: #181818;
  display: flex;
  align-items: center;
`;

const InfoTech = styled.span`
  margin-left: 2.5vw;
  font-size: 1.05rem;
  color: #444;
  font-weight: 400;
`;

const Modal = styled.div`
  font-size: 1.08rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  transform: translateY(100%);
  transition: transform 0.5s ease;
  padding: 2rem 4rem 7vh 4rem;
  min-height: 10vh;
  line-height: 1.5;
  z-index: 1099;
  box-sizing: border-box;
  border-top: 1px solid #000;

  &:hover, &:focus-within {
    transform: translateY(0);
  }
`;

const InfoBarWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 1100;
`;

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false, side: 'right' });

  const project = projects.find((p: Project) => p.id === Number(projectId));

  if (!project) {
    return (
      <ProjectDetailContainer>
        <BackButton onClick={() => navigate('/portfolio')}>← Back</BackButton>
        <p>Project not found</p>
      </ProjectDetailContainer>
    );
  }

  const media = project.images[currentMediaIndex];

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  const handleNextProject = () => {
    navigate(`/project/${nextProject.id}`);
  };

  // Compose technical details string
  const techDetails = [project.category, project.year, project.role, project.client].filter(Boolean).join(', ');

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const side = x < window.innerWidth / 2 ? 'left' : 'right';
    setCursor({ x, y, visible: true, side });
  };

  const handleMouseLeave = () => {
    setCursor((c) => ({ ...c, visible: false }));
  };

  return (
    <ProjectDetailContainer>
      <BackButton onClick={() => navigate('/portfolio')}>← Back</BackButton>
      <ProjectHeader>
        <HeaderLink to="/portfolio">Index</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </ProjectHeader>
      <MediaGrid>
        <ProjectDetailPage
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={e => {
            const rect = (e.target as HTMLElement).getBoundingClientRect();
            const x = e.clientX - rect.left;
            if (x > rect.width / 2) {
              // Right side: previous image
              setCurrentMediaIndex(prevIndex => (prevIndex - 1 + project.images.length) % project.images.length);
            } else {
              // Left side: next image
              setCurrentMediaIndex(prevIndex => (prevIndex + 1) % project.images.length);
            }
          }}
        >
          <CustomCursor x={cursor.x} y={cursor.y} visible={cursor.visible} style={{ left: cursor.x, top: cursor.y }}>
            {cursor.side === 'left' ? (
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="24,5 8,16 24,27" fill="#000" />
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="8,5 24,16 8,27" fill="#000" />
              </svg>
            )}
          </CustomCursor>
          <MediaContainer>
            {media.type === 'video' ? (
              <ProjectVideo
                src={media.src}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              />
            ) : (
              <ProjectImage
                src={media.src}
                alt={media.alt || `${project.title} - Image ${currentMediaIndex + 1}`}
              />
            )}
          </MediaContainer>
        </ProjectDetailPage>
      </MediaGrid>
      <InfoBarWrapper>
        <InfoBar>
          <InfoTitle>
            {project.title}
            {techDetails && <InfoTech>{techDetails}</InfoTech>}
          </InfoTitle>
          <NextProjectButton onClick={handleNextProject}>
            <span className="next-text">Next project</span>
            <span className="arrow">→</span>
          </NextProjectButton>
        </InfoBar>
        <Modal tabIndex={0}>
          {project.description && <p>{project.description}</p>}
          {/* Add more details if needed */}
        </Modal>
      </InfoBarWrapper>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail; 