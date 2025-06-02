import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { projects, Project } from './PortfolioGrid';

const ProjectDetailContainer = styled.div`
  padding: 4rem 3rem;
  max-width: 1800px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  margin-bottom: 2rem;
  font-family: inherit;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ProjectCategory = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const MediaContainer = styled.div`
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #f8f8f8;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #f8f8f8;
`;

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projects.find((p: Project) => p.id === Number(projectId));

  if (!project) {
    return (
      <ProjectDetailContainer>
        <BackButton onClick={() => navigate('/portfolio')}>← Back to Portfolio</BackButton>
        <p>Project not found</p>
      </ProjectDetailContainer>
    );
  }

  return (
    <ProjectDetailContainer>
      <BackButton onClick={() => navigate('/portfolio')}>← Back to Portfolio</BackButton>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectCategory>{project.category}</ProjectCategory>
      <MediaGrid>
        {project.images.map((media: Project['images'][0], index: number) => (
          <MediaContainer key={index}>
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
                alt={`${project.title} - Image ${index + 1}`}
              />
            )}
          </MediaContainer>
        ))}
      </MediaGrid>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail; 