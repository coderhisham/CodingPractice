let main = prompt("Choose the Option:");
const todos = [];
while(main!=='quit' && main!=='q'){
    if(main==='new'){
        const newTodo = prompt("Whats the new to do:");
        todos.push(newTodo)
        console.log(`${newTodo} is added to the list.`)
    }else if(main==='list'){
        console.log("***************")
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("***************")
    }else if(main==='delete'){
        const index = parseInt(prompt("Okay, Choose the task to remove"));
        if(!Number.isNaN(index)){
            if(index>todos.length-1){
                console.log("Unknown Index")
            }
            else{
                const deleted = todos.splice(index,1)
                console.log(`Successfully deleted ${deleted}`)
            }
        }
        else{
            console.log("Unknown index")
        }
        
    }
    else{
        console.log("Invalid Input")
    }
    main = prompt("Choose the Option")
}
console.log("Aborting, Take Care")