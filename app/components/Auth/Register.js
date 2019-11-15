import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import { styles } from './AuthFormsStyle';

class Register extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    }
    handleInput = (text, prop) => {
        this.setState({ [prop]: text })
    }
    render() {
        let { firstName, lastName, mobile, email, confirmPassword, password } = this.state;
        return (
            <View style={styles.loginContainer}>
                <Text style={styles.loginTitle}>Welcome to RSM</Text>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.loginTextField}
                        placeholder="First Name"
                        onChangeText={(e) => this.handleInput(e, 'firstName')}
                        value={firstName}
                    />
                    <TextInput
                        style={styles.loginTextField}
                        placeholder="Last Name"
                        onChangeText={(e) => this.handleInput(e, 'lastName')}
                        value={lastName}
                    />
                    <TextInput
                        style={styles.loginTextField}
                        placeholder="Email"
                        onChangeText={(e) => this.handleInput(e, 'email')}
                        value={email}
                    />
                    <TextInput
                        style={styles.loginTextField}
                        placeholder="Phone"
                        onChangeText={(e) => this.handleInput(e, 'mobile')}
                        value={mobile}
                    />
                    <TextInput
                        style={styles.loginTextField}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={(e) => this.handleInput(e, 'password')}
                        value={password}
                    />
                    <TextInput
                        style={styles.loginTextField}
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        onChangeText={(e) => this.handleInput(e, 'confirmPassword')}
                        value={confirmPassword}
                    />
                    <Button style={styles.loginButton} title="Register" />
                </View>
            </View>
        )
    }
}

export default Register;

