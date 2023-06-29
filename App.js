import Cesta from './src/telas/Cesta';
import { SafeAreaView, StatusBar, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import mock from './src/mocks/cesta';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [minhasFontes] = useFonts({
    "Montserrat": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if (!minhasFontes) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}