import { Navigate, Route, Routes } from 'react-router-dom';

import { Category } from '../../components/Category';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Admin } from '../../pages/Admin';
import { SearchPage } from '../../pages/TemplatePage';

const RoutesComponent = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <Header />
        <div className=" container mx-auto flex">
          <Category />
          <Routes>
            <Route element={<Admin />} path="/admin" />
            <Route element={<SearchPage />} path="/admin/:id" />
            <Route element={<Navigate to="/admin" replace />} path="/*" />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoutesComponent;
