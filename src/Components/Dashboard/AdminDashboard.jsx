import React from 'react'
import Navbar from '../other/Navbar'
import CreateTask from '../other/CreateTask'
import SubmitTasks from '../other/SubmitTasks'


function AdminDashboard({data}) {

  return (
    <div id='AdminDashboard' className='pt-5 px-8 bg-zinc-600 pb-2 overflow-y-hidden h-screen '>
      <Navbar />
      <CreateTask maindata={data}    />
      <SubmitTasks   />
    </div>
  )
}

export default AdminDashboard
