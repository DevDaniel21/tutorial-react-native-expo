import { View, Text, StyleSheet} from 'react-native'

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.footer_text}>Daniel Custódio</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#2344b1ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer_text: {
        fontSize: 20,
        color: 'white',
    },
})