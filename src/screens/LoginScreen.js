import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        alert('Login successful');
        navigation.navigate('GreetingScreen', { username });
      } else {
        alert('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error retrieving stored credentials:', error);
    }
  };

  const handleRegister = async () => {
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);


      alert(`Registration successful: ${username} ${password}`);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error storing account credentials:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.text}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput style={styles.text}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = {
  text: {
    fontSize: 23,
  },
};

export default LoginScreen;
