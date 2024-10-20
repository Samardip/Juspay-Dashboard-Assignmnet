import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomeContainer } from './container/homeContainer/homeContainer';
import { Dashboard } from './component/dashboard/dashboard';
import NotFound from './common/notFound/notFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/default" replace />} />
      <Route path="/default" element={<HomeContainer />}>
        <Route index element={<Dashboard />} /> 
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
