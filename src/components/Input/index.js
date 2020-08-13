import React from 'react';

import { Label, StyledInput } from './styles';

const Input = ({ label, onChange, value, placeholder, ...rest }) => {
  return (
    <>
      <Label>{label}</Label>
      <StyledInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

export default Input;
