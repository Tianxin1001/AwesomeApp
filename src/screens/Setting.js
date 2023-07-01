import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the News App!</Text>
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
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
    },
    button: {
    borderRadius: 10,
    backgroundColor: '#007bff',
    marginVertical: 10,
    paddingHorizontal: 20
    }
};