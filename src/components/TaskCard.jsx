/* import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext' */
// this component become the "task" as props from the TaskList component
function TaskCard({ task, deteleTask }) {
    // to read a value from the TaskContext  
    /*     const valor = useContext(TaskContext)
        console.log('value from TaskContext:', valor)
     */
    //console.log(task)


    /*   function showAlert() {
          alert(task.id)
      } */


    /* const resDelete = task.id.filter((n) => n !== 0);
    console.log(resDelete); */
    return (
        /* we dont need here the key={task.id} 
        the key is moved now to the component TaskList 
        when the component is called through the html tag
        <TaskCard key={task.id} task={task} />


        by clicking the delete buton we use the filter function
        const resDelete = a.filter((n) => n !== 10);
        const resDelete = tasks.filter((task) => task.id !== tasksId);
        but called from the App component
        */
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-x1 font-bold capitalize">{task.title}</h1>
            <p className="text-green-500 text-sm">{task.description}</p>
            <button className="bg-red-400 px-2 py-1 rounded-md mt-4 hover:bg-red-300" onClick={() => { deteleTask(task.id) }}
            >delete</button>
        </div >
    )
}

export default TaskCard