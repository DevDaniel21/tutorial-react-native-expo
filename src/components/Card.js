import { View, Text, StyleSheet} from 'react-native'

export default function Card() {
  return (
    <View style={styles.card_container}>
        <View style={styles.card_image}></View>
        <View style={styles.card_info}>
            <Text style={styles.card_tittle}>Titulo card</Text>
            <Text style={styles.card_description}>
                Descricao bem legal
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card_container: {
        height: 100,
        width: '100%',
        backgroundColor: '#297cacff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '3%',
        paddingVertical: '1%',
        marginTop: 10,
        borderRadius: 10,
    },
    card_image: {
        width: 80,
        height: 80,
        backgroundColor: '#000000',
        borderRadius: 6,
    },
    card_info: {
        flex: 1,
        height: '100%',
        paddingHorizontal: '3%',
        paddingVertical: '3%',
    },
    card_tittle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
    },
    card_description: {
        fontSize: 15,
        color: 'whitesmoke',
    },
})