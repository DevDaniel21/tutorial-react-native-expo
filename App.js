import { View, Text, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>Logo</Text>
                <View style={styles.menu}></View>
            </View>

            <View style={styles.content}>
                <View style={styles.card_container}>
                    <View style={styles.card_image}></View>
                    <View style={styles.card_info}>
                        <Text style={styles.card_tittle}>Titulo card</Text>
                        <Text style={styles.card_description}>
                            Descricao bem legal
                        </Text>
                    </View>
                </View>
                <View style={styles.card_container}>
                    <View style={styles.card_image}></View>
                    <View style={styles.card_info}>
                        <Text style={styles.card_tittle}>Titulo card</Text>
                        <Text style={styles.card_description}>
                            Descricao bem legal
                        </Text>
                    </View>
                </View>
                <View style={styles.button_container}>
                    <Text style={styles.button_text}>Ver mais</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footer_text}>Daniel Custódio</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#295dacff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#2344b1ff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    logo: {
        color: 'white',
        fontSize: 20,
    },
    content: {
        flex: 7,
        width: '100%',
        backgroundColor: '#0f3274ff',
        paddingVertical: '3%',
        paddingHorizontal: '6%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    footer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#2344b1ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu: {
        width: 40,
        height: 40,
        backgroundColor: '#201f1fff',
    },
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
    button_container: {
        width: 100,
        height: 30,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_text: {},
    footer_text: {
        fontSize: 20,
        color: 'white',
    },
});
