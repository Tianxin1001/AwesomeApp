import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

const GreetingScreen = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();

  const handleLogout = () => {
    // Perform any necessary logout actions here
    // For example, clear user data, reset states, etc.
    // Then navigate back to the login screen
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Welcome, {username}!</Text>
      <Button 
        buttonStyle={styles.button}
        title="Logout" 
        onPress={handleLogout} />
      <Button
        buttonStyle={styles.button}
        title="Go to News"
        onPress={() => navigation.navigate('NewsDetail')}
      />
      <Button
        buttonStyle={styles.button}
        title="Setting"
        onPress={() => navigation.navigate('Setting')}
      />
      <Button
        buttonStyle={styles.button}
        title="Reading history"
        onPress={() => navigation.navigate('History')}
      />
    </View>
  );
};

const styles = {
  button: {
    borderRadius: 10,
    backgroundColor: '#007bff',
    marginVertical: 10,
    paddingHorizontal: 20
  }
};

export default GreetingScreen;
