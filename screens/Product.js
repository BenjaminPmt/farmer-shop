import { StyleSheet, Text, View, Image, Pressable , Dimensions} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';

export default function Product({route, navigation}) {

    const { image, name, backgroundColor, nbrItem } = route.params;
  return (
    <View style={{backgroundColor: backgroundColor, flex:1}}>
      <Pressable onPress={() => navigation.navigate("HomeShopping")} style={{position : 'absolute', top : 75, left : 25}}>
        <MaterialIcons name="keyboard-return" size={50} color="black" />
      </Pressable>
      <View style={styles.linkContainer}>
        <View style={styles.image}>
            <Image source={image} style={{width : 200, height:  200}}  resizeMode='contain' />
            <Text style={{textAlign:'center', fontSize: 40, fontWeight:'700', paddingTop : 10}}>{name}</Text>
        </View>
        <View style={styles.countContainer}>
        <CustomButton 
            text="-" 
            width={50}
            height={50} 
            backgroundColor="#FFF"
            borderRadius={15}
            color='black'
            borderColor='black'
            borderWidth={2}
            fontSize={40}
            fontWeight='500'  
          />
          <Text style={{fontSize : 35, fontWeight: '700', marginTop : 5,}}>0</Text>
          <CustomButton 
            text="+" 
            width={50}
            height={50} 
            backgroundColor="#FFF"
            borderRadius={15}
            color='black'
            borderColor='black'
            borderWidth={2}
            fontSize={40}
            fontWeight='500'  
          />
        </View>
        <View style={styles.buttonContainer}>
        <CustomButton 
            text="Ajouter au panier" 
            width={200}
            height={50} 
            backgroundColor={backgroundColor}
            borderRadius={15}
            color='black'
            borderColor='black'
            borderWidth={2}
            fontSize={20}
            fontWeight='500'  
          />
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
  },
  countContainer:{
    display : 'flex',
    flexDirection : 'row',
    marginTop: 250,
    width : '100%',
    height:  100,
    justifyContent : 'space-evenly'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    width: '100%',
    alignItems: 'center',
  },
})