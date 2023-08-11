import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';

const Category = () => {
  const category = useAppSelector((state) => state.template.categories);
  return (
    <ul className="pr-10">
      {category &&
        category.map((el) => (
          <li className="py-1.5" key={el.categoryID}>
            <Link className="hover:text-sky-600" to={`/admin/category/${el.name}`}>
              {el.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Category;
