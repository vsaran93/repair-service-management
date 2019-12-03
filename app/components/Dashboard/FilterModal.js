import React from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';


const FilterModal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isVisible}
            onRequestClose={() => props.setVisible(false)}>
            <View style={{ marginTop: 22 }}>
                <View>
                    <Text>Hello World!</Text>

                    <TouchableHighlight>
                        <Text>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

export default FilterModal;