import React, {useEffect} from 'react';
import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom';
import UsersList from "./components/UsersList/UsersList";
import UsersProfile from "./components/UsersProfile/UsersProfile";
import Error from "./components/ErrorPage/Error";
import {useDispatch} from "react-redux";
import fetchUserData from "./store/user-action";
import "./App.css"

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch]);

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
