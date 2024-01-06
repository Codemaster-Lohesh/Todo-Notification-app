import { useState } from 'react'

export function Todoform({addTodo}){

    const [newItem,setnewItem] = useState("")

    
    function handleSubmit(e){
        e.preventDefault()
        if(newItem==="") return 
        addTodo(newItem)
        setnewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className="form-row">
            <label htmlFor="item">Enter task</label>
            <input value={newItem} onChange={e => {setnewItem(e.target.value)}} type="text" id="item" />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}