import { Link } from 'react-router-dom';

import { Template } from '../../components/Template';
import { useAppSelector } from '../../hooks/useAppSelector';

const SearchPage = () => {
  const { id, title, videoURL } = useAppSelector((state) => state.search);
  return (
    <div className="mt-5">
      <Link className="ml-14 hover:text-button" to={'-1'}>
        Go Back
      </Link>
      <Template id={id} title={title} videoURL={videoURL} />
    </div>
  );
};

export default SearchPage;
