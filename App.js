import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import HomePage from './src/screens/Home.js';
import AboutUs from './src/screens/AboutUs';

import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="AboutUs" component={AboutUs}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ffdd80',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
  },
});