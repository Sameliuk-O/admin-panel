import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

import { useAppSelector } from '../../hooks/useAppSelector';
import { TemplatesCarts } from '../TemplatesCarts';

const Previews: React.FC = () => {
  const previews = useAppSelector((state) => state.template.previews);
  const itemsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(Object.keys(previews).length / itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div>
      <TemplatesCarts itemsPerPage={itemsPerPage} offset={offset} />
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

export default Previews;
