import { useGetAllTemplatesQuery } from '../../services/allTemplatesApi';

const Admin = () => {
  const { data } = useGetAllTemplatesQuery();
  console.log(data);
  return (
    <div>
      <div className="container mx-auto">
        <div>admin</div>
      </div>
    </div>
  );
};
export default Admin;
