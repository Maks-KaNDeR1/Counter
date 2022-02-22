import { useEffect } from 'react';
import Score from './Display/Score';
import s from './counter.module.css'
import Button from './Buttons/Button';
import { SettingContainer } from './Display/Setting/SettingContainer';
import { showDisplayOrSet } from '../redux/counter-reducer';
import { AppStateType } from '../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import Increment from './Buttons/Increment/Increment';
import Reset from './Buttons/Reset/Reset';


function Counter() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const count = useSelector<AppStateType, boolean>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

    const dispatch = useDispatch()

    
    const onClickHandler = () => {
        if (count === true) {
            dispatch(showDisplayOrSet(false))
        } else {
            dispatch(showDisplayOrSet(true))
        }
        console.log(count)
    }

    return <div>

        <div className={s.display}>
            {
                count ? <Score value={value} maxValue={maxValue} />
                    : <SettingContainer />
            }
        </div>

        <div className={s.buttons} >
            <div className={s.button}>
                 <Increment />
            </div >
            <div className={s.button}>
                <Reset />
            </div>
            <div className={s.button}>
                <Button
                    name='set' value={value}
                    onClickHandler={onClickHandler}
                />
            </div>
        </div>
    </div >;
}

export default Counter


