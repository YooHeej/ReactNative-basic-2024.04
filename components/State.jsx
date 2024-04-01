import React, { useState } from "react";
import {View, Text, Button, Image} from "react-native";

export default function State({name}) {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Image
        source={require('../assets/img/cats.jpg')}
        style={{height: 200, borderRadius: 20, padding: 10}}
      />
      <Text>
        I'm {name}, and I'm {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button 
        onPress={() => {setIsHungry(false);}}
        disabled={!isHungry}
        title={isHungry ? '먹을 것 내놔' : '감사'}
      />
    </View>
  );
};