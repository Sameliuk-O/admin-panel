import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { ITemplate } from '../../interface/ITemplate';

const Template: React.FC<ITemplate> = ({ id, title, videoURL }) => {
  const { pathname } = useLocation();
  const [videoLoadError, setVideoLoadError] = useState(false);

  const handleVideoError = () => {
    setVideoLoadError(true);
  };

  return (
    <div className={`${pathname !== '/admin' ? 'flex justify-center py-10' : 'block'}`}>
      {videoLoadError ? (
        <div className="p-5 text-center">
          <p className="font-bold">Video not accessible</p>
        </div>
      ) : (
        <video
          className={`${pathname !== '/admin' ? 'h-[300px] w-[500px] pr-14' : ''} rounded`}
          height="300"
          width="500"
        >
          <source src={videoURL} type="video/mp4" onError={handleVideoError} />
        </video>
      )}
      <div className={`${pathname !== '/admin' ? 'px-5' : ''}`}>
        <div className="flex justify-center pt-5">
          <p className="pr-3 font-bold">ID: {id}</p>
          <p className="pl-3 font-bold">Title: {title}</p>
        </div>
      </div>
    </div>
  );
};

export default Template;
