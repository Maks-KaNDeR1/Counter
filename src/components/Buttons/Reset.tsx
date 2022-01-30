import React from 'react';
import Button from './Button';

type PropsType = {
    value: number
    setValue: (value: number) => void
}

const Reset = (props: PropsType) => {

    const reset = () => {
        props.setValue(0)
    }

    let isTransparant = {
        opacity: props.value === 0 ? '0.5' : '',
    }

    return (
        <div>
            <Button   
            name='reset'
            onClickHandler={reset} 
            value={props.value} 
            style={isTransparant}
            />
        </div>
    )
}


export default Reset;
