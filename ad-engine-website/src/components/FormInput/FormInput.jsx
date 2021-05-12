import React from 'react';
import './FormInput.css';
import { Input } from 'antd';

const FormInput = ({ style, placeholder, password, value, onChange }) => {
  return (
    <div>
      <Input
        value={value}
        placeholder={placeholder}
        style={style}
        onChange={(c) => onChange(c)}
      />
    </div>
  );
};

export default FormInput;
