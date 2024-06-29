import React from "react";
import {
    View,
    Text,
    Image
} from 'react-native';
import myImg from '../assets/myImg.png';

const CategoryListItem = (props) => {
    return (
        <View>
            <Text>New category!</Text>
            <Image source={myImg}></Image>
        </View>
    )
}

export default CategoryListItem;