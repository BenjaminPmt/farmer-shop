import { StyleSheet, Text, View, Image, Pressable , Dimensions} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function Product({route, navigation}) {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const itemHeight = screenHeight * 0.50;
    const { image, name, backgroundColor, nbrItem } = route.params;
  return (
    <View style={{backgroundColor: backgroundColor, flex:1}}>
      <Pressable onPress={() => navigation.navigate("HomeShopping")} style={{position : 'absolute', top : 75, left : 25}}>
        <MaterialIcons name="keyboard-return" size={50} color="black" />
      </Pressable>
      <View style={styles.linkContainer}>
        <View style={styles.image}>
            <Image source={image} style={{width : 200, height:  200}}  resizeMode='contain' />
            <Text style={{textAlign:'center', fontSize: 45, fontWeight:'700'}}>{name}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  linkContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    borderColor: 'black',
    borderWidth: 5,
    marginTop : 250,
    alignItems : 'center',
  },
  image : {
    height : 200,
    width : 200,
    position :'absolute',
    top : -100
  }
})