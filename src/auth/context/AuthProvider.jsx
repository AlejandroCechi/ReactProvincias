import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/types'

const initialState= {
    logged:false
}

const init =()=>{
    const user= JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user:user
    }
}

export const AuthProvider = ({children}) => {
  
const [authState, dispatch] = useReducer(AuthReducer,initialState, init)
const login =(name='') =>{

    const action= {
        type:types.login,
        payload: { id: 'ABC', name}
    }

    dispatch(action);
    localStorage.setItem('user', JSON.stringify(action.payload));

}

const logout =() =>{

    const action= {
        type:types.logout
    }

    dispatch(action);
    localStorage.removeItem('user');

}
  return (
          <AuthContext.Provider value={{...authState, login, logout}}>
            {children}
         </AuthContext.Provider>
      )
}
