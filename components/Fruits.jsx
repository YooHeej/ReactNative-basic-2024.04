import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    textAlign: 'center'
  },
  item: {
    padding: 5,
    fontSize: 16,
    height: 40,
  },
});

export default function Fruits() {
  const [text, setText] = useState('');
  const [fruitList, setFruitList] = useState([]);

  const handleAddFruit = () => {
    if (text.trim() !== '') {
      setFruitList(prevList => [...prevList, { key: String(Math.random()), name: text.trim() }]);
      setText('');
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === 'Enter') {
      handleAddFruit();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="과일 이름을 입력하세요"
        onChangeText={setText}
        value={text}
        onKeyPress={handleKeyPress}
      />
      <FlatList
        data={fruitList}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}