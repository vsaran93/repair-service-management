import React from 'react';
import { SafeAreaView, View, TouchableHighlight, Text } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

class Logout extends React.Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <SafeAreaView>
                    <DrawerItems {...this.props} />
                    <TouchableHighlight style={{flexDirection: 'row' ,alignItems:'center', marginHorizontal: 16}}>
                        <Text>Logout</Text>
                    </TouchableHighlight>
                </SafeAreaView>
            </View>
        )
    }
}

export default Logout;