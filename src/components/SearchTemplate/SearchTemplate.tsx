import React, { useState } from 'react';

import { ITemplate } from '../../interface/ITemplate';

const SearchTemplate: React.FC<ITemplate> = ({ id, title, videoURL }) => {
  const [videoLoadError, setVideoLoadError] = useState(false);

  const handleVideoError = () => {
    setVideoLoadError(true);
  };
  return (
    <div className="flex justify-between py-5 ">
      {videoLoadError ? (
        <div className="rounded px-2 pt-2.5 text-center">
          <p className="font-bold">Video not accessible</p>
        </div>
      ) : (
        <video className="rounded px-5" height="100" width="100">
          <source src={videoURL} type="video/mp4" onError={handleVideoError} />
        </video>
      )}
      <div className="px-5">
        <div className="flex pt-2.5">
          <p className="pr-3 font-bold">ID: {id}</p>
          <p className="pl-3 font-bold">Title: {title}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchTemplate;
