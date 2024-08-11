import { StyleSheet, Text, View, Image , Pressable } from 'react-native'
import { useState } from 'react'

export default function Card({image, name, backgroundColor, navigation}) {

  const [nbrItem, setNbrItem] = useState(0)
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Product", {name, image, backgroundColor})}>
      <View style={styles.cardContainer}>
          <Image source={image} style={{height : 70, width : 70, }} />
          <Text style={{paddingTop:  20, fontSize : 18, fontWeight : '700'}}>{name}</Text>
          
      </View>
      <View style={[styles.addContainer, { backgroundColor: backgroundColor, justifyContent : 'center'}]}>
         <Text style={{color:'#FFFF', fontWeight:'700'}}>En Stock</Text>
      </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
 cardContainer : {
    width : 150,
    height : 150,
    borderBottomWidth : 2,
    borderColor : 'black',
    borderLeftWidth : 2,
    borderRightWidth :2,
    borderTopWidth : 2,
    borderTopLeftRadius : 15,
    borderTopRightRadius : 15,
    display : "flex",
    justifyContent : 'center',
    alignItems :'center'
 },
 addContainer : {
  height : 30,
  width : 150,
  borderBottomWidth : 2,
  borderColor : 'black',
  borderLeftWidth : 2,
  borderRightWidth :2,
  borderBottomLeftRadius : 15,
  borderBottomRightRadius : 15,
  flexDirection : 'row',
  alignItems : 'center',
  justifyContent : 'space-between',
  paddingLeft : 20,
  paddingRight : 20,
 },
 addProduct : {
  fontSize : 20,
  fontWeight : '700',
 }
})