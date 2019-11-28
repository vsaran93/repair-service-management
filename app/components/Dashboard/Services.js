import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Services extends React.Component {
    render() {
        return (
            <View>
                <Card
                    title={"Washhing machine repair and services"}
                    titleStyle={{ textAlign: 'left' }}
                >
                    <Text style={{ fontSize: 17, fontStyle: 'bold' }}>Advance Technologies</Text>
                    <Text style={{ marginBottom: 10 }}>we specialize in the service of the major
                    brand washing machines,Singer,Sisil.Damro,LG,Samsung,Toshiba,Panasonic,Whirlpool,Sanyo,National.
                    We have all brand of control bords for washing machines</Text>
                    <Text>Contact - 0772345234</Text>
                </Card>
            </View>
        )
    }
}

export default Services;