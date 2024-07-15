import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import CategoriesFilter from '../components/CategoriesFilter';
import { categories, fruits, legumes, autres, tous } from '../Constants';

export default function HomeShopping({navigation}) {
  const [selectedCategory, setSelectedCategory] = useState('01');

  const filteredItems = () => {
    if (selectedCategory === '01') {
      return tous; // You can add logic here to merge all items if needed
    } else if( selectedCategory === '02') {
      return legumes;
    } else if(selectedCategory === '03'){
      return fruits;
    } else if(selectedCategory === '04') {
      return autres;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header headerName={"Bonjour, Benjamin"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 35,height : 55 }}>
        <CategoriesFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </ScrollView>
      <ScrollView >
        <View style={styles.cardContainer}>
        {filteredItems().map((item) => (
          <Card key={item.id} image={item.image} name={item.item} backgroundColor={item.backgroundColor} navigation={navigation}/>
        ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal : 20,
  },
  cardContainer : {
    marginTop : 35,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    flexWrap : 'wrap',
    gap : 50,
  }

});
