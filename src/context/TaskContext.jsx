
import { createContext } from 'react'

// this is the name of the context
export const TaskContext = createContext()

// this is the component that envolve all other components
export function TaskContextProvider(props) {
    /* let x = 20 */
    return (
        <TaskContext.Provider value={props}>
            {props.children}
        </TaskContext.Provider>
    )
}
