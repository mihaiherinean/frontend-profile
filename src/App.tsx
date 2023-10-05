import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { userData } from './mock/data/userData';
import Layout from './components/Layout/Layout';
import RouteComponent from './components/RouteComponent/RouteComponent';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          {userData.routes.map(route => (
            <Route path={route.path} key={route.name} element={
              <Layout>
                  <RouteComponent 
                    component={route.component} 
                    props={{userData}}
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
