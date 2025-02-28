import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";



function CreateTask({maindata}) {
  const [tasktitle, settaskTitle] = useState('');
  const [taskdate, settaskDate] = useState('');
  const [taskAsignTo, settaskAsignTo] = useState('');
  const [taskdescirption, settaskDescirption] = useState('');
  const [taskdesign, settaskDesign] = useState('');

  const data = useContext(AuthContext);



  const SubmitEvent = (e) => {
    e.preventDefault();


    const newTask = {
      tasktitle,
      taskdate,
      taskAsignTo,
      taskdescirption,
      taskdesign,
      newtask: true,
      failed: false,
      active: true
    };


 


    const selectedUser = data.employee.find((elem) => taskAsignTo === elem.firstName);

    if (selectedUser) {

     const updatedTasks = selectedUser.tasks = [...selectedUser.tasks, newTask];
     maindata(updatedTasks);
      console.log("Updated user tasks:", selectedUser.tasks);
    } else {
      console.log("User not found for task assignment.");
    }


    settaskAsignTo('');
    settaskDate('');
    settaskDescirption('');
    settaskDesign('');
    settaskTitle('');
  };

  return (
    <div className='mt-10 bg-zinc-800  h-[50%] w-full rounded-md'>
      <form onSubmit={SubmitEvent} className='p-10 text-white'>
        <div className='flex justify-between'>
          <div className='w-[50%] flex flex-col gap-4 '>
            <div className='flex flex-col w-[70%] gap-2'>
              <label className='text-xl font-semibold' htmlFor="">Task title</label>
              <input value={tasktitle} onChange={(e) => settaskTitle(e.target.value)} className='text-[18px] outline-none p-2 border-2 bg-transparent rounded-md  border-green-500 text-white' type="text" placeholder='Make a UI Design' />
            </div>
            <div className='flex flex-col w-[70%] gap-2 '>
              <label className='text-xl font-semibold' htmlFor="">Task title</label>
              <input value={taskdate} onChange={(e) => settaskDate(e.target.value)} className='text-[18px] outline-none p-2 border-2 bg-transparent rounded-md  border-green-500 text-white' type="date" placeholder='' />
            </div>
            <div className='flex flex-col w-[70%] gap-2 '>
              <label className='text-xl font-semibold' htmlFor="">Asign to</label>
              <input value={taskAsignTo} onChange={(e) => settaskAsignTo(e.target.value)} className='text-[18px] outline-none p-2 border-2 bg-transparent rounded-md  border-green-500 text-white' type="text" placeholder='Employee Name' />
            </div>
            <div className='flex flex-col w-[70%]  gap-2 '>
              <label className='text-xl font-semibold' htmlFor="">Category</label>
              <input value={taskdesign} onChange={(e) => settaskDesign(e.target.value)} className='text-[18px] outline-none p-2 border-2 bg-transparent rounded-md  border-green-500 text-white' type="text" placeholder='Your Category' />
            </div>
          </div>

          <div className='w-[40%] flex flex-col gap-4'>
            <h1 className='text-xl font-semibold' >Discription</h1>
            <textarea value={taskdescirption} onChange={(e) => settaskDescirption(e.target.value)} className='w-full outline-none resize-none p-2 border-2 bg-transparent rounded-md  h-[75%] border-green-500 text-white' name="" id=""></textarea>
            <button className='text-[18px] font-bold border-none bg-green-500 pt-2  pb-2 px-5  rounded-md transition-all  hover:bg-green-600 '>Create Task</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
