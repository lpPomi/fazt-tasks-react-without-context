
import TaskCard from './TaskCard';

// this component become the "tasks" as props from App component
function TaskList({ tasks, deleteTask }) {
  // we can use props or {tasks} in the TaskList() parameter
  // also from TaskList(props)  to TaskList({tasks})
  // then we don need to write  props.tasks.length anymore...
  // tasks.length is ok
  // deleteTasks is a property that included a function deleteTaskFunction

  // check if the tasks are empty
  if (tasks.length === 0) {
    /*     console.log('tasks are empty') */
    return <h1 className='text-white text-4xl font-bold text-center'>tasks are empty</h1>
  }

  return (

    < div className='grid grid-cols-4 gap-2'>
      {/*  <h1>Show all tasks</h1>
      <hr /> */}
      {
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} deteleTask={deleteTask} />
          /* <div key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
             </div>
          */
        ))
      }
    </div >
  )
}

export default TaskList
