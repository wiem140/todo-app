import React ,{useState}from 'react'
import {useSelector} from 'react-redux'
import Task from "./Task"
import { Button } from 'react-bootstrap'
const ListTask = () => {
    const listtask = useSelector((state) => state.task.listTasks)
    const [status,setStatus]= useState("all")
    return (
        <div>
            <Button variant="outline-primary" onClick={()=>setStatus("all")}>all</Button>
            <Button variant="outline-primary" onClick={()=>setStatus("done")}>done</Button>
            <Button variant="outline-primary"onClick={()=>setStatus("unDone")}>unDone</Button>
            {/* affichage selon la condition*/}
            {status ==="done"
            ?listtask
            .filter((el)=>el.isDone===true)
            .map((el) => <Task task={el} key={el.id} />)
         :status==="undone"
         ?listtask
         .filter((el)=>el.isDone===false)
         .map((el) => <Task task={el} key={el.id} />)
        : listtask.map((el)=> <Task task={el} key={el.id} />)
        }

            
        </div>
    )
}


export default ListTask