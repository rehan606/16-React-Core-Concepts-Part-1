<h1 align="center">React Core Concept Part - 1</h1>


<h2 align="center">Function 1 </h2>
### Firs Create a Function in App.jsx file
```js
// Function 01 
function Person (){
    const age = 25
    const money = 25000
    const person = { name: 'Rehan',  age: 25, Proffession: 'web Developer' }
    return <h2 className='default'>Hello I am {person.name} , My age is: {person.age} and My Proffession is {person.Proffession} </h2>
}
```

### Call Person Function in App.jsx function into Return Block
```js
    /* Function 01 */
    <Person> </Person>
```


<h2 align="center">Function 02: CSS Style with className: </h2>

```js
function Student (){
  return (
    <div className='student'>
      <h2 className='underline'>This is Studen</h2>
      <p>Student Name:</p>
      <p>Student Age:</p>
      <p>Class:</p>
      <p>Roll:</p>
    </div>
  )
}
```
### Call Student Function in App.jsx function into Return Block
```js
    /* Function 02: CSS Style with className */
    <Student> </Student>
```





<h2 align="center">Function 03: CSS Style with object variable </h2>
```js
function Developer(){
  
  const developer = {
    backgroundColor: '#051d40',
    marginTop: '20px',
    border: '2px solid purple',
    padding: '20px',
    borderRadius: '20px',
  }

  return (
    <div style={developer}>
      <h2 className='underline'>This is Developer</h2>
      <p>Developer Name:</p>
      <p>Developer Age:</p>
      <p>Proffession:</p>
    </div>
  )
}
```
### Call Developer Function in App.jsx function into Return Block
```js
    /* Function 03: CSS Style with object variable  */
    <Developer> </Developer>
```


<h2 align="center">Function 04: CSS Style using style tag </h2>

```js

function Another(){

  return (
    <div style={{
      backgroundColor:'#f9a619',
      marginTop: '20px',
      border: '2px solid blue',
      padding: '20px',
      borderRadius: '20px',
        }}>
      <h2 className='underline'>This is Another</h2>
      <p>Another Name:</p>
      <p>Another Age:</p>
      <p>Proffession:</p>
    </div>
  )
}
```

### Call Developer Function in App.jsx function into Return Block
```js
    /* Function 04: CSS Style using style tag */
    <Another> </Another>
```



<h2 align="center">Function 05: Dynamic by Props </h2>

```js
function Device(props){
  return <h4 className='default'>Device Name: {props.name} <br />Price: {props.price}</h4>
}
```
### Call Developer Function in App.jsx function into Return Block
```js
    /* Function 05. Dynamic Data by Props  */
    <Device name="Laptop" price="55000"> </Device>
    <Device name='Mobile' price="20000"> </Device>
    <Device name="Mouse" price="500"> </Device>
```


<h2 align="center">Function 06: Dynamic Data by Destructuring </h2>
```js
function Player ({name, age, club, position}){
  return (
    <div className='student'>
      <h2 className='underline'>This is Player  </h2>
      <p>Player Name: {name}</p>
      <p>Player Age: {age}</p>
      <p>Club: {club}</p>
      <p>Position: {position}</p>
    </div>
  )
}
```
### Call Developer Function in App.jsx function into Return Block
```js
    /* Function 06. Dynamic Data by Destructuring */
    <Player name='Rehan' age='25' club='bursalona' position='Back Keeper'></Player>
```

<hr>
<hr>
<hr>
<hr>
<hr>



<h1 align="center">Conditional Rendaring </h1>

## Create Todo.jsx File and write code bellow One by one.

### First Import Todo Component in App.jsx file 
```js
import Todo from './Todo'
```
### Second Call Todo Function in Todo.JSX file in return Block
```js

    <Todo task='Learn React' StartDate='16 Oct 2024' isDone={false}></Todo>
    <Todo task='Explore Core Concept' isDone={true} ></Todo>
    <Todo task='Try JSX' isDone={true}></Todo>
```

<hr>
<hr>

<h3 align="center">Bellow The All Functions  </h3>

### Method 01: if else
```js
export default function Todo({task, isDone}){
    if(isDone){
        return <li>Task Completed: {task}   </li>
    }
    else{
        return <li>Work On: {task} </li>
    }
}
```

### Method 02 
```js
export default function Todo({task, isDone}){
    if(isDone){
        return <li>Task Completed: {task} </li>
    }
    return <li>Work On: {task} </li>
}
```

### Method 03: Turnary Operator
```js
export default function Todo({task, isDone}){
    return(
        <li> {isDone ? 'Finished': 'Work On'}   {task} </li>
    )
}
```

###  Method 04: && Operator
```js
export default function Todo({task, isDone}){
    return(
        <li> {task} {isDone && ': Done'} </li>
    )
}
```

### Method 05: || Operator
```js
export default function Todo({task, isDone}){
    return(
        <li > {task} {isDone || ': Do Not complete Yet'}  </li>
    )
}
```

### Method 06: Variable Declaration
```js
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
```


<hr>
<hr>
<hr>
<hr>
<hr>



<h1 align="center">Rendering lists of users using map </h1>

### Create Singer.jsx file And write code bellow
```js
export default function Singer({singer}){
    return(
        <div className="default">
            <h5>ID: {singer.id}</h5>
            <h4>Singer Name: {singer.name}</h4>
            <p>Age: {singer.Age}</p>
        </div>
    )
}
```

### Import component in App.jsx file in top
```js
import Singer from './Singer'
```

### Wite Singer Array in App.jsx file into funtion 
```js
// Singer Object
const singers = [
    { id: 1, name: 'Imran mahmud', Age: '30' },
    { id: 2, name: 'Balam', Age: '40' },
    { id: 3, name: 'Puja', Age: '28' },
    { id: 4, name: 'Rehan', Age: '25' },
]
```
### Map Singer Array in App.jsx file into return Block
```js

{
    singers.map(singer=> <Singer singer={singer}></Singer>)
}
```
