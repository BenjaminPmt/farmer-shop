import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { categories } from '../Constants';

export default function CategoriesFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <View style={{flexDirection : 'row'}} >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[styles.categoryContainer, { backgroundColor: category.id === selectedCategory ? "#FF0B37" : 'white' }]}
          onPress={() => setSelectedCategory(category.id)}
        >
          <Text style={{ fontSize: 7, fontWeight: '700', marginBottom : 5}}>{category.category}</Text>
          <Image source={category.image} style={{width : 35, height : 35}} /> 
        </TouchableOpacity>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({

    categoryContainer : {
        width : 70,
        height : 70,
        marginRight : 36,
        borderRadius : 15,
        paddingHorizontal : 16,
        paddingVertical : 12,
        borderWidth : 2,
        borderColor : 'black',
        display :"flex",
        justifyContent : 'center',
        alignItems : 'center',
    }

})