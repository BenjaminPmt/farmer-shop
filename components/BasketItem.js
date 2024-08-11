import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function BasketItem({name, number, image}) {
  return (
    <View style={styles.itemContainer}>
          <Text style={{fontSize : 20, fontWeight :"700"}}>{name}</Text>
          <View style={{display:'flex', alignItems :'center', flexDirection : 'row'}}>
            <Image source={image} style={{width : 25, height : 25, marginRight : 5}} />
          < Text style={{fontSize : 20, fontWeight :"700"}}>x {number}</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer:{
        width : '80%',
        height : 50,
        borderBottomWidth : 2,
        borderColor : 'black',
        borderWidth : 2,
        borderRadius  :15,
        display : 'flex',
        padding : 10,
        flexDirection :'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 20,
      }
})