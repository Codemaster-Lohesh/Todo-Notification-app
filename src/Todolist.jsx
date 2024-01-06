import { Todoitem } from "./Todoitem"

export function Todolist({todos , handleCheck , deleteTodo}){
    return(
        <div className="todo-list">
            {todos.length === 0 && "No todos"}
      
            {todos.map(todo => {
                return (
                    <Todoitem key={todo.id}
                    {...todo} 
                    handleCheck={handleCheck}
                    deleteTodo={deleteTodo} />
                )
            })}
        </div>
    )
}