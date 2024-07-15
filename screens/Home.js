import { View, StyleSheet, Dimensions, ImageBackground, Text } from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

export default function Home({navigation}) {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const imageHeight = screenHeight * 0.75;
  const textContainerWidth = screenWidth * 0.45;

  return (
    <View style={styles.container}>
      <ImageBackground style={[styles.img, { height: imageHeight }]} source={require('../assets/img/fermier.jpg')}>
      </ImageBackground>
      
      <View style={[styles.linkContainer, { marginTop: -40 }]}>
        <View style={styles.btnContainer}>
          <CustomButton 
            margin={10}
            text="Créer un compte" 
            width='80%'
            height={50} 
            backgroundColor="#E0A55D"
            borderRadius={15}
            color='black'
            borderColor='black'
            borderWidth={2}
            fontSize={20}
            fontWeight='500'  
          />
          <CustomButton 
            margin={10}
            text="Je m'identifie" 
            width='80%'
            height={50} 
            backgroundColor="#FFE384"
            borderRadius={15}
            color='black'
            borderColor='black'
            borderWidth={2}
            fontSize={20}
            fontWeight='500'  
          />
          <CustomButton 
            margin={10}
            text="Je continue en tant qu'invité" 
            width='80%'
            height={50} 
            color='black'
            fontSize={20}
            fontWeight='500'
            onPress={() => navigation.navigate('HomeShopping')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  img: {
    width: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 15,
    justifyContent: 'center', // Center the text container vertically
    alignItems: 'center', // Center the text container horizontally
  },
  textContainer: {
    position:'absolute',
    top: 550,
    left : 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth : 3,
    borderColor : 'black',
    borderRadius : 15
  },
  text: {
    fontSize: 25,
    color: 'white', // Make the text visible on the image
    textAlign: 'justify', // Justify the text
    fontWeight:'700'
  },
  linkContainer: {
    backgroundColor: 'white',
    flex: 2,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderColor: 'black',
    borderWidth: 3,
    marginTop: -40, // Make the container overlap with the image
  },
  btnContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

