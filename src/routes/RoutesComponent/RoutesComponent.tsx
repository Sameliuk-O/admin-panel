import { Navigate, Route, Routes } from 'react-router-dom';

import { Category } from '../../components/Category';
import { Header } from '../../components/Header';
import { Admin } from '../../pages/Admin';

const RoutesComponent = () => {
  return (
    <>
      <Header />
      <div className=" container mx-auto flex">
        <Category />
        <Routes>
          <Route element={<Admin />} path="/admin" />
          <Route element={<Navigate to="/admin" replace />} path="/*" />
        </Routes>
      </div>
    </>
  );
};

export default RoutesComponent;
