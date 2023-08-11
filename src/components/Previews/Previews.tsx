import React, { lazy, Suspense, useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ITemplate } from '../../interface/ITemplate';
import { setSearchTemplate } from '../../store/searchSlice';
const Template = lazy(() => import('../Template/Template'));

const Previews: React.FC = () => {
  const previews = useAppSelector((state) => state.template.previews);
  const dispatch = useAppDispatch();
  const itemsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = ({ id, title, videoURL }: ITemplate) => {
    dispatch(setSearchTemplate({ id: id, title: title, videoURL: videoURL }));
  };

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
      <div className="grid grid-cols-5 gap-7">
        {Object.keys(previews)
          .slice(offset, offset + itemsPerPage)
          .map((key) => {
            const {
              id,
              title,
              feed: { videoURL },
            } = previews[key];
            return (
              <div className="rounded-lg border-2 p-5" key={key}>
                <Link to={`/admin/${id}`} onClick={() => handleClick({ id, title, videoURL })}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Template id={id} title={title} videoURL={videoURL} />
                  </Suspense>
                </Link>
              </div>
            );
          })}
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

export default Previews;
