import React from 'react'
import { HOME_ROUTE, ERROR_ROUTE } from './constants/routes';
import { Home,Error,PageNotFound } from './pages';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogPostProvider } from './contexts/blogPostContext';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<BlogPostProvider><Home /></BlogPostProvider>}/>
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
