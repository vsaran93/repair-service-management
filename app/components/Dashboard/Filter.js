import React from 'react';
import { Icon } from 'react-native-elements';


const filter = (props) => {
    return (
        <Icon
            name='filter'
            type='font-awesome'
            color='#fff'
            onPress={() => props.setVisible(true)}
        />
    )
}
export default filter;