import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

import { styles } from './AuthFormsStyle';

class Login extends React.Component {
    state = {
        userName: '',
        password: ''
    }
    handleInput = (text, prop) => {
        this.setState({[prop]: text})
    }
    render() {
        let { userName, password } = this.state;
        return (
            <View style={styles.loginContainer}>
                <Text style={styles.loginTitle}>Welcome to RSM</Text>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.loginTextField}
                        placeholder="userName"
                        onChangeText={(e) => this.handleInput(e, 'userName')}
                        value={userName}
                    />
                    <TextInput
                        style={styles.loginTextField}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={(e) => this.handleInput(e, 'password')}
                        value={password}
                    />
                    <Button style={styles.loginButton} title="Login" />
                </View>
            </View>
        )
    }
}


export default Login;

