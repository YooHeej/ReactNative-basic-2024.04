import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image} from 'react-native';
import Cat from './components/Cat';
import HelloWorld from './components/HelloWorld';
import State from './components/State';
import PizzaTranslator from './components/PizzaTranslator';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 32,
  height: 32,
};

export default function App() {
  return (
    <ScrollView>
      <Image source={logo} />
      <PizzaTranslator />
      <Image source={logo} />
      <State name= 'Tuna'/>
      <Image source={logo} />
      <Cat name='Maru' num='1'/>
      <Cat name='Tuna' num='2'/>
      <Image source={logo} />
      <HelloWorld />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
