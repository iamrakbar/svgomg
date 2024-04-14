import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SVGLoader from './SVGLoader';

export default function App() {
  return (
    <View style={styles.container}>
      <SVGLoader uri='https://upload.wikimedia.org/wikipedia/commons/1/11/Animal_Cell.svg' />
      <StatusBar style='auto' />
    </View>
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
