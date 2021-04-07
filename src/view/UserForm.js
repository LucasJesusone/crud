import React, { useState } from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native'

export default ({route, navigation}) => {
   const [user, setUser] = useState(route.params ? route.params: {})
    return (
        <View style={style.container}>
            <Text>Name</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})} // função para atualizar o nome dentro do usuário
                placeholder="Informe o Nome"
                value={user.name}
                
            />

            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})} // função para atualizar o nome dentro do usuário
                placeholder="Informe o Email"
                value={user.email}
                
            />

            <Button 
                title="Salvar"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
        container: {
            padding: 20,
        },

    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 10,

    }
}) 