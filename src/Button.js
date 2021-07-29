import './App.css';
import React, {useState} from 'react';

const LikeBtn = () => {
  const [state, setState] = useState(false); // 바뀔 여지가 있는 부분이 state(상태)
  return (
    <button onClick={() => setState(!state)}>{state ? '좋아요 클릭' : '좋아요 눌렀음'}</button> // 상태가 변경되면 화면이 저절로 바뀜
    // JSX: JS + XML
  );
}

export default LikeBtn;
