import React, { KeyboardEvent } from 'react';
import s from './button.module.css'

type ButtonPropsType = {
    name: string
    value?: number
    onClickHandler?: () => void
    maxValue?: number
    disabled?: boolean
    style?: React.CSSProperties
}


const Button = (props: ButtonPropsType) => {

   
    return <button className={s.buttonStyle}
        disabled={props.disabled}
        style={props.style}
        onClick={props.onClickHandler}
    >{props.name}</button>
}

export default Button;
