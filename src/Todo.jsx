

// export default function Todo({task,StartDate= '' , isDone}){
//     return(
//         <li>Task: {task}  From {StartDate} </li>
//     )
// }

/*----------------- Conditional Rendaring Method 01: if else --------------------------*/ 

// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Task Completed: {task}   </li>
//     }
//     else{
//         return <li>Work On: {task} </li>
//     }
// }


/*----------------- Conditional Rendaring Method 02 --------------------------*/ 

// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Task Completed: {task} </li>
//     }
//     return <li>Work On: {task} </li>
// }


/*----------------- Conditional Rendaring Method 03: Turnary Operator--------------------------*/ 
// export default function Todo({task, isDone}){
//     return(
//         <li> {isDone ? 'Finished': 'Work On'}   {task} </li>
//     )
// }


/*----------------- Conditional Rendaring Method 04: && Operator--------------------------*/ 
// export default function Todo({task, isDone}){
//     return(
//         <li> {task} {isDone && ': Done'} </li>
//     )
// }


/*----------------- Conditional Rendaring Method 05: || Operator--------------------------*/ 
// export default function Todo({task, isDone}){
//     return(
//         <li > {task} {isDone || ': Do Not complete Yet'}  </li>
//     )
// }


/*----------------- Conditional Rendaring Method 06: Variable Declaration--------------------------*/ 
export default function Todo({task, isDone}){
    let itemsList
    if(isDone){
        itemsList = <li className="underline"> Finished: {task}  </li>
    }
    else{
        itemsList = <li className="underline"> Work On Progress: {task}  </li>
    }
    return itemsList;
    
}