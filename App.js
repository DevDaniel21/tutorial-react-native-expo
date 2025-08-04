import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  let tema = colorScheme === 'light' ? 'claro' : 'escuro';

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.p, themeTextStyle]}>Você está usando o tema {tema}</Text>
      <Text style={styles.tituloPrincipal}>Título Principal</Text>
      <Text style={styles.subTitulo}>Subtítulo!</Text>
      <View style={styles.box1}></View>
      <Text style={styles.saibaMais}>Saiba Mais</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  lightThemeText: {
    color: '#000',
  },
  darkThemeText: {
    color: '#fff',
  },
  tituloPrincipal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'green'
  },
  subTitulo: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'red'
  },
  saibaMais: {
    fontSize: '14px',
    color: 'grey',
  },
  box1: {
    width: '100%',
    height: 100,
    backgroundColor: 'slateblue',
  }
});
