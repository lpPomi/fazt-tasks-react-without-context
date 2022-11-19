
import { useState } from 'react'

/* import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext' */

// the function get as parameter from the parent App component the property createTask
// the property createTask has a function in the App component
// Attention the property createTask must be included in brackets { ..}
function TaskForm({ createTask }) {


    // to read a value from the TaskContext  
    /*   const valor = useContext(TaskContext)
      console.log('value from TaskForm:', valor) */


    // save the contend from input in a react state and variable with useState
    // for the title .. init value is empty
    const [title, setTitle] = useState('')
    // for the description .. init value is empty
    const [description, setDescription] = useState('')
    // to avoid refresh page by click save form use preventDefault()
    const handleSubmit = event => {
        event.preventDefault();

        // create a new json object newTask with the title from input field
        // so we can later add the object to the Task Object
        /* const newTask = {
            title: title
        } */
        // show the new input field title
        //console.log(newTask)
        // add the new title as object with the createTaskFunction from App
        //createTask(newTask)
        // wrong because we dont have the other fields id and description
        // these fields will be create at this moment in the App component
        // we send only the title as string to the App parent function createTaskFunction

        // now we send the title and the description as  object
        //console.log(title, description)
        createTask({
            title,
            description
        })

        /*  clear the input and textarea fields after input
         wrong !
         title.value = ''
         description.value = '' */

        /* correct */
        setTitle('')
        setDescription('')
    }

    // to see on console what we are typing in the input field
    const handleChange = (e) => {
        console.log(e.target.value);
    };

    // to save the title into the title variable using setTitle
    const getTitle = (e) => {
        setTitle(e.target.value)
        //console.log(e.target.value);
    };
    // to save the description into the description variable using setDescription
    const getDescription = (e) => {
        setDescription(e.target.value)
    }

    return (

        <div className='max-w-md mx-auto'>
            <form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>
                {/*  <input placeholder="create a task" onChange={handleChange} /> */}
                {/* create an input field for the task */}
                {/*   to clear the input use value={title} */}
                <h1 className='text-2x1 font-bold text-white mb-3'>Create task</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' placeholder="create a task" onChange={getTitle} value={title} autoFocus />

                {/* create a textarea for the description field */}
                {/*   to clear the input use value={description} */}
                <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder="description" onChange={getDescription} value={description} />

                <button className='bg-indigo-500 px-3 py-1 text-white' onClick={() => {
                    /*    console.log('Hi Button'); */
                }}>
                    save
                </button>
            </form>
        </div>
    )
}

export default TaskForm