import { useState, useEffect } from "react";
import { View, Button, Alert } from 'react-native';

export default function MyButton({title, color}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newColor, setNewColor] = useState(color);

  useEffect(() => {
    Alert.alert("Rendered")
  }, [newTitle])

  function changeOnPress() {
    setNewTitle("Hello world");
    setNewColor("green");
  }

  return (
    <View>
      <Button 
        title={newTitle}
        color={newColor}
        onPress={changeOnPress}
      />
    </View>
  );
}