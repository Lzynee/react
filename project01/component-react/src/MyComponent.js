import React from "react";
import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {

  return (
    <div>
      {name} 컴포넌트<br />
      children:{children}
    </div>
  );
};

/* 데이터를 입력하지 않았을 때 기본값 */
MyComponent.defaultProps = {
  name:'기본 이름'
}
/* props 검증 */
MyComponent.prototypes = {
  name : PropTypes.string.isRequired
}

export default MyComponent;
