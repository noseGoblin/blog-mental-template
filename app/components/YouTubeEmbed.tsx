'use client';

import React from 'react';
import YouTubePlayer from 'react-player/youtube';

interface YouTubeEmbedProps {
  url: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url }) => {
  return (
    <div className='relative w-full flex flex-1'>
      <YouTubePlayer
        className='w-full aspect-video'
        url={url}
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default YouTubeEmbed;
