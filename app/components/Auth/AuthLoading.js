import React from 'react';
import { 
    View, 
    ActivityIndicator,
    AsyncStorage 
} from 'react-native';


class AuthLoading extends React.Component {
    componentDidMount () {
        this._checkToken();
    }
    _checkToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(token ? 'App' : 'Auth')
    }
    render() {
        return (
            <View>
                <ActivityIndicator barStyle={"default"} />
            </View>
        )
    }
}

export default AuthLoading;