import AllData from './Data.js';



const {employee, admin} = AllData();




const setlocalStorage = () => {
    localStorage.setItem('employee', JSON.stringify(employee));
    localStorage.setItem('admin', JSON.stringify(admin));
};



const getlocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem("employee"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employee, admin};
}

setlocalStorage();

export default getlocalStorage;