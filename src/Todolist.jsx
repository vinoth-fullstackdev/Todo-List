import React, { useState } from "react"

function Todolist(){

    const [tasks,setTasks] =useState(["Eat Breakfast", "Take a shower", "Walk the dog" ]);
    const [newtasks,setNewtasks] = useState();


    function handleInputChange(event){
                    setNewtasks (event.target.value)
    }
    function addtasks(){
        if(newtasks.trim){
            setTasks( (tasks)=> [...tasks,newtasks]);
            setNewtasks("");
        }
    }
    function deletetasks(index){
        const updatedtasks = tasks.filter((_,i)=> i !== index);
        setTasks (updatedtasks)

    }

    function movetasksup(index){
         if(index > 0){
            const updatedtasks = [...tasks];
              [ updatedtasks[ index],updatedtasks[index - 1] 
              = updatedtasks[index - 1],updatedtasks[index]];
              setTasks(updatedtasks)
                }
    }
 function movetasksdown(index){
    if(index < tasks.length - 1 ){
        const updatedtasks = [...tasks];
          [ updatedtasks[ index],updatedtasks[index - 1] 
          = updatedtasks[index - 1],updatedtasks[index]];
          setTasks(updatedtasks)
            }
    }
        return(
                <div className="to-do-list">
                <div>
                    <h1> To-Do-List</h1>
                    <input
                    className="input-box"
                     type="text" 
                     placeholder="Enter a tasks....."
                     value={newtasks}
                     onChange={handleInputChange}
                     /> 
                     <button 
                     className="Add-btn"
                     onClick={addtasks}
                     >
                        Add
                     </button>
                     </div>
                <ol>
                    {tasks.map((tasks,index)=> 
                    <li key={index} > 
                    <span className="text" > {tasks}  </span>                    
                     <button className="delete-btn"
                      onClick={ ()=> deletetasks(index)} 
                       > Delete </button>
                       <button className="move-btn"
                       onClick={ ()=> movetasksup(index)} >
                                        👆🏻
                       </button>
                       <button className="move-btn"
                       onClick={ ()=> movetasksdown(index)} >
                                        👇🏻
                       </button>
                     </li>
                    )}
                </ol>
                
                </div>

        )
}

export default Todolist
