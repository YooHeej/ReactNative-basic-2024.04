import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ScrollView } from 'react-native';
import HelloWorld from './components/HelloWorld';
import Cat from './components/Cat';
import State from './components/State';
import PizzaTranslator from './components/PizzaTranslator';
import FlatListBasic from './components/FlatListBasic';
import SectionListBasic from './components/SectionListBasic';
import FetchExample from './components/FetchExample';
import Count from './components/Count';
import Counter from './components/Counter';
import Picsum from './components/Picsum';
import Fruits from './components/Fruits';
import Exam from './components/Exam';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',width: 32,height: 32,};

export default function App() {
  return (
    <ScrollView style={{paddingTop: 24, paddingLeft: 2}}>
       <Image source={logo} />
       <Exam />
       
       <Image source={logo} />

       <Picsum />
       <Fruits />
      
      <Image source={logo} />
      <Counter />
      <Image source={logo} />
      <Count />
      <Image source={logo} />
      <FetchExample />
      <Image source={logo} />
      <SectionListBasic />
      <Image source={logo} />
      <FlatListBasic />
      <Image source={logo} />
      <PizzaTranslator />
      <Image source={logo} />
      <State name= 'Tuna'/>
      <Image source={logo} />
      <Cat name='Maru' num='1' />
      <Cat name='Tuna' num='2' />
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
