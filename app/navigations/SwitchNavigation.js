import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import AuthLoading from '../components/Auth/AuthLoading';

const appStack = createStackNavigator({
    Home: Dashboard
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
