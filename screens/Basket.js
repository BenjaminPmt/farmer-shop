import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import BasketItem from '../components/BasketItem'
import CustomButton from '../components/CustomButton'
import { MaterialIcons } from '@expo/vector-icons';


export default function Basket({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate("HomeShopping")} style={{position : 'absolute', top : 75, left : 25}}>
        <MaterialIcons name="keyboard-return" size={35} color="black" />
      </Pressable>
      <View style={styles.headerContainer}>
        <CustomButton 
              text="Mon panier" 
              width='90%'
              height={50} 
              backgroundColor="#FADC64"
              borderRadius={15}
              color='black'
              borderColor='black'
              borderWidth={2}
              fontSize={20}
              fontWeight='500'  
            />
      </View>

      <View style={styles.basketContainer}>
        <BasketItem name="Aubergine" number={4} image={require("../assets/img/aubergine.png")} />
        <BasketItem name="Fromage" number={1} image={require("../assets/img/fromage.png")} />
        <BasketItem name="Tomate" number={6} image={require("../assets/img/tomate.png")} />
        <BasketItem name="Chou-fleur" number={3} image={require("../assets/img/chou-fleur.png")} />
        <BasketItem name="Cerise" number={9} image={require("../assets/img/cerises.png")} />
        <BasketItem name="Pomme" number={5} image={require("../assets/img/pomme.png")} />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton 
            text="Valider mon panier" 
            width='60%'
            height={50} 
            backgroundColor="#A3E260"
            borderRadius={15}
            color='black'
            borderColor='black'
            borderWidth={2}
            fontSize={20}
            fontWeight='500'  
          />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 70,
  },
  basketContainer: {
    flex: 1,
    
    display : 'flex',
    alignItems : 'center',
    paddingVertical : 20
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    width: '100%',
    alignItems: 'center',
  },
});
