import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProtectedRoutes from "./src/Components/Navigation/ProtectedRoutes"
import UnprotectedRoutes from "./src/Components/Navigation/UnprotectedRoutes"

export default function App() {
  return (
    <UnprotectedRoutes/>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
