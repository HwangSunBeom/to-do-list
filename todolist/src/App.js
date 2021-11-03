// useState 사용할때 불러주세요
import React, {useState} from 'react';
// 이미지도 요런식으로 불러올 수 있음
import './App.scss';

function App() {

  //변수 사용
  let title = 'To Do List';
  let test = 'test';

  // state 문법 사용
  let [글제목,글제목변경] = useState(['']);
  let [입력값, 입력값변경] = useState('');

  //페이지 제어용 참거짓 state
  let [main, main변경] = useState(true);
  let [making, making변경] = useState(false);

  let[제목넘버, 제목넘버변경] = useState(0);

  var newArray = [...글제목];

// state변경함수 사용해보기

  function 삭제(){
    newArray[제목넘버] = ''
    글제목변경(newArray)
  }

  function 페이지바꾸기(){
    main변경(!main)
    making변경(!making)
  }

  return (
    <div className="App">
      <div className="title">
        <div>{ title }</div>
      </div>

      <Nav 페이지바꾸기 = {페이지바꾸기} main = {main}>

      </Nav>

      {
        main === true
         ? <Main 글제목 = {글제목} 제목넘버 = {제목넘버} 제목넘버변경 = {제목넘버변경} 글제목변경 = {글제목변경} newArray = {newArray} 삭제 = {삭제}>

         </Main>
         : null
      }

      {
        making === true
         ? <Makingtodo 글제목 = {글제목} 제목넘버 = {제목넘버} 입력값 = {입력값} 입력값변경 = {입력값변경} 글제목변경 = {글제목변경}>

         </Makingtodo>
         : null
      }


    </div>
  );
}

// 컴포넌트 생성

function Nav(props){
  return(
    <div className="nav">
      <button className="change" onClick={ props.페이지바꾸기 }>
        {
          props.main === true
          ? <p>새글작성</p>
          : <p>메인으로</p>
        }
      </button>
    </div>
  )
}

function Main(props){
  return(
    <div>
      {
        props.글제목.map(function(글, i){
          return(
            <div className="list" key={i}>
              
              <h2>{props.글제목[i]}</h2>

              {
                props.글제목[i] === ''
                ? null
                : <div>
                    <button onClick={()=>{
                    props.제목넘버변경(i);
                    props.삭제();
                    }}>삭제</button>
                    <hr></hr>
                  </div>
              }

            </div>
          )
        })
      }
    </div>
  )
}

function Makingtodo(props){
  return(
    <div>
      <div className="todo">
        <input onChange={ (e)=>{props.입력값변경(e.target.value)}}/>
        <button onClick={()=>{
          var arrayCopy = [...props.글제목];
          arrayCopy.unshift(props.입력값);
          props.글제목변경(arrayCopy);
        }}>저장</button>
      </div>

    </div>
  )
}




export default App;
