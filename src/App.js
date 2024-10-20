import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomeContainer } from './container/homeContainer/homeContainer';
import { Dashboard } from './component/dashboard/dashboard';
import NotFound from './common/notFound/notFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/default" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
