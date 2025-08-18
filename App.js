import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card'
import Button from './src/components/Button'
import Footer from './src/components/Footer'

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            
            <View style={styles.content}>
                <Card />
                <Card />
                <Card />
                <Button />
            </View>

            <Footer />
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
    content: {
        flex: 7,
        width: '100%',
        backgroundColor: '#0f3274ff',
        paddingVertical: '3%',
        paddingHorizontal: '6%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
