import React from 'react';
import './sty.css'

const Todos =({todos,deletetodo })=>{
    const todolist= todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                
                   {todo.content}
                   <div className="bs">
                   <button onClick={()=>{deletetodo(todo.id)}}> <i className="material-icons">clear</i></button>

                   </div>
                </div>

            )
        }) 
    ):(
        <p className="center">you have no todos yay!</p>
    )
    return(
        <div className="todos collection">
        {todolist}
        </div>
    )
}
export default Todos;

