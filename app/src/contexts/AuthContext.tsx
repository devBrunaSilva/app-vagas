import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from "jwt-decode";
import usersService from '../services/usersService';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextData {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const TOKEN_KEY = '@vaga_certa_token_key';

  const signIn = async (email: string, password: string) => {
    try {
      const { token } = await usersService.login(email, password);
      const userDataDecoded = jwtDecode(token);

      setUser(userDataDecoded as User);
      setIsAuthenticated(true)

      try {
        await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(token));
      } catch (error) {
        console.error('Erro ao salvar token:', error);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const loadUserData = async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);

      if (token) {
        const userDataDecoded = jwtDecode(JSON.parse(token)) as User;
        setUser(userDataDecoded);
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    }
  };

  const signOut = async () => {
    setUser(null);
    try {
      await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(null));
    } catch (error) {
      console.error('Erro ao salvar token:', error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
