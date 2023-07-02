import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/screens/HomePage';
import NewsDetail from './src/screens/NewsDetail';
import Setting from './src/screens/Setting';
import History from './src/screens/History';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import store from './src/screens/store';
import RegisterPage from './src/screens/RegisterPage';
import GreetingScreen from './src/screens/GreetingScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="GreetingScreen" component={GreetingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
