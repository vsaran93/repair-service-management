import React, {Fragment} from 'react';
import {
  View,
  Text,
} from 'react-native';
import Login from './app/components/Auth/Login';
import Register from './app/components/Auth/Register';

const App = () => {
  return (
    <>
      <Fragment>
        <Register />
      </Fragment>
    </>
  );
};

export default App;
