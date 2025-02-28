import React, { useEffect, useState } from 'react';

function AllTasklist({ userdata }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(userdata.tasks);
  }, [userdata]);

  // Function to determine status class
  const getStatusClass = (status) => {
    const statusClasses = {
      complete: 'bg-green-500',
      failed: 'bg-red-500',
      newTask: 'bg-yellow-500',
      pending: 'bg-gray-500',
    };
    return statusClasses[status] || 'bg-gray-500'; 
  };

  return (
    <>
      <div key={userdata.id}>
        <div className='flex justify-between items-center py-2 px-5 rounded-md text-white bg-zinc-800 mt-10'>
          <div className='flex items-center gap-5'>
            <h1 className='text-2xl font-bold'>Hello</h1>
            <h1 className='text-2xl font-bold'>{userdata.firstName}</h1>
          </div>
          {/* Task Counts Section */}
          <div className="flex gap-5">
            <span className="bg-blue-500 px-4 py-2 rounded-2xl text-white">Active: {userdata.taskCounts.active}</span>
            <span className="bg-yellow-500 px-4 py-2 rounded-2xl text-white">New: {userdata.taskCounts.newTask}</span>
            <span className="bg-green-500 px-4 py-2 rounded-2xl text-white">Completed: {userdata.taskCounts.completed}</span>
            <span className="bg-red-500 px-4 py-2 rounded-2xl text-white">Failed: {userdata.taskCounts.failed}</span>
          </div>
        </div>
      </div>

      <div className='grid gap-4 mt-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {tasks.map((task) => (
          <div
            key={task.taskTitle} 
            className={`rounded-md flex flex-col justify-center items-center text-white py-14 px-5 w-full shadow-lg hover:shadow-xl transition-all ${getStatusClass(task.status)}`}
          >
            <p className="text-2xl font-medium capitalize">Status: {task.status}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllTasklist;





