import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Admin } from '../../pages/Admin';

const RoutesComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Admin />} path="/admin" />
        <Route element={<Navigate to="/admin" replace />} path="/*" />
      </Routes>
    </>
  );
};

export default RoutesComponent;
