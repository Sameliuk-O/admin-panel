import { Link, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';

const Category = () => {
  const category = useAppSelector((state) => state.template.categories);
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const lastPathSegment = Number(pathParts[pathParts.length - 1]);
  return (
    <ul className="border-r pr-10 pt-10">
      {category &&
        category.map((el) => (
          <li className="py-1.5" key={el.categoryID}>
            <Link
              className={`${
                lastPathSegment === el.categoryID ? 'text-button' : 'text-black'
              }  text-lg font-medium hover:text-sky-600`}
              to={`/admin/category/${el.name}/${el.categoryID}`}
            >
              {el.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Category;
