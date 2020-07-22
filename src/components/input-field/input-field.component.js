import React from 'react';

import './input-field.style.css';

const InputField = ({ type, value, onChangeCallback, placeholder, className }) => {
  return (
    <input
      className={`input-field ${className ? className : ''}`}
      type={type}
      value={value}
      onChange={(e) => onChangeCallback(e)}
      placeholder={placeholder}
    ></input>
  );
};

export default InputField;
