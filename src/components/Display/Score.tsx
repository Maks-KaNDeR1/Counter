import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';


// type PropsType = {
//     value: number
//     maxValue: number
// }


function Score(props: any) {

    const value = useSelector<AppStateType, number>( state => state.counter.value)
    const maxValue = useSelector<AppStateType, number>( 
        state => state.counter.maxValue)

    return <div style={{ color: value === maxValue ? 'red' : '',
    fontSize: '5rem'
    }}>
        {value}
    </div>;
}


export default Score;
