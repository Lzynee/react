import React, { Component } from 'react';

class Counter extends Component {

  /* 값을 관리하는 변수 */
  state = {
    number : 0,
    fixnumber : 7
  }

  render() {
    /* object에서 똑같은 변수명을 꺼낸다. */
    const {number, fixnumber} = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixnumber}</h2>
        {/* 카운터 업데이트 이벤트 */}
        <button onClick={() => {
          this.setState({number:number+1})
          }}> +1 </button>  {/* setState()를 통해 수정한 값을 반영한다. (∵ Virtual DOM) */}
      </div>
    );
  }
}

export default Counter;