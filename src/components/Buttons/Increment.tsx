import React from 'react';
import Button from './Button';

type PropsType = {
    value: number
    setValue: (value: number) => void
    maxValue: number
}

const Increment = (props: PropsType) => {

    const increment = () => {
        props.setValue(props.value + 1)
    }

    let isTransparant = {
        opacity: props.value >= props.maxValue ? '0.5' : '',
    }

    return (
        <div>
            <Button 
            name='inc' 
            onClickHandler={increment} 
            value={props.value} 
            maxValue={props.maxValue}
            disabled={props.value === props.maxValue}
            style={isTransparant}
            />
        </div>
    )
}


export default Increment;
