import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';

export default function Header({headerName}) {
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
      // position : 'absolute',
      // right : 35,
      // bottom : 10,
    }
  });

  return (
    <View style={styles.container}>
      <Text>{headerName}</Text>
      <Image style={styles.image} source={require('../assets/img/panier2.png')} />
    </View>
  );
}

