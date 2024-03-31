import React, {useState} from 'react';
/* 함수형 컴포넌트 useState */
const Say = () => {

  const [message, setMessage] = useState('');
  // const onClickEnter = setMessage('Hi');
  // const onClickLeave = setMessage('Bye');

  return (
    <div>
      <h1>{message}</h1>
      
      <button onClick={() => {
        setMessage('Hi')
      }}> 입장</button>

      <button onClick={() => {
        setMessage('Bye')
      }}> 퇴장 </button>
    </div>
  );
};

export default Say;