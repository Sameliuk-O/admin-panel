import { Link } from 'react-router-dom';

import { Template } from '../../components/Template';
import { useAppSelector } from '../../hooks/useAppSelector';

const TemplatePage = () => {
  const { id, title, videoURL } = useAppSelector((state) => state.search);
  // console.log(searchTemplate);
  return (
    <div className="mt-5">
      <Link className="ml-14 hover:text-button" to={'-1'}>
        Go Back
      </Link>
      <div>
        <div key={id}>
          <Template id={id} title={title} videoURL={videoURL} />
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
