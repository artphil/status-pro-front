import { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextType | undefined >(undefined);

interface AuthContextProvider {
  children: ReactNode;
}
export default function AuthProvider({ children }: AuthContextProvider) {
  const [user, setUser] = useState<string>('Generico');
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}