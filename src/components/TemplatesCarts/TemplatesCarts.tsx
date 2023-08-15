import React from 'react';

import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { Template } from '../Template';

interface TemplatesCartsProps {
  itemsPerPage: number;
  offset: number;
}

const TemplatesCarts: React.FC<TemplatesCartsProps> = ({ itemsPerPage, offset }) => {
  const previews = useAppSelector((state) => state.template.previews);

  const renderTemplate = () => {
    return Object.keys(previews)
      .slice(offset, offset + itemsPerPage)
      .map((key) => {
        const {
          id,
          title,
          feed: { videoURL },
        } = previews[key];

        return (
          <div className="rounded-lg border-2 p-5" key={key}>
            <Link to={`/admin/${id}`}>
              <Template id={id} title={title} videoURL={videoURL} />
            </Link>
          </div>
        );
      });
  };

  return <div className="grid grid-cols-5 gap-7">{renderTemplate()}</div>;
};

export default TemplatesCarts;
