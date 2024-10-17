import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import Todo Function from Todo.JSX file 
import Todo from './Todo'

// Import Actor Function from Actor.JSX file 
import Actor from './Actor'

// Import Singer Function from Singer.JSX file
import Singer from './Singer'

function App() {
  const [count, setCount] = useState(0)

  // Actors Array 
  const actors = ['Jit', 'Ankush ', 'Niloy Alomgir', 'Tanjin Sayera Totini', 'Neha','Jovan'];
  // Singer Object
  const singers = [
    { id: 1, name: 'Imran mahmud', Age: '30' },
    { id: 2, name: 'Balam', Age: '40' },
    { id: 3, name: 'Puja', Age: '28' },
    { id: 4, name: 'Rehan', Age: '25' },
  ]

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>React Code With Rehan</h1>

      {/* Function 01 */}
      <Person> </Person>
      {/* Function 02: CSS Style with className */}
      <Student> </Student>
      {/* Function 03: CSS Style with object variable */}
      <Developer> </Developer>
      {/* Function 04: CSS Style using style tag */}
      <Another> </Another>
      
      {/* Function 05. Dynamic Data by Props  */}
      <Device name="Laptop" price="55000"> </Device>
      <Device name='Mobile' price="20000"> </Device>
      <Device name="Mouse" price="500"> </Device>

      {/* Function 06. Dynamic Data by Destructuring */}
      <Player name='Rehan' age='25' club='bursalona' position='Back Keeper'></Player>

      {/* Function 07. Import Todo Function from Todo.JSX file  */}
      <Todo task='Learn React' StartDate='16 Oct 2024' isDone={false}></Todo>
      <Todo task='Explore Core Concept' isDone={true} ></Todo>
      <Todo task='Try JSX' isDone={true}></Todo>

      {/* Function 08. Import Actor Function from Actor.JSX file  */}
      <Actor name='Ankush Shorma'></Actor>
      {/* Item Diaplay From Actors Array  */}
      {
        actors.map(actor=> <Actor name={actor}></Actor>)
      }

      {/* Function 09. Import Function from Singer.JSX file */}
      {
        singers.map(singer=> <Singer singer={singer}></Singer>)
      }


    </>
  )
}



// Function 01 
function Person (){
    const age = 25
    const money = 25000
    const person = { name: 'Rehan',  age: 25, Proffession: 'web Developer' }
    return <h2 className='default'>Hello I am {person.name} , My age is: {person.age} and My Proffession is {person.Proffession} </h2>
}
// Function 02: CSS Style with className
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

// Function 03: CSS Style with object variable

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


// Function 04: CSS Style using style tag

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

// Function 05: Dynamic by Props 
function Device(props){
  return <h4 className='default'>Device Name: {props.name} <br />Price: {props.price}</h4>
}

// Function 06: Dynamic Data by Destructuring

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





















export default App
