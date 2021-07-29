import React, {useState} from "react";

const Gugudan = () => { // 바뀌는 부분을 state로

  const [state, setState] = useState({
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: ''

  })
  const {first, second, value, result} = state;

  // (핵심)키입력을 위해 set이용
  const onChange = (e) => {
    setState({
      value: e.target.value
    })
  }

  return (
    <div>
      <div>{first}곱하기{second}?</div>{/*태그사이에 중괄호를 넣으면 JS 사용가능*/}
      <form>
        <input type='number' value={value} onChange={onChange}/> {/* 현재 input에 상태는 키입력이 안되므로 set을 통하여 키 입력이 가능하도록 변경 */}
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </div>
  )
}

export default Gugudan;