import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/contatosStyles';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagens}
        source={require('../../assets/Anime.jpg')}
      />
      <Text  style = {styles.text} >Página Index</Text>
      <Link style = {styles.btn} href={"/"}>Inicio</Link>
      <StatusBar style="auto" />
    </View>
  );
}

