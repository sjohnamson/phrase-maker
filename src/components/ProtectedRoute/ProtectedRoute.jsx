import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import NoProjectPage from '../NoProjectPage/NoProjectPage';
import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import BottomNavigationBar from '../BottomNavigationBar/BottomNavigationBar';


function ProtectedRoute({ component, children, ...props }) {
  const user = useSelector((store) => store.user);

  // Component may be passed in as a "component" prop,
  // or as a child component.
  const ProtectedComponent = component || (() => children);

  //return a Route component that gets added to our list of routes
  return (
    <Route
      // all props like 'exact' and 'path' that were passed in
      // are now passed along to the 'Route' Component
      {...props}
    >
      {user.id ? (
        user.current_project ?
          <ProtectedComponent />
          :
          <>
          <Nav />
          <BottomNavigationBar />
          <NoProjectPage />
          </>
      ) :
        <LoginPage />
      }
    </Route>

  );
}

export default ProtectedRoute;
