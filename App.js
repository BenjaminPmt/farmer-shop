import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import HomeShopping from './screens/HomeShopping';
import Product from './screens/Product';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeShopping" component={HomeShopping} />
        <Stack.Screen name="Product" component={Product} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
