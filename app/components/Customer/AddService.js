import React from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';


const AddService = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.visible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={{ marginTop: 22 }}>
                <View>
                    <Text>Add Service</Text>
                    <TouchableHighlight
                        onPress={() => {
                            props.setModalVisible(!props.visible);
                        }}>
                        <Text>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
}

export default AddService;