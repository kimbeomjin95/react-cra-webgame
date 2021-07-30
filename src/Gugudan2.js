import React, { useRef, useState } from 'react';

function Gugudan2() {
  // 바뀌는 부분을 state로

  const nameInput = useRef();

  // setState를 각각 만들면 객체로 state를 만드는 것보다 편리함(따로 setState 가능)
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  // (핵심)키입력을 위해 set이용
  const onChange = e => {
    setValue(e.target.value);
    setResult('');
  };

  // onSubmit함수에서 setState는 비동기이며, 모아서 한번에 처리하므로 렌더링이 1번만 발생
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      setResult('정답: ' + value);

      nameInput.current.focus(); // current는 해당 요소의 DOM을 가르킴
    } else {
      setValue('');
      setResult('땡');
      nameInput.current.focus();
    }

    // setState({
    //   first: first, // input에 값 입력시 렌더링이 새롭게 되므로 값이 모두 초기화 됨
    //   second: second,
    //   value: '',
    //   result: '땡',
    // })
  };

  // setState함수가 실행되면 다시 렌더링이 됨
  // state가 변경되면 Gugudan2 컴포넌트가 재렌더링 됨
  console.log('렌더링');

  return (
    <div>
      <div>
        {first}곱하기{second}?
      </div>
      {/*태그사이에 중괄호를 넣으면 JS 사용가능*/}
      <form onSubmit={onSubmit}>
        <input
          type="number"
          value={value}
          onChange={onChange}
          ref={nameInput}
        />{' '}
        {/* 현재 input에 상태는 키입력이 안되므로 set을 통하여 키 입력이 가능하도록 변경 */}
        <button>입력!</button>
      </form>
      {/*<div>{`${multiply}은 ${result}`}</div>*/}
      <div>{result}</div>
    </div>
  );
}

export default Gugudan2;
