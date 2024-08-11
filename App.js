
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Product from './screens/Product';
import Basket from './screens/Basket';
import HomeShopping from './screens/HomeShopping';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Définir Home comme l'écran initial */}
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Product" 
          component={Product} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="HomeShopping" 
          component={HomeShopping} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Basket" 
          component={Basket} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
