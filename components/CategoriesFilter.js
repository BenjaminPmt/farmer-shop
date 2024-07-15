import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { categories } from '../Constants';

export default function CategoriesFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[styles.categoryContainer, { backgroundColor: category.id === selectedCategory ? "#FF0B37" : 'white' }]}
          onPress={() => setSelectedCategory(category.id)}
        >
          <Text style={{ fontSize: 15, fontWeight: '700'}}>{category.category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({

    categoryContainer : {
        marginRight : 36,
        borderRadius : 15,
        paddingHorizontal : 16,
        paddingVertical : 12,
        borderWidth : 2,
        borderColor : 'black'
    }

})