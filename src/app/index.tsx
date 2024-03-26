import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyles';
import { Link } from 'expo-router';


export default function App() {
  return (
    <View style={styles.container}>
       <Image style={styles.imagens}
        source={require('../../assets/Pokebola.jpg')}
      />
      <Text style = {styles.text}>Página sobre!</Text>
      <Link style = {styles.btn} href={"/sobre"}>Sobre</Link>
      <Link style = {styles.btn2} href={"/contatos"}>Contatos</Link>

      <StatusBar style="auto" />
    </View>
  );
}

