import React from 'react';


type PropsType = {
    value: number
    maxValue: number
}


function Score(props: PropsType) {
    return <div style={{ color: props.value === props.maxValue ? 'red' : '',
    fontSize: '5rem'
    }}>
        {props.value}
    </div>;
}


export default Score;
