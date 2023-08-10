import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-violet">
      <div className="container mx-auto py-10">
        <h1 className="px-10 font-bold uppercase text-cyan-50">
          <Link to="/admin">Templify admi</Link>n
        </h1>
      </div>
    </div>
  );
};
export default Header;
