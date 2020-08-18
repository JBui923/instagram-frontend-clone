import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = props => {
  const { isLoggedIn } = props;
  if (!isLoggedIn) {
    return <Redirect to="/" />
  }
  return <Route {...props} />
};

// export const AuthRoute = ({ component: Component, path, exact }) => {
// 	return (
// 		<Route
// 			path={path}
// 			exact={exact}
// 			render={(props) => (currentUserId ? <Redirect to='/' /> : <Component {...props} />)}
// 		/>
// 	);
// };