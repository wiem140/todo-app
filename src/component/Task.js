import React from 'react'
import Edit from './Edit'
import { deleteTask, doneTask } from '../I.S/Action/action'
import { useDispatch } from 'react-redux'
const Task = ({task}) => {
    const dispatch= useDispatch
    
    return (
        <div>
            <input  type="checkbox" />
            <span className={task.isDone? "done": null}> {task.text} </span>
            <button onClick={()=> dispatch(deleteTask(task.id))}>Delete</button>
            <Edit task={task} />
            <button onClick={()=> dispatch(doneTask(task.id))}> {task.isDone?"undone" : "done"} </button>
        </div>
    )
}

export default Task