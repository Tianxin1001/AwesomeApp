import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic here
    console.log('Register:', username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <View>
      <Text>Register</Text>
      <View>
        <Text>Username:</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
};

export default RegisterPage;
