import './App.css';
import React from 'react';
import Gugudan from './Gugudan';
import LikeBtn from './Button';
import Gugudan2 from './Gugudan2';

function App() {
  // const [state, setState] = useState(false); // 바뀔 여지가 있는 부분이 state(상태)
  // console.log('state: '+state)
  return (
    // <button onClick={() => setState(!state)}>{state ? '좋아요 클릭' : '좋아요 눌렀음'}</button> // 상태가 변경되면 화면이 저절로 바뀜
    // JSX: JS + XML
    <div>
      <Gugudan /> {/* 컴포넌트는 같지만 각각 다른 상태(state)를 가지고 있음 */}
      <hr />
      <Gugudan2 />
      <hr />
      <LikeBtn />
    </div>
  );
}

export default App;
