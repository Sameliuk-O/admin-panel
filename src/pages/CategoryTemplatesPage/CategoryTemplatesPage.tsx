import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import { Link, useLocation } from 'react-router-dom';

import { Template } from '../../components/Template';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ITemplate } from '../../interface/ITemplate';

const CategoryTemplatesPage = () => {
  const category = useAppSelector((state) => state.template.categories);
  const previews = useAppSelector((state) => state.template.previews);
  const [categoryTemplates, setCategoryTemplates] = useState<ITemplate[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const lastPathSegment = Number(pathParts[pathParts.length - 1]);
  const itemsPerPage = 50;

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(Object.keys(previews).length / itemsPerPage);

  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const templatesToAdd: ITemplate[] = [];
    category.forEach((el) => {
      if (el.categoryID === lastPathSegment) {
        el.previewIDs.forEach((value) => {
          const template = previews[value];
          if (template) {
            templatesToAdd.push(template);
          }
        });
      }
    });

    setCategoryTemplates(templatesToAdd);
  }, [category, lastPathSegment, previews]);

  return (
    <div className="container mx-auto pl-10 pt-10">
      <div className="grid grid-cols-5 gap-7">
        {categoryTemplates.slice(offset, offset + itemsPerPage).map((template) => (
          <div className="rounded-lg border-2 p-5" key={template.id}>
            <Link to={`/admin/${template.id}`}>
              <Template id={template.id} title={template.title} videoURL={template.videoURL} />
            </Link>
          </div>
        ))}
      </div>
      <div className="mx-auto my-10 max-w-xl">
        <ReactPaginate
          activeClassName="active-page"
          breakClassName="pr-5"
          breakLabel={'...'}
          className="pagination flex justify-evenly pr-5"
          containerClassName="pagination"
          marginPagesDisplayed={2}
          nextLabel={'→'}
          pageCount={pageCount}
          pageRangeDisplayed={20}
          previousLabel={'←'}
          onPageChange={handlePageClick}
        />
      </div>
    </div>
  );
};

export default CategoryTemplatesPage;
