import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Data from '../../mock/feed.json';
import { setCategory } from '../../store/templatesSlice';
const Admin = () => {
  // const { data } = useGetAllTemplatesQuery();
  const category = useAppSelector((state) => state.template);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCategory(Data?.categories));
  }, []);
  console.log('category', category);
  return (
    <div>
      <ul>
        {category.map((el) => (
          <li key={el.categoryID}>
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Admin;
