import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import RouteComponent from "./components/RouteComponent/RouteComponent";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/Loading/Loading";

function App() {
  const { data, isPending, error } = useFetch(
    "https://6527cb90931d71583df165ba.mockapi.io/api/user/users"
  );
  return (
    <BrowserRouter>
      <>
        {data ? (
          <Routes>
            {data[0].routes.map((route) => (
              <Route
                path={route.path}
                key={route.name}
                element={
                  <Layout>
                    <RouteComponent
                      component={route.component}
                      props={{ userData: data[0] }}
                    />
                  </Layout>
                }
              />
            ))}
            <Route
              path="*"
              element={<Layout>{<p>Page not found!</p>}</Layout>}
            />
          </Routes>
        ) : isPending ? (
          <Loading />
        ) : (
          error && (
            <Layout>
              <p>Oops, something went wrong!</p>
            </Layout>
          )
        )}
      </>
    </BrowserRouter>
  );
}

export default App;
