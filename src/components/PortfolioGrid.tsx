import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export interface Project {
  id: number;
  title: string;
  category: string;
  description?: string;
  client?: string;
  year?: string;
  role?: string;
  collaborators?: string[];
  images: {
    src: string;
    type: 'image' | 'video';
    alt?: string;
  }[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4.5rem 3.5rem;
  padding: 6.5rem 4vw 4rem 4vw;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  background: none;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
    padding: 5rem 3vw 3rem 3vw;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 2.2rem 0;
    padding: 3.5rem 2vw 2rem 2vw;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

const MediaContainer = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  cursor: pointer;
  background: #fff;
  width: 100%;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);

  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #fff;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);

  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Alpha', 'NeueHaasGroteskText Pro', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', helvetica, arial, sans-serif;
  padding: 0 0.1rem;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-family: 'Alpha', 'NeueHaasGroteskText Pro', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', helvetica, arial, sans-serif;
  font-size: 2.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #111;
  line-height: 1.08;
`;

const ProjectCategory = styled.p`
  margin: 0;
  font-size: 1.05rem;
  color: #888;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  text-align: right;
  line-height: 1.1;
`;

// Project data organized by series
export const projects: Project[] = [
  {
    id: 1,
    title: "9mobile Set Design",
    category: "Set Design",
    description: "A dynamic set design project for 9mobile's brand campaign, featuring innovative spatial design and lighting solutions.",
    client: "9mobile",
    year: "2023",
    role: "Set Designer",
    collaborators: ["Belonwus"],
    images: [
      { src: "/images/9mobile Set Design with Belonwus_01.jpg", type: "image", alt: "9mobile set design main view" },
      { src: "/images/9mobile Set Design with Belonwus_02.jpg", type: "image", alt: "9mobile set design detail" },
      { src: "/images/9mobile Set Design with Belonwus_03.jpg", type: "image", alt: "9mobile set design perspective" },
      { src: "/images/9mobile Set Design with Belonwus_04.jpg", type: "image", alt: "9mobile set design lighting" },
      { src: "/images/9mobile Set Design with Belonwus_05.mp4", type: "video", alt: "9mobile set design in motion" },
    ]
  },
  {
    id: 2,
    title: "Rise HQ",
    category: "Interior Design",
    description: "Modern office interior design for Rise's headquarters, focusing on functionality and contemporary aesthetics.",
    client: "Rise",
    year: "2023",
    role: "Interior Designer",
    collaborators: ["DHK"],
    images: [
      { src: "/images/rise HQ with DHK_01.jpg", type: "image", alt: "Rise HQ main office space" },
      { src: "/images/rise HQ with DHK_02.jpg", type: "image", alt: "Rise HQ meeting area" },
      { src: "/images/rise HQ with DHK_03.jpg", type: "image", alt: "Rise HQ workspace detail" },
      { src: "/images/rise HQ with DHK_04.jpg", type: "image", alt: "Rise HQ common area" },
    ]
  },
  {
    id: 3,
    title: "Bamboo Identity",
    category: "Brand Identity",
    images: [
      { src: "/images/Bamboo Identity with Belonwus_01.mp4", type: "video" },
      { src: "/images/Bamboo Identity with Belonwus_02.mp4", type: "video" },
      { src: "/images/Bamboo Identity with Belonwus_03.mp4", type: "video" },
    ]
  },
  {
    id: 4,
    title: "OctaFx",
    category: "Installation & TVC",
    images: [
      { src: "/images/Octafx Installation with Belonwus.jpg", type: "image" },
      { src: "/images/OctaFx TVC with Belonwus.mp4", type: "video" },
      { src: "/images/Octa with Belonwus_01.jpg", type: "image" },
      { src: "/images/Octa with Belonwus_02.jpg.jpg", type: "image" },
    ]
  },
  {
    id: 5,
    title: "Minies Kitchen",
    category: "Brand Identity",
    images: [
      { src: "/images/Minies Kitchen Brand Identity_01.jpg", type: "image" },
      { src: "/images/Minies Kitchen Brand Identity_02.jpg", type: "image" },
      { src: "/images/Minies Kitchen Brand Identity_03.jpg", type: "image" },
      { src: "/images/Minies Kitchen Brand Identity_04.jpg", type: "image" },
      { src: "/images/Minies Kitchen Brand Identity_05.jpg", type: "image" },
      { src: "/images/Minies Kitchen Brand Identity_06.mp4", type: "video" },
    ]
  },
  {
    id: 6,
    title: "Bathroom Design",
    category: "Interior Design",
    images: [
      { src: "/images/Bathroom Design with DHK_01.jpg", type: "image" },
      { src: "/images/Bathroom Design with DHK_02.jpg", type: "image" },
      { src: "/images/Bathroom Design with DHK_03.jpg.jpg", type: "image" },
    ]
  },
  {
    id: 7,
    title: "Sporting Lagos Identity",
    category: "Brand Identity",
    images: [
      { src: "/images/Sporting Lagos Identity with Belonwus_01.mp4", type: "video" },
      { src: "/images/Sporting Lagos Identity with Belonwus_02.mp4", type: "video" },
      { src: "/images/Sporting Lagos Identity with Belonwus_03.mp4", type: "video" },
      { src: "/images/Sporting Lagos Identity with Belonwus_04.jpg", type: "image" },
    ]
  },
  {
    id: 8,
    title: "Spotify",
    category: "Design",
    images: [
      { src: "/images/Spotify with Belonwus_01.jpg", type: "image" },
      { src: "/images/Spotify with Belonwus_02.jpg", type: "image" },
      { src: "/images/Spotify with Belonwus_03.jpg", type: "image" },
    ]
  },
  {
    id: 9,
    title: "Pocket Set Design",
    category: "Set Design",
    images: [
      { src: "/images/Pocket Set Design with Belonwus_01.jpg", type: "image" },
      { src: "/images/Pocket Set Design with Belonwus_02.jpg", type: "image" },
      { src: "/images/Pocket Set Design with Belonwus_03.jpg", type: "image" },
      { src: "/images/Pocket Set Design with Belonwus_04.jpg", type: "image" },
      { src: "/images/Pocket Set Design with Belonwus_05.jpg", type: "image" },
      { src: "/images/Pocket Set Design with Belonwus_06.jpg", type: "image" },
    ]
  },
  {
    id: 10,
    title: "Babban Gona",
    category: "Brand Identity",
    images: [
      { src: "/images/Babban Gona Identity.jpg", type: "image" },
      { src: "/images/Babban Goan Identity.mp4", type: "video" },
    ]
  },
  {
    id: 11,
    title: "Maggi",
    category: "Design",
    images: [
      { src: "/images/Maggi with Belonwus_01.jpg", type: "image" },
      { src: "/images/Maggi with Belonwus_02.jpg.jpg", type: "image" },
    ]
  },
  {
    id: 12,
    title: "Fund$ Music Video",
    category: "Video",
    images: [
      { src: "/images/Fund$ Music Video with Belonwus.mp4", type: "video" },
    ]
  },
  {
    id: 13,
    title: "Joko Stool",
    category: "Product Design",
    images: [
      { src: "/images/Joko Stool with Afrominima.jpg", type: "image" },
    ]
  },
];

const PortfolioGrid = () => {
  const [hoveredStates, setHoveredStates] = useState<{ [key: number]: boolean }>({});
  const navigate = useNavigate();

  const handleMouseEnter = (projectId: number) => {
    setHoveredStates(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const handleMouseLeave = (projectId: number) => {
    setHoveredStates(prev => ({
      ...prev,
      [projectId]: false
    }));
  };

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <GridContainer>
      {projects.map((project) => {
        const isHovered = hoveredStates[project.id];
        // Always show first media by default, second media when hovered
        const currentMedia = isHovered && project.images.length > 1 
          ? project.images[1] 
          : project.images[0];
        
        return (
          <ProjectCard 
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            style={{ cursor: 'pointer' }}
          >
            <MediaContainer
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              {currentMedia?.type === 'video' ? (
                <ProjectVideo
                  src={currentMedia.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="auto"
                />
              ) : (
                <ProjectImage
                  src={currentMedia?.src}
                  alt={project.title}
                />
              )}
            </MediaContainer>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectCategory>{project.category}</ProjectCategory>
            </ProjectInfo>
          </ProjectCard>
        );
      })}
    </GridContainer>
  );
};

export default PortfolioGrid; 