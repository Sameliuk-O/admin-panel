import { Navigate, Route, Routes } from 'react-router-dom';

import { Category } from '../../components/Category';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Admin } from '../../pages/Admin';

const RoutesComponent = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className=" container mx-auto flex">
        <Category />
        <Routes>
          <Route element={<Admin />} path="/admin" />
          <Route element={<Navigate to="/admin" replace />} path="/*" />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default RoutesComponent;
