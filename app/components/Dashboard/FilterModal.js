import React from 'react';
import { Modal, View, Text, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './Dashboard';

const FilterModal = (props) => {
    const [language, setLanguage] = React.useState('');
    const [location, setLocation] = React.useState('')
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isVisible}
            onRequestClose={() => props.setVisible(false)}>
            <View style={{ marginTop: 22 }}>
                <View style={styles.modalBody}>
                    <Text style={{fontSize: 18}}>Find your service</Text>
                    <Picker
                        selectedValue={language}
                        style={{ height: 50, width: '100%', borderColor: 'gray', borderWidth: 1 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setLanguage(itemValue)
                        }>
                        <Picker.Item label="Service Type" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <Picker
                        selectedValue={location}
                        style={{ height: 50, width: '100%', borderColor: 'gray', borderWidth: 1 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setLocation(itemValue)
                        }>
                        <Picker.Item label="Select Location" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <View style={{flexDirection: 'row', flex: 2}}>
                    <View style={{flexDirection: 'column', flex: 1, height: 50, padding: 5}}>
                        <Button title={"Ok"}/>
                    </View>
                    <View style={{flexDirection: 'column', flex:1, height: 50, padding: 5}}>
                        <Button title="Cancel" onPress={() => props.setVisible(false)} />
                    </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default FilterModal;