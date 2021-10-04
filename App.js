import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/header/Header"
import Content from "./src/content/Content"
import Footer from './src/footer/Footer';


export default function App() {
  return (
    <View >
      {/* <Text>Open up App.js to start working on your app!</Text */}
      {/* <StatusBar style="auto" /> */}

      <Header />
      <Content />
     
     
      <Footer />
    </View>
  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
