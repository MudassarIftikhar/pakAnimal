import React, {createContext, useContext, useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const initialState = {
  user: null,
  isLoading: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setUser = user => {
    dispatch({type: 'SET_USER', payload: user});
  };

  const signOut = () => {
    // Perform any additional cleanup or logout actions
    dispatch({type: 'SIGN_OUT'});
  };

  useEffect(() => {
    // Check AsyncStorage for previously authenticated user
    const checkAsyncStorage = async () => {
      try {
        const userJson = await AsyncStorage.getItem('user');
        if (userJson) {
          const user = JSON.parse(userJson);
          setUser(user);
        }
      } catch (error) {
        console.error('Error reading user from AsyncStorage:', error);
      }
    };

    checkAsyncStorage();
  }, []); // Only run on component mount

  useEffect(() => {
    // Save user to AsyncStorage whenever it changes
    const saveToAsyncStorage = async () => {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(state.user));
      } catch (error) {
        console.error('Error saving user to AsyncStorage:', error);
      }
    };

    saveToAsyncStorage();
  }, [state.user]); // Run whenever the user state changes

  return (
    <AuthContext.Provider
      value={{user: state.user, isLoading: state.isLoading, setUser, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};
