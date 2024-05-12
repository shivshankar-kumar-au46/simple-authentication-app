import * as React from 'react';
import Input from '@mui/joy/Input';

export default function CustomInput(props) {
  const {inputPlaceholder, inputStyle, inputValue, inputOnChange, inputCalander} = props;
  return <Input type={inputCalander} value={inputValue} onChange={inputOnChange} placeholder={inputPlaceholder} className={inputStyle} />;
}