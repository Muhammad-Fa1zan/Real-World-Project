import { AuthContext } from '../Context/AuthProvider';
import { useContext } from 'react';


function SubmitTasks() {

  const ContextData = useContext(AuthContext);

 

  return (
    <div id='tasksRow2' className='mt-5 bg-zinc-800 overflow-y-auto p-5  h-[40%] w-full rounded-md text-white'>
      <div className='flex flex-col gap-2' >
        <div className='flex justify-between py-2 px-4 items-center rounded-md bg-green-500'>
          <h1 className='text-xl'>Employee Name</h1>
          <h1 className='text-xl  '>Task</h1>
          <h1 className='text-xl '>Active</h1>
          <h1 className='text-xl '>Completed</h1>
          <h1 className='text-xl '>Failed</h1>
        </div>
       <div>
       {ContextData.employee.map((user) => {
          return (
            <div key={user.id} className=' flex justify-between mt-5 py-2 px-4 items-center rounded-md bg-transparent border-2 border-green-500'>
              <h1 className='text-xl w-[85px] text-center'>{user.firstName}</h1>
              <h1 className='text-xl w-[85px] text-center'>{user.tasks.length}</h1>
              <h1 className='text-xl w-[85px] text-center'>{user.taskCounts.active}</h1>
              <h1 className='text-xl w-[85px] text-center'>{user.taskCounts.completed}</h1>
              <h1 className='text-xl w-[85px] text-center'>{user.taskCounts.failed}</h1>
            </div>
          )
        })}
       </div>
      </div>
    </div>
  )
}

export default SubmitTasks
