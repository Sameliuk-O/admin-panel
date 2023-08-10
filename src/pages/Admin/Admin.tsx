import { useEffect } from 'react';

import { Previews } from '../../components/Previews';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Data from '../../mock/feed.json';
import { setCategory, setPreviews } from '../../store/templatesSlice';
const Admin = () => {
  // const { data } = useGetAllTemplatesQuery();
  const category = useAppSelector((state) => state.template.categories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCategory(Data?.categories));
    console.log(Data?.previews);
    dispatch(setPreviews(Data?.previews));
  }, []);
  return (
    <div className="container mx-auto pl-10 pt-10">
      <ul>{category && category?.map((el) => <li key={el.categoryID}>{el.name}</li>)}</ul>
      <Previews />
    </div>
  );
};
export default Admin;
