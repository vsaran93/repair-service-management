import React from 'react';
import {
    View, Text, Dimensions, Platform, StyleSheet,
    TouchableOpacity, Image, ScrollView
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

import Header from './Header';
import Services from './Services';
import FilterModal from './FilterModal';
import AddService from "../Customer/AddService";

import AntIcon from "react-native-vector-icons/AntDesign";

const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const uppercaseTitle = (title, even) => {
    if (title) {
        return (
            <Text
                style={[styles.title, even ? styles.titleEven : {}]}
                numberOfLines={2}
            >
                {title.toUpperCase()}
            </Text>
        )
    }

}
export default class Dashboard extends React.Component {
    state = {
        search: '',
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        isVisible: false,
        modalVisible: false,
    }
    updateSearch = search => {
        this.setState({ search })
    }
    _renderItem({ item, index }) {
        let even = index + 1 % 2 === 0;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => { }}
            >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    <Image
                        source={{ uri: item.illustration }}
                        style={styles.image}
                    />
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    {uppercaseTitle(item.title, even)}
                    <Text
                        style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                        numberOfLines={2}
                    >
                        {item.subtitle}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    setVisible = (val) => {
        this.setState({ isVisible: val });
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        let { search, isVisible, modalVisible } = this.state;
        return (
            <View>
                <ScrollView>
                    <Header title="Home" navigation={this.props.navigation} setVisible={this.setVisible} />
                    <SearchBar
                        placeholder="Type here.."
                        lightTheme
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                    <Services />
                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <Carousel
                            layout={'default'}
                            ref={(c) => { this._carousel = c; }}
                            data={ENTRIES1}
                            renderItem={this._renderItem}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                        />
                    </View>
                    <FilterModal isVisible={isVisible} setVisible={this.setVisible} />
                </ScrollView>
                <TouchableOpacity style={styles.floatingButton} onPress={() => this.setModalVisible(true)}>
                    <AntIcon name="plus" color="white" size={30} />
                </TouchableOpacity>
                <AddService visible={modalVisible} setModalVisible={this.setModalVisible}/>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: '#1a1917',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        backgroundColor: '#1a1917'
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: '#1a1917'
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 12,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: '#1a1917'
    },
    title: {
        color: '#1a1917',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 6,
        color: '#888888',
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    },
    modalBody: {
        padding: 10,
        margin: 5
    },
    floatingButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: '#428bca',
        borderRadius: 100,
    }
})
const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

const entryBorderRadius = 8;
