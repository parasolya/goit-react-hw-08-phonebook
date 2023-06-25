import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { NotFound } from '../components/Phonebook/NotFound';
import { Route, Routes } from 'react-router-dom';
import AppBar from './Navigation/AppBar';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import { refreshUser } from 'redux/Auth/operations';
import PrivateRoute from './Navigation/PrivateRoute';
import { RestrictedRoute } from './Navigation/RestrictedRoute';
import { selectIsRefreshing } from 'redux/Auth/selectors';

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute>
                  <Register />
                </RestrictedRoute>
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute>
                  <Login />
                </RestrictedRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    )
  );
}

export default App;
