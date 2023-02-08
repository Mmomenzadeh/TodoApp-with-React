
export const Reducer=(todoState , action)=>{

    switch (action.type) {
        case "create_todo": return [...todoState , {
            title : action.payload.title,
            desc : action.payload.desc,
            id : Math.floor(Math.random()*100000),
            checked : false
        }]

        case "delete_todo" : return todoState.filter((todoItem)=>todoItem.id !== action.payload.id)
            
        
        default:
            break;
    }
}

