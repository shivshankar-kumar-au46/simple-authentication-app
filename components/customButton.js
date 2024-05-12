import * as React from 'react';
import Button from '@mui/joy/Button';

export default function CustomButton(props) {
    const {buttonStyle,buttonText, buttonType, buttonOnClick} = props;
    return <Button onClick={buttonOnClick} type={buttonType} className={buttonStyle} variant="solid">{buttonText}</Button>;
}