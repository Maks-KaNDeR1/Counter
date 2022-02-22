import { useDispatch, useSelector } from 'react-redux';
import { CounterStateType, incValue } from '../../../redux/counter-reducer';
import { AppStateType } from '../../../redux/redux-store';
import Button from '../Button';

const Increment = () => {

    const counter = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    let incHandler = () => {
        dispatch(incValue())
    }

    let isTransparant = {
        opacity: counter.value >= counter.maxValue ? '0.5' : '',
    }

    return (
        <div>
            <Button 
            name='inc' 
            onClickHandler={incHandler} 
            value={counter.value} 
            maxValue={counter.maxValue}
            disabled={counter.value === counter.maxValue}
            style={isTransparant}
            />
        </div>
    )
}


export default Increment;
