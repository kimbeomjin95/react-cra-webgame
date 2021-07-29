import React, {useState} from "react";

function Gugudan() { // 바뀌는 부분을 state로

  const [state, setState] = useState({
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
  })
  const { first, second, value, result } = state;

  // (핵심)키입력을 위해 set이용
  const onChange = (e) => {
    setState({
      value: e.target.value,
      first: first, // input에 값 입력시 렌더링이 발생하여 first, second 값이 ''처리 됨
      second: second,
      result: ''
    })
  }

  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    if (parseInt(value) === first * second) {
      setState({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '정답: '+ value,
      });
    } else {
      setState({
        first: first, // input에 값 입력시 렌더링이 새롭게 되므로 값이 모두 초기화 됨
        second: second,
        value: '',
        result: '땡',
      })
    }
  }

  return (
    <div>
      <div>{first}곱하기{second}?</div>
      {/*태그사이에 중괄호를 넣으면 JS 사용가능*/}
      <form onSubmit={onSubmit}>
        <input type='number' value={value}
               onChange={onChange}/> {/* 현재 input에 상태는 키입력이 안되므로 set을 통하여 키 입력이 가능하도록 변경 */}
        <button>입력!</button>
      </form>
      {/*<div>{`${multiply}은 ${result}`}</div>*/}
      <div>{ result }</div>
    </div>
  )
}

export default Gugudan;