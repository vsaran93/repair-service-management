import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';

export default class Dashboard extends React.Component {
    render() {
        return (
            <View>
                <Header title="Home" navigation={this.props.navigation} />
                <Text>Welcome to Dashboard</Text>
            </View>
        )
    }
}