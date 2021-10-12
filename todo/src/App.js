import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //여기에 선언해주세요

  let title = 'To-Do-List'
  let [할일, 할일변경] = useState([]);
  let [순서, 순서변경] = useState(0);
  let [메인, 메인으로] = useState(true);
  let [투두, 투두로] = useState(false);

  function 메인으로(){
    메인으로(!main)
  }
  
  function 투두로(){
    투두로(!todo)
  }


  //얘는 html로...!
  return (
    <div>
      <Nav 메인 = {메인} 투두 = {투두}>

      </Nav>

      <Main 할일 = {할일} 순서 = {순서}>

      </Main>

      <Todo>
        
      </Todo>

      <h2>야발... 제발 되어주세요 ㅠㅠㅠ</h2>
    </div>
  );
}

function Main(props){
  props.할일.map(function(내용, i){
    return(
      <div className="list" key={i}>
        {props.할일}

        <h3 onClick={ () => props.순서변경(i) }> {내용} </h3>     
        <hr/>
      </div>
    )
  })
}

function Todo(props){
  return(
    <div className="publish">
      <input onChange={ (e)=>{props.내용변경(e.target.value)}}/>
      <button onClick={()=>{
        var arrayCopy = [...props.할일];
        arrayCopy.unshift(props.내용);
        props.내용변경(arrayCopy);
      }}>저장</button>
    </div>
  )
}

function Nav(props){

  return(
    <div className="nav">
      <button onClick={ 메인으로() }>메인으로</button>
      <button onClick={ 투두로() }>새글작성</button>
    </div>
  )
}



export default App;
