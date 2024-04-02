import React from "react";
import { View , Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {flex:1, alignItems: 'center', justifyContent: 'center',
  },
  image: {width: 190, height: 190, borderRadius: 90,
  },
  
});

export default function Picsum(){
  return (
    <View>
      <Image source={{
        uri: `https://picsum.photos/200/200`,
      }}
      style={styles.image}
      />
    </View>
  )
}