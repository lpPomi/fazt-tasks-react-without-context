import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// moved from TaskList
import { tasks as data } from './data/tasks';
import { useState, useEffect, Component } from 'react';
/* import TaskCard from './TaskCard'; */

function App() {

  // moved from TaskList

  // without useState ... not good
  /* function TaskList() {
    return (
      <div>
        <h1>Read tasks</h1>
        {tasks.map((record) => {
          return (
            <div>
              {record.id},{record.title},{record.description}
            </div>
          );
        })}
      </div>
    );
  } */

  // using useState and useEffect

  /*    use useEffect when the component is loaded
   and load into setTasks the values from tasks 
   but we have a conflict with variable name tasks
   we have to assign the data from the import file tasks
   in this case we must use an alias data  */
  useEffect(() => {
    //console.log('render from useEffect');
    //setTasks(tasks)
    setTasks(data)
  }, []);



  // at init the tasks are empty
  // when the component is loaded at the first time the tasks are empty
  // then we must use useEffect to get the data when the component is loaded 
  // after loaded we assignt the tasks to userState
  // ... = useState([tasks]); 
  const [tasks, setTasks] = useState([]);

  /* useEffect(function () {
    console.log('render from useEffect');
  },[]);
 */
  //console.log(data)


  /*  App has a CreateTask function. The data is received from the TaskList function
   after App has create the task send it to the TaskForm Component
  */
  function createTaskFunction(task) {
    // call setTasks and assign it the new array [..]
    // but before copy all the existent tasks into the setTask function
    // [... tasks, task]
    // now send this data to the component TaskForm
    //setTasks([...tasks, task])
    // ** but we get from TaskForm a title string and not an object 
    // therefore we create the object here... into the brackets { ..}
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }


  function deleteTaskFunction(tasksId) {
    // show the tasks object and task id
    /* console.log(tasks)
    console.log(tasksId)
    
    console.log(resDelete) */
    /* to delete the element in the html we put it in the setTasks() function */
    const resDelete = tasks.filter((task) => task.id !== tasksId);
    setTasks(resDelete)

  }



  return (
    <main className='bg-zinc-700 h-screen'>
      {/* send the data (tasks) from the function CreateTaskFunction to the TaskForm component 
          createTask is the property in the {..} lies the function createTaskFunction  
      */}

      <div className='container mx-auto p-10'>
        <TaskForm createTask={createTaskFunction} />
        {/* the tasks are send via props to the component TaskList! */}
        <TaskList tasks={tasks} deleteTask={deleteTaskFunction} />

        {/*       <TaskCard tasks={tasks} /> */}
      </div>
    </main>
  );
}
export default App;
