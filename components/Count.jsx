import React, { useState } from "react";
import { View, Text, Button} from "react-native";

export default function Count() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    if (count <=4) {
      setCount(count +1);
    }
  };

  return (
    <View>
      <Text style={{fontSize: 50}}>{count}</Text>
      <Button title='증가' onPress={handleClick} />
    </View>
  );
}