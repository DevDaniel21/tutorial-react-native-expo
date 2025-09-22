import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useUserStore } from '../stores/useUserStore';

export default function CardUser({ id, name, email, avatar }) {
    
    const router = useRouter();
    const { users, setUsers } = useUserStore()

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3000/profile/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            console.log('Deletado com sucesso');
            const updatedUsers = users.filter((user) => user.id !== id); // cria um novo array sem o id que foi excluído
            setUsers(updatedUsers);
        } else {
            console.log('Erro ao deletar');
        }
    };

    const handleEdit = async () => {
        router.push({
            pathname: '/edituser',
            params: { id, name, email, avatar },
        });
    };

    return (
        <View style={styles.card_container}>
            <Image style={styles.card_image} source={avatar} />
            <View style={styles.card_info}>
                <Text style={styles.card_tittle}>{name}</Text>
                <Text style={styles.card_description}>{email}</Text>
            </View>
            <View>
                <Pressable onPress={handleEdit}>
                    <Feather name="edit" size={24} color="black" />
                </Pressable>
                <Pressable onPress={handleDelete}>
                    <FontAwesome name="trash" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        height: 140,
        width: '90%',
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
