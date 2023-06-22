import Cesta from './src/telas/Cesta';
import { StatusBar, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}