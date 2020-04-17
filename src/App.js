import React,{ Component } from "react";
import Todos from './todos'
import Addtodo from './addtodo'
import './sty.css'
 


class App extends Component{
  state={
    todos: [
      {id:1, content: 'buy some coke'},
      {id:2 , content: 'go die'}
    ]
  }
deletetodo =(id)=>{
  const todos= this.state.todos.filter(todo=>{
    return todo.id !==id
  });
   this.setState({
     todos
   })
} 
addtolist=(todo)=>{
  todo.id = Math.random();
  let todos = [...this.state.todos,todo]
  this.setState({
    todos:todos
  })

}

render(){
  return(
    <div className="todo-app container"> 
    <h1 className= "center blue-text">todo's</h1>
    <Todos todos={this.state.todos} deletetodo={this.deletetodo}/>
    <Addtodo addtolist={this.addtolist}/>

</div>
  );
}
}
export default App;
