import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.imagotipo}>
                <Image
                    style={styles.image}
                    source={require('../../assets/img/logo.svg')}
                />
                <Text style={styles.logotipo}>
                    Filmes <Text style={styles.span}>Pirata</Text>
                </Text>
            </View>
            <Ionicons name="menu" size={35} color="#FFF" />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    image: {
        width: 35,
        height: 35,
    },
    logotipo: {
        fontSize: 24,
        color: '#FFF',
    },
    span: {
        fontSize: 24,
        color: '#d74a3aff',
    },
    imagotipo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    menu: {
        width: 40,
        height: 40,
    },
});
