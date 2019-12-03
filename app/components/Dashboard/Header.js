import React from 'react';
import { Header } from 'react-native-elements'
import HamburgerMenu from './HamburgerMenu';
import Filter from './Filter';

const MainHeader = (props) => {
    return (
        <Header
            leftComponent={<HamburgerMenu navigation={props.navigation} />}
            rightComponent={<Filter setVisible={props.setVisible} />}
            centerComponent={{
                text: props.title,
                style: { color: "#fff", fontWeight: "bold" }
            }}
            statusBarProps={{ barStyle: 'light-content' }}
        />
    )
}

export default MainHeader;