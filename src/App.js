import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import FunctionClick from './components/FunctionClick'         
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
//import Greet from './components/Greet'
//import Welcome from './components/Welcome'

//import Counter from './components/Counter'
// import Todos from './components/Todos';
//import Hello from './components/Hello'

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//       <Welcome />
//       <Hello />
      
//     </div>
//   );
// }
class App extends Component {
  // state={
  //   todos:[
  //     {
  //       id:1,
  //       title:'take out the trash',
  //       completed:false
  //     },
  //     {
  //       id:2,
  //       title:'dinner with wife',
  //       completed:false
  //     },
  //     {
  //       id:3,
  //       title:'meeting with boss',
  //       completed:false
  //     }
  //   ]
  // }

  render()
  {
    return (
      <div className="App">
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
        <UserGreeting />
        {/* <Todos todo={this.state.todos}/> */}
        {/* <Counter /> */}
      
        {/* <Greet name="siva"><p> Good Morning siva</p></Greet> 
        <Greet name="ram"> <button>Action</button></Greet>
        <Greet name="krish"/>
        <Welcome name="lalitha" heroName="siva"/>
        <Welcome name="bala" heroName="siva"/>
        <Message /> */}
      </div>
    );
  }
}
export default App;
