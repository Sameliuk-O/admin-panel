// import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

// import { useAppSelector } from '../../hooks/useAppSelector';

const CategoriesPage = () => {
  const { pathname } = useLocation();
  // const category = useAppSelector((state) => state.template.categories);
  // const previews = useAppSelector((state) => state.template.previews);
  //
  // const [categoryPreviews, useCategoryPreviews] = useState([]);
  const pathSegments = pathname.split('/');
  const categoryUrl = pathSegments.filter(Boolean).pop();

  // useEffect(() => {
  //   category.map((el) => {
  //     if (el.name === categoryUrl) {
  //       if(el.previewIDs)
  //     }
  //   });
  // }, []);
  //
  // console.log(category);
  return (
    <div>
      <div>{categoryUrl}</div>
    </div>
  );
};

export default CategoriesPage;
