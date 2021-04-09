import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = {users}


export const UsersContext = createContext({})



const actions = {
    CREATE_USER(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state, // estado atual
            users: [...state.users, user],
        }
    },
    UPDATE_USER(state, action) {
        const updatedUser = action.payload 
        return {
            ...state,
            users: state.users.map(u => u.id === updatedUser.id ? updatedUser : u)
        }
    },
    DELETE_USER(state, action) {
        const user = action.payload
        return { 
            ...state, 
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProvider = props => {
    
        function reducer(state, action) {
            const fn = actions[action.type]
            return fn ? fn(state, action) : state
        }


    const [ state, dispatch ] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{state, dispatch}}>
            {props.children}
        </UsersContext.Provider>
    )
} 


