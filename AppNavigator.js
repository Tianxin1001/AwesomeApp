import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/screens/HomePage';
import NewsDetail from './src/screens/NewsDetail';
import Setting from './src/screens/Setting';
import History from './src/screens/History';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
