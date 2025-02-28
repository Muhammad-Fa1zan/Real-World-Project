import Navbar from '../other/Navbar';
import AllTasklist from '../other/AllTask';
import Tasklist from '../other/Tasklist';



function EmployeesDashboard({ IsloginUser }) {


  return (
    <div className='pt-5 px-8 h-screen bg-zinc-600 overflow-y-hidden'>
        <div>
          <Navbar userdata={IsloginUser} />
          <AllTasklist userdata={IsloginUser} />
          <Tasklist userdata={IsloginUser} />
        </div>
    </div>
  );
}

export default EmployeesDashboard;