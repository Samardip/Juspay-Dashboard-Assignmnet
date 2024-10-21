import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from './common/notFound/notFound';
import React, { Suspense } from 'react';
import Dashboard from './component/dashboard/dashboard';
const LazyHomeContainer = React.lazy(() => import('./container/homeContainer/homeContainer'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback="Loading..."><LazyHomeContainer /></Suspense>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/default" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
