import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export default function Card({ title, desc, img }) {
    return (
        <View style={styles.card_container}>
            <Image style={styles.card_image} source={img} />
            <View style={styles.card_info}>
                <Text style={styles.card_tittle}>{title}</Text>
                <Text style={styles.card_description}>{desc}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        height: 140,
        width: '100%',
        backgroundColor: '#e67474ff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '3%',
        paddingVertical: '1%',
        marginTop: 10,
        borderRadius: 10,
        gap: 20,
    },
    card_image: {
        width: 80,
        height: 120,
        backgroundColor: '#000000',
        borderRadius: 6,
    },
    card_info: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
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
});
