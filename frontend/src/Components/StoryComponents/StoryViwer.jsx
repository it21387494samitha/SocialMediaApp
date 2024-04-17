import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const StoryViwerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const StoryImage = styled.img`
  max-height: 90vh;
  object-fit: contain;
`;

export const StoryViwer = ({ stories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setActiveIndex(activeIndex + 1);
    } else if (currentStoryIndex === stories.length - 1) {
      setCurrentStoryIndex(0);
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextStory();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentStoryIndex]);

  return (
    <div className="relative w-full">
      <StoryViwerContainer>
        <StoryImage src={stories?.[currentStoryIndex].image} />
        <div className="absolute top-0 flex w-full">
          {stories.map((item, index) => (
            <ProgressBar
              key={index}
              duration={2000}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </StoryViwerContainer>
    </div>
  );
};
