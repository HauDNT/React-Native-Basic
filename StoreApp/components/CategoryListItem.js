import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import myImg from '../assets/myImg.png';

const CategoryListItem = (props) => {
    const { category } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
            <Image 
                style={styles.categoryImage}
                source={myImg}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        elevation: 5, // Thêm thuộc tính elevation cho Android
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700',
    },
    categoryImage: {
        width: 64,
        height: 64,
    }
});

export default CategoryListItem;