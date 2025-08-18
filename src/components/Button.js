import { View, Text, StyleSheet} from 'react-native'

export default function Button() {
  return (
    <View style={styles.button_container}>
        <Text style={styles.button_text}>Ver mais</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    button_container: {
        width: 100,
        height: 30,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_text: {},
})