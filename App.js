import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { 
  useFonts, 
  Jost_300Light, 
  Jost_400Regular, 
  Jost_500Medium 
} from '@expo-google-fonts/jost';
import { 
  PlayfairDisplay_400Regular_Italic 
} from '@expo-google-fonts/playfair-display';

import { COLORS } from './constants/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialities from './components/Specialities';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    PlayfairDisplay_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <Hero />
        <Specialities />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.fondoCrema,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
