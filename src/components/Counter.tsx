import Score from './Display/Score';
import s from './counter.module.css'
import { SettingContainer } from './Display/Setting/SettingContainer';
import { resetValue, showDisplayOrSet } from '../redux/counter-reducer';
import { AppStateType } from '../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import Increment from './Buttons/Increment/Increment';
import Reset from './Buttons/Reset/Reset';
import Decrement from './Buttons/Decrement/Decrement';
import Calculator from './Calculator/Calculator';
import Button from './Buttons/Button';


function Counter() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const twoValue = useSelector<AppStateType, number>(state => state.counter.twoValue)
    const count = useSelector<AppStateType, boolean>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

    const dispatch = useDispatch()

    const onClickHandler = () => {
        if (count === true) {
            dispatch(showDisplayOrSet(false))
            dispatch(resetValue())
        } else {
            dispatch(showDisplayOrSet(true))
        }
    }

    console.log(value);

    return <div>
        <div className={s.display}>
            <h2>{maxValue}</h2>
            <div className={s.partition} ></div>
            {
                count ? <Score twoValue={twoValue} value={value} maxValue={maxValue} />
                    : <SettingContainer />
            }
        </div>

        <div className={s.buttons} >
            <div className={s.button}>
                <Increment />
            </div >
            <div className={s.button}>
                <Decrement />
            </div>
            <div className={s.button}>
                <Reset />
            </div>
            <div className={s.button}>
                <Button
                    name='sett' value={value}
                    onClickHandler={onClickHandler}
                />
            </div>
                <Calculator value={value}  twoValue={twoValue} maxValue={maxValue}  />
        </div>
    </div >;
}

export default Counter


