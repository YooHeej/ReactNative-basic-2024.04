import { StyleSheet, View  } from 'react-native';

import Picsum from './components/Picsum';
import Fruits from './components/Fruits';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    paddingLeft: 2,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Picsum />
      <Fruits />
    </View>  
  );
}