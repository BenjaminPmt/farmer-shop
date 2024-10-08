import { View, Text, StyleSheet, Dimensions, Image, Pressable } from 'react-native';
import React from 'react';

export default function Header({headerName, navigation}) {
  const { height } = Dimensions.get('window');
  const HEADER_HEIGHT = height * 0.06;

  const styles = StyleSheet.create({
    container: {
      height : HEADER_HEIGHT,
      width : '100%',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center',
      borderRadius : 15,
      color : 'black',
      borderColor : 'black',
      borderWidth:  2,
      padding : 10,
    },
    image:{
      width : 35,
      height : 35,
    }
  });

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'700', fontSize : 15}} >{headerName}</Text>
      <Pressable onPress={() => navigation.navigate('Basket')}>
        <Image style={styles.image} source={require('../assets/img/panier2.png')} />
      </Pressable>
    </View>
  );
}

