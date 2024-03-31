import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* 클래스형 컴포넌트에서 props 사용하기 */
class MyComponentClass extends Component {
  render() {
    const {name} = this.props;
    return (
      <div>
        {name} 클래스 컴포넌트
      </div>
    );
  }
}

MyComponentClass.defaultProps = {
  name : '기본 이름'
}

MyComponentClass.propTypes = {
  name : PropTypes.string.isRequired
}

export default MyComponentClass;