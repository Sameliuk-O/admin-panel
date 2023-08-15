import { useEffect } from 'react';

import { Previews } from '../../components/Previews';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useGetAllTemplatesQuery } from '../../services/allTemplatesApi';
// import Data from '../../mock/feed.json';
import { setCategory, setPreviews } from '../../store/templatesSlice';
const Admin = () => {
  const { data } = useGetAllTemplatesQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCategory(data?.categories));
    dispatch(setPreviews(data?.previews));
  }, []);
  return (
    <div className="container mx-auto pl-10 pt-10">
      <Previews />
    </div>
  );
};
export default Admin;
