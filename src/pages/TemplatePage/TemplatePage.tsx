import React, { lazy, Suspense } from 'react';

import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';

const Template = lazy(() => import('../../components/Template/Template'));

const TemplatePage = () => {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const lastPathSegment = pathParts[pathParts.length - 1];

  const previews = useAppSelector((state) => state.template.previews);
  const currentTemplate = previews[lastPathSegment];

  return (
    <div className="mt-5">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <div key={currentTemplate.id}>
            <Template
              id={currentTemplate.id}
              title={currentTemplate.title}
              videoURL={currentTemplate.videoURL}
            />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default TemplatePage;
