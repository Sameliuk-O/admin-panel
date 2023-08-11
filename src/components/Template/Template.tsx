import React from 'react';

import { useLocation } from 'react-router-dom';

import { ITemplate } from '../../interface/ITemplate';

const Template: React.FC<ITemplate> = ({ id, title, videoURL }) => {
  const { pathname } = useLocation();
  return (
    <div className={`${pathname != '/admin' ? 'flex justify-center py-10' : 'block'}`}>
      <video className={`${pathname != '/admin' ? 'px-14' : ''} rounded`} height="300" width="500">
        <source src={videoURL} type="video/mp4" />
      </video>
      <div className={`${pathname != '/admin' ? 'px-5' : ''}`}>
        <div className="flex justify-center pt-5">
          <p className="pr-3 font-bold">ID: {id}</p>
          <p className="pl-3 font-bold">Title: {title}</p>
        </div>
        <p className="break-words pt-2"> Video URL: {videoURL}</p>
      </div>
    </div>
  );
};

export default Template;
