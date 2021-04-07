import React from 'react'
import {Alert, FlatList, View} from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import users from '../data/users'

export default props => {
    function confirmUserDelete(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete ' + user.id)
                }
            },
            {
                text: "Não"
            }
        ])
    }
   


    const getUser = ({item: user}) => {
        return (
            <ListItem key= {user.id} bottomDivider onPress={() => props.navigation.navigate('UserForm', user)} >

                <Avatar source= {{uri: user.avatar_url}}/>
                
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                
                <Button 
                type="clear" 
                icon={<Icon name="edit" 
                size={25}  color="orange"/>} 
                onPress={() => props.navigation.navigate('UserForm', user)}  
                />

                <Button 
                type="clear" 
                icon={<Icon name="delete" 
                size={25}  color="red"/>} 
                onPress={() => confirmUserDelete(user)}
                />
                
            </ListItem>  
        )
    }
    
    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUser}
            />
        </View>
    )
}

