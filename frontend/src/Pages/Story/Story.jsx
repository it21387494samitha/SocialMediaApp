import React from "react";
import { StoryViwer } from "../../Components/StoryComponents/StoryViwer";

const Story = () => {
  const story = [
    {
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631111191712-1a0c3e3c7d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY1MzR8MHwxfGFsbHwxf",
    },
    {
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631111191712-1a0c3e3c7d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY1MzR8MHwxfGFsbHwxf",
    },
  ];
  return (
    <div>
      <StoryViwer stories={story} />
    </div>
  );
};

export default Story;
