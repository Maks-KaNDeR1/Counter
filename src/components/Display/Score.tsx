import React from 'react';


type PropsType = {
    value: number
    maxValue: number
    twoValue: number
}



function Score(props: PropsType) {
    
    if (props.twoValue !== 0) {
        return <div style={{ display: 'flex', justifyContent: 'space-around',
            marginTop: '-15px', color: props.value || props.twoValue === props.maxValue ? 'red' : '',
            fontSize: '4rem'
        }}>
            <span>
                {props.value} 
                </span>
                +
                <span>
            {props.twoValue}
                </span>
        </div>;
    } else {

        return <div style={{
            marginTop: '-15px', color: props.value === props.maxValue ? 'red' : '',
            fontSize: '5rem'
        }}>
            {props.value}
        </div>;
    }
}


export default Score;
