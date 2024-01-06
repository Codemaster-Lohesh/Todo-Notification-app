const NotificationInterval = 60000*5 

function sendNotification(){
    const local = localStorage.getItem("Items")
    if(local !== null){
        const todosJSON = JSON.parse(local)
        console.log(todosJSON)
        if (todosJSON.length > 0) {
            Notification.requestPermission().then(perm =>{
                if(perm=="granted"){
                    const notification = new Notification("Reminder!",{
                        body : todosJSON.filter(todo => todo.completed!==true
                            ).map((todo)=>todo.title)                           //Filter todos that are not completed yet
                    })
                }
            })
        }
    }
}

setInterval(sendNotification,NotificationInterval)
