import React, {Fragment} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { switchStack } from './app/navigations/SwitchNavigation';

const AppContainer = createAppContainer(switchStack);
const App = () => {
  return (
    <>
      <Fragment>
        <AppContainer />
      </Fragment>
    </>
  );
};

export default App;
