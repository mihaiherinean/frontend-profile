import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { userRoutes } from './mock/data/routes';
import { userData } from './mock/data/user';
import Layout from './components/Layout/Layout';
import RouteComponent from './components/RouteComponent/RouteComponent';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          {userRoutes.map(route => (
            <Route path={route.path} element={
              <Layout>
                  <RouteComponent 
                    component={route.component} 
                    props={{...userData}}
                  />
              </Layout>}
            />
          ))}
          <Route path="*" element={
            <Layout>
              <p>Page not found!!!</p>
            </Layout>}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
