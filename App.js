import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { PaperProvider } from 'react-native-paper';




export default function App() {
  return (
    <>
      <PaperProvider>
        <StackNavigator/>
      </PaperProvider>
    </>
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
