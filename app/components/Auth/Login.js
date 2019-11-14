import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';


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

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: "center",
    },
    loginTitle: {
        textAlign: 'center',
        fontSize: 18
    },
    loginForm: {
        padding: 10
    },
    loginTextField: {
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
    loginButton: {
        marginTop: 5
    }
})

export default Login;

