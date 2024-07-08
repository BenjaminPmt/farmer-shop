import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react'

export default function CustomButton({ text, width, height, backgroundColor, onPress, borderRadius, color, fontSize, fontWeight, borderWidth, borderColor, margin }) {
  return (
    <Pressable 
    style={[styles.button, { width, height, backgroundColor, borderRadius, borderWidth, borderColor, margin}]} 
    onPress={onPress}
  >
    <Text style={[{color, fontSize, fontWeight}]}>{text}</Text>
  </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });