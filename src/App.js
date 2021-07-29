import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [state, setState] = useState(false); // 바뀔 여지가 있는 부분이 state(상태)
  console.log('state: '+state)
  return (
    <button onClick={() => setState(!state)}>{state ? 'Liked-true' : 'Liked-false'}</button> // 상태가 변경되면 화면이 저절로 바뀜
  );
}

export default App;
