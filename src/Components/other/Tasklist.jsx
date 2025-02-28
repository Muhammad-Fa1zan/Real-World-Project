import { useEffect, useState } from 'react';
import { CiCalendarDate } from "react-icons/ci";

function EmpolyeesTasklist({ userdata }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(userdata.tasks);
  }, [userdata]);

 const classes = (status) => {
  const statusClasses = {
    complete: 'bg-green-500',
    failed: 'bg-red-500',
    newTask: 'bg-yellow-500',
    pending: 'bg-blue-500',
  };
  return statusClasses[status] || 'bg-gray-500';
 }

  return (
    <div id='taskrow' className='h-[50%] flex flex-nowrap gap-4 items-center rounded-md py-5 w-full overflow-x-auto mt-10'>
      {tasks.map((task) => (
        <div key={task.taskId} className={`h-[80%] min-h-[250px] flex flex-col justify-between flex-shrink-0 p-5 bg-red-400 rounded-md w-[24%] ${classes(task.status)}`}>
          <div className='flex items-center justify-between'>
            <h1 className='bg-zinc-500 font-semibold text-white px-3 py-1 pb-1 rounded-md text-xs'>
              {task.priority}
            </h1>
            <p className='text-white text-lg font-semibold flex items-center gap-2'>
              {task.taskDate} <CiCalendarDate className='text-2xl' />
            </p>
          </div>
          <h1 className='text-white text-2xl font-bold mt-5'>{task.taskTitle}</h1>
          <p className='text-white text-lg mt-5 flex-grow'>{task.taskDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default EmpolyeesTasklist;


