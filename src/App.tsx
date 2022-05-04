import React from 'react';
import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom';
import "./App.css"
import UsersList from "./components/UsersList/UsersList";
import UsersProfile from "./components/UsersProfile/UsersProfile";
import Error from "./components/ErrorPage/Error";

function App() {
  return (
      <BrowserRouter>
          <div className="wrapper">
              <Routes>
                  <Route path="/" element={<UsersList />}/>
                  <Route path="/profile" element={<UsersProfile />}/>
                  <Route path="/error" element={<Error />}/>
                  <Route path="/" element={<Navigate to="/" />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
