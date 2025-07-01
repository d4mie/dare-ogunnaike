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
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: #61dafb;
    text-decoration: underline;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  color: white;
`;

const ProjectCategory = styled.p`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
  color: white;
`;

const ProjectInfo = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 3rem;
  right: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  z-index: 1000;
  mix-blend-mode: difference;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${ProjectDetailContainer}:hover & {
    opacity: 1;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoLabel = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  opacity: 0.7;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
  line-height: 1.4;
`;

const MediaGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
`;

const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  max-width: 900px;
  height: 55vh;
  max-height: 520px;
  margin: 7rem auto 2rem auto;
  background: #f8f8f8;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  position: relative;
  overflow: hidden;
  cursor: pointer;
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
  position: fixed;
  right: 3rem;
  bottom: 8.5vh;
  background: none;
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 1200;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: color 0.2s;
  mix-blend-mode: difference;

  &:hover {
    color: #61dafb;
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

  const project = projects.find((p: Project) => p.id === Number(projectId));

  if (!project) {
    return (
      <ProjectDetailContainer>
        <BackButton onClick={() => navigate('/portfolio')}>← Back</BackButton>
        <p>Project not found</p>
      </ProjectDetailContainer>
    );
  }

  const handleMediaClick = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const media = project.images[currentMediaIndex];

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  const handleNextProject = () => {
    navigate(`/project/${nextProject.id}`);
  };

  // Compose technical details string
  const techDetails = [project.category, project.year, project.role, project.client].filter(Boolean).join(', ');

  return (
    <ProjectDetailContainer>
      <BackButton onClick={() => navigate('/portfolio')}>← Back</BackButton>
      <ProjectHeader>
        <HeaderLink to="/portfolio">Index</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </ProjectHeader>
      <MediaGrid>
        <MediaContainer onClick={handleMediaClick} style={{ cursor: 'pointer' }}>
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
      </MediaGrid>
      <ProjectInfo>
        {project.description && (
          <InfoSection>
            <InfoLabel>About</InfoLabel>
            <InfoText>{project.description}</InfoText>
          </InfoSection>
        )}
        {project.client && (
          <InfoSection>
            <InfoLabel>Client</InfoLabel>
            <InfoText>{project.client}</InfoText>
          </InfoSection>
        )}
        {project.role && (
          <InfoSection>
            <InfoLabel>Role</InfoLabel>
            <InfoText>{project.role}</InfoText>
          </InfoSection>
        )}
        {project.collaborators && project.collaborators.length > 0 && (
          <InfoSection>
            <InfoLabel>Collaborators</InfoLabel>
            <InfoText>{project.collaborators.join(', ')}</InfoText>
          </InfoSection>
        )}
      </ProjectInfo>
      <InfoBarWrapper>
        <InfoBar>
          <InfoTitle>
            {project.title}
            {techDetails && <InfoTech>{techDetails}</InfoTech>}
          </InfoTitle>
        </InfoBar>
        <Modal tabIndex={0}>
          {project.description && <p>{project.description}</p>}
          {/* Add more details if needed */}
        </Modal>
      </InfoBarWrapper>
      <NextProjectButton onClick={handleNextProject}>
        <span className="next-text">Next project</span>
        <span className="arrow">→</span>
      </NextProjectButton>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail; 