
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './view/UserList';
import UserForm from './view/UserForm';
import { Button, Icon } from 'react-native-elements';




const Stack = createStackNavigator();

export default props => {
  return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}>
                <Stack.Screen
                        name="UserList"
                        component={UserList}
                options={({navigation}) => {
                    return {
                        title: 'Lista de Usuários',
                        headerRight: () => (

                            <Button
                            onPress={() => navigation.navigate("UserForm")}
                            type="clear"
                            icon={<Icon name="add" size={30} color="#000" />}
                            />
                        )
                    }
                }}
                />
                 <Stack.Screen
                name="UserForm"
                component={UserForm}
                options={{
                    title: 'Formulário de Usuários'
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
  );
};


const screenOptions = {
    headerStyle: {
        backgroundColor: '#36F'
        
    },
    headerTintColor: '#000',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}
