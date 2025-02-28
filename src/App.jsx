import { useState, useEffect, useContext } from 'react'
import Login from './Components/Auth/Login'
import EmployeesDashboard from './Components/Dashboard/EmployeesDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Components/Context/AuthProvider';



function App() {

    const [user, setUser] = useState(null);
    const [isLoginUser, setisLoginUser] = useState(null);
    const [erorr, setError] = useState(null);

    const authData= useContext(AuthContext);
    

    
    

   

    const HandleLogin = (email, password) => {
      
        if (!email || !password) {
            setError('Invalid email or password');
            return;
        }
    
        if (email === 'admin@example.com' && password === '123') {
            setUser('admin');
            localStorage.setItem('LoginUser', JSON.stringify({ Role: 'admin'}));
            return;
        }
    
        const employeedata = authData?.employee?.find(
            (info) => info.email === email && info.password === password
        );
    
        if (employeedata) {
            setUser('employee');
            setisLoginUser(employeedata);
            localStorage.setItem('LoginUser', JSON.stringify({ Role: 'employee' , data : employeedata }));
        } else {
            setError('Invalid email or password');
        }
    };
    



    return (
        <>
            {!user && <Login onLogin={HandleLogin} error={erorr} />}
            {user === 'admin' ? <AdminDashboard  /> : user === 'employee' && <EmployeesDashboard IsloginUser={isLoginUser} />}
        </>
    )

}

export default App
