import logo from './logo.svg';
import './App.css';


function Header(props){
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

function Content(props){
  return(
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

function Total(props){
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + 
      props.parts[1].exercises + 
      props.parts[2].exercises}</p>
    </div>
  )
}

function Part(props){
  return(
    <div>
      <p>{props.part.name} {props.part.exercise}</p>
    </div>
  )
}

function App() {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
   <div>
    {/* <Header course={course} />
    <Content parts = {parts}/>
    <Total parts = {parts}/> */}

    
    <h1>{course}</h1>
    <p>{parts[0].name} {parts[0].exercises}</p>
    <p>{parts[1].name} {parts[1].exercises}</p>
    <p>{parts[2].name} {parts[2].exercises}</p>
    <p>Number of exercises {parts[0].exercises + 
      parts[1].exercises + parts[2].exercises}</p>

   </div>
  );
}

export default App;
