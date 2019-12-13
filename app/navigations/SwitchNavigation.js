import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import AuthLoading from '../components/Auth/AuthLoading';
import Logout from '../components/Auth/Logout';
import Profile from '../components/Customer/Profile';

const appStack = createDrawerNavigator({
    Home: Dashboard,
    Profile: Profile 
},
{
    contentComponent: (props) =>  (<Logout {...props} />),
    initialRouteName: 'Home',
    drawerWidth: 300,
    drawerPosition: 'left',
    contentOptions: {
        activeTintColor: '#e91e63',
    }
});

const authStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    }
});


export const switchStack = createSwitchNavigator({
    AuthLoading: AuthLoading,
    App: appStack,
    Auth: authStack
}, {
    initialRouteName: 'AuthLoading'
})
