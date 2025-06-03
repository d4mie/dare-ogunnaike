import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from './PortfolioGrid';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`;

const ProjectDetailContainer = styled.div`
  padding: 0;
  width: 100vw;
  height: 100vh;
  position: relative;
  cursor: pointer;
  background: white;
  overflow: hidden;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Hide scrollbar for all browsers */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
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
  gap: 3rem;
  z-index: 1000;
  mix-blend-mode: difference;
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

const MediaContainer = styled.div`
  height: 80vh;
  width: 80%;
  position: relative;
  overflow: hidden;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* Hide scrollbar for all browsers */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: #f8f8f8;
`;

const NextProjectButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 3rem;
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
  display: flex;
  align-items: center;
  gap: 0;
  transition: all 0.3s ease;
  
  &::after {
    content: '→';
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
    margin-left: 0;
  }
  
  &:hover {
    transform: translateX(-10px);
    
    &::after {
      opacity: 1;
      transform: translateX(10px);
      margin-left: 8px;
    }
  }
`;

const ExpandableDescription = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 2rem 3rem;
  transform: translateY(calc(100% - 0.5rem));
  transition: transform 0.4s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(0);
  }
`;

const DetailedDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 1rem;
`;

const DescriptionSection = styled.div`
  color: black;
`;

const SectionTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
  opacity: 0.7;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.4;
  margin: 0;
`;

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const currentProjectId = Number(projectId);
  const currentProjectIndex = projects.findIndex(p => p.id === currentProjectId);
  
  // Return to portfolio if project not found
  if (currentProjectIndex === -1) {
    navigate('/portfolio');
    return null;
  }

  const project = projects[currentProjectIndex];
  const nextProjectIndex = currentProjectIndex + 1 < projects.length ? currentProjectIndex + 1 : 0;
  const nextProject = projects[nextProjectIndex];

  // Reset image index if it's out of bounds
  if (currentImageIndex >= project.images.length) {
    setCurrentImageIndex(0);
  }

  const handleClick = (e: React.MouseEvent) => {
    // Get click position relative to viewport width
    const clickX = e.clientX;
    const viewportWidth = window.innerWidth;
    
    // If click is on the left 20% of the screen, go back
    if (clickX < viewportWidth * 0.2) {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    } 
    // If click is on the right 80% of the screen, go forward
    else {
      if (currentImageIndex < project.images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (nextProject) {
      navigate(`/project/${nextProject.id}`);
      setCurrentImageIndex(0); // Reset image index when changing projects
    }
  };

  const currentMedia = project.images[currentImageIndex];

  // Safety check for media
  if (!currentMedia) {
    setCurrentImageIndex(0);
    return null;
  }

  return (
    <>
      <GlobalStyle />
      <ProjectDetailContainer onClick={handleClick}>
        <BackButton onClick={(e) => {
          e.stopPropagation();
          navigate('/portfolio');
        }}>← Back</BackButton>
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectCategory>{project.category}</ProjectCategory>
        </ProjectHeader>
        <MediaContainer>
          {currentMedia.type === 'video' ? (
            <ProjectVideo
              src={currentMedia.src}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
          ) : (
            <ProjectImage
              src={currentMedia.src}
              alt={currentMedia.alt || `${project.title} - Image ${currentImageIndex + 1}`}
            />
          )}
        </MediaContainer>
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
        <NextProjectButton onClick={handleNextProject}>
          Next Project
        </NextProjectButton>
        <ExpandableDescription>
          <DetailedDescription>
            <DescriptionSection>
              <SectionTitle>About the Project</SectionTitle>
              <SectionText>
                {project.description || `${project.title} is a ${project.category.toLowerCase()} project that showcases innovative design solutions and creative execution. The project demonstrates attention to detail and a strong focus on user experience.`}
              </SectionText>
            </DescriptionSection>
            <DescriptionSection>
              <SectionTitle>Process & Approach</SectionTitle>
              <SectionText>
                The project began with extensive research and conceptualization, followed by iterative design phases. Working closely with {project.collaborators ? project.collaborators.join(' and ') : 'the team'}, we developed solutions that aligned with the client's vision while pushing creative boundaries.
              </SectionText>
            </DescriptionSection>
            <DescriptionSection>
              <SectionTitle>Outcome & Impact</SectionTitle>
              <SectionText>
                The final deliverables successfully met project objectives, creating a meaningful impact for {project.client || 'the client'}. The work demonstrates our commitment to excellence in {project.category.toLowerCase()}, setting new standards in the field.
              </SectionText>
            </DescriptionSection>
          </DetailedDescription>
        </ExpandableDescription>
      </ProjectDetailContainer>
    </>
  );
};

export default ProjectDetail; 