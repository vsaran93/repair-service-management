import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

class Services extends React.Component {
    render() {
        return (
            <View>
                <Card
                    title={"Washhing machine repair and services"}
                    titleStyle={{ textAlign: 'left' }}
                    containerStyle={{ elevation: 3 }}
                >
                    <Text style={{ fontSize: 17, fontStyle: 'bold', marginBottom: 5 }}>Advance Technologies</Text>
                    <Text style={{ marginBottom: 10, letterSpacing: 0.2 }}>we specialize in the service of the major
                    brand washing machines,Singer,Sisil.Damro,LG,Samsung,Toshiba,Panasonic,Whirlpool,Sanyo,National.
                    We have all brand of control bords for washing machines</Text>
                    <Text style={{ letterSpacing: 0.2 }}>Contact - 0772345234</Text>
                    <Button
                        icon={<Icon name='book' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5 }}
                        title='BOOK NOW' />
                </Card>
            </View>
        )
    }
}

export default Services;