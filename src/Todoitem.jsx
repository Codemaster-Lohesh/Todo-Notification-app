export function Todoitem({id,title,completed,handleCheck,deleteTodo}){
    return(
        <div className="todo-item">
            <input type="checkbox" id={`todo${id}`} checked={completed} onChange={e => handleCheck(id,e.target.checked)}/>
            <label htmlFor={`todo${id}`}>{title}</label> {/* So as to not have multiple items with same id (for autofill) */}
            <button onClick={()=>deleteTodo(id)} className="btn-danger">Delete</button>
        </div>
    )
}