import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const friendss = [{name: 'Shopon', age:25}, {name: 'Halim', age:26}, {name: 'Saiful', age:27}];
  const friends = ['halim', 'shopon', 'saiful'];
  return (
    <div className="App">
      {
        friendss.map(friend => <Friend name={friend.name} age={friend.age}></Friend>)
      }
      <header className="App-header">
        
        <Person></Person>
        <Counter></Counter>
        <Friends name="Md. Shoriful Islam" wife="Mst. Reba Khatun"></Friends>
        <Friends name="Md. Rafikul Islam" wife="Mst. Shapna Khatun"></Friends>
        <Friends name= {friends[2]}></Friends>
      </header>
    </div>
  );
}
function Friend(props){
  return(
    <div>
      <h3>Friend Name: {props.name}</h3>
      <h5>Friend Age: {props.age}</h5>
    </div>
  )
}
function Person(){
  return(
    <div>
      <h1>Md. Shoriful Islam</h1>
    </div>
  )
}
function Friends(props){
 const friendStyle = {
    border: "2px solid blue",
    backgroundColor: "green",
    margin: "10px",
    borderRadius:"10px",
    padding: '10px',
  }
  return(
    <div style={friendStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Name: {props.wife}</h3>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)
  
  return(
    <div>
      <button onClick={handleClick}>Movie </button>
    <h3>this is count: {count}</h3>
    <Counters only={count}></Counters>

    </div>
  )
}
function Counters(props){
  return(
    <div>
      <h2>new Count : {props.only}</h2>
    </div>
  )
}
export default App;
