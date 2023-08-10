import { Main } from './Main';
import { AdminPanel } from './AdminPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/Adconver/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </>
  );
};
