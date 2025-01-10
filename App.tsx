/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, Platform, ScrollView} from 'react-native';
import PokemonCard from './components/PokemonCard';

function App() {
  const charmanderData ={
    name:"Charmandar",
    image: require("./assets/pikachu.jpg"),
    type:"Fire",
    hp:39,
    moves:["Scratch","Ember","Growl", "Leer"],
    weaknesses: ["water","Rock"],
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...charmanderData} />
      <PokemonCard {...charmanderData} />
      <PokemonCard {...charmanderData} />
      <PokemonCard {...charmanderData} />
      <PokemonCard    {...charmanderData} />      
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;
