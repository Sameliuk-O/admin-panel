import { Navigate, Route, Routes } from 'react-router-dom';

import { Admin } from '../../pages/Admin';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<Admin />} path="/admin" />
      <Route element={<Navigate to="/admin" replace />} path="/*" />
    </Routes>
  );
};

export default RoutesComponent;
