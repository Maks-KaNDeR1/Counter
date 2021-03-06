import { useDispatch, useSelector } from 'react-redux';
import { resetTwoValue } from '../../../redux/counter-reducer';
import { CounterStateType, resetValue, showDisplayOrSet } from '../../../redux/counter-reducer';
import { AppStateType } from '../../../redux/redux-store';
import Button from './../Button';


const Reset = () => {

    const counter = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const resetHandler = () => {
        dispatch(resetValue())
        dispatch(resetTwoValue())
        dispatch(showDisplayOrSet(true))
    }

    // let isTransparant = {
    //     opacity: counter.value || counter.twoValue === 0 ? '0.5' : ''
    // }

    return (
        <div>
            <Button   
            name='reset'
            onClickHandler={resetHandler} 
            value={counter.value} 
            // style={isTransparant}
            />
        </div>
    )
}


export default Reset;
