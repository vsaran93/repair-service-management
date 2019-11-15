import React from 'react';
import { Icon } from 'react-native-elements';


const hamburgerMenu = (props) => {
    return (
        <Icon
            name="menu"
            color="#fff"
            onPress={() => props.navigation.toggleDrawer()}
        />
    )
}
export default hamburgerMenu;