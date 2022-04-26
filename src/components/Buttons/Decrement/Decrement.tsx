import { useDispatch, useSelector } from 'react-redux';
import { CounterStateType, decValue, showDisplayOrSet } from '../../../redux/counter-reducer';
import { AppStateType } from '../../../redux/redux-store';
import Button from '../Button';

const Decrement = () => {

    const counter = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    let decHandler = () => {
        dispatch(decValue())
        dispatch(showDisplayOrSet(true))
    }

 

    return (
        <div>
            <Button 
            name='dec' 
            onClickHandler={decHandler} 
            value={counter.value} 
            maxValue={counter.maxValue}
            // disabled={counter.value === counter.maxValue}
            />
        </div>
    )
}


export default Decrement;
