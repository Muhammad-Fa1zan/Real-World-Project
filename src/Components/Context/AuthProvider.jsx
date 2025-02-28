import { useEffect, useState, createContext } from 'react';
import getlocalStorage from '../utils/localStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  
  const [data, setData] = useState(null);
  const [specialData, setSpecialData] = useState(null);

  useEffect(() => {
    try {
      const { employee, admin } = getlocalStorage();
      setData({ employee, admin });
    } catch (error) {
      console.log(error + ' data not found');
    }
  }, []);

  return (
    <AuthContext.Provider value={data}>

      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;



