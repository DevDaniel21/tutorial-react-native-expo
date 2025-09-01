import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Link href={'/contact'}>
                    <Text>Contato</Text>
                </Link>
                <Link href={'/about'}>
                    <Text>About us</Text>
                </Link>
            </View>

            <View style={styles.content}>
                <Card
                    title="Dr. House"
                    desc="Uma série de médico, acompanhando a história de Dr.House."
                    img="https://upload.wikimedia.org/wikipedia/en/e/ee/House_S8_DVD.jpg"
                />
                <Card
                    title="The Last Of Us"
                    desc="Uma série que se passa num mundo pós-apocalíptico."
                    img="https://images.justwatch.com/poster/301981224/s332/temporada-1"
                />
                <Card
                    title="A Maldição da Residência Hill"
                    desc="Uma série de suspense que mostra uma família que sofre de uma maldição."
                    img="https://upload.wikimedia.org/wikipedia/pt/c/cd/The_Haunting_of_Hill_House_poster.jpg"
                />
                <Button />
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 7,
        width: '100%',
        backgroundColor: '#d74a3aff',
        paddingVertical: '3%',
        paddingHorizontal: '6%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
