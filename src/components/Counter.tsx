import React, { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useState } from 'react';
import Increment from './Buttons/Increment';
import Reset from './Buttons/Reset';
import Score from './Display/Score';
import Setting from './Display/Setting';
import s from './counter.module.css'
import Button from './Buttons/Button';

function Counter() {

    let [value, setValue] = useState(0)
    let [count, setCount] = useState(true)
    let [maxValue, setMaxValue] = useState(5)


    useEffect(() => {
        getFromLocalStorage()
    }, [])

    useEffect(() => {
        setToLocalStorage()
    }, [value])

    const setToLocalStorage = () => {
        localStorage.setItem('counterValueKey', JSON.stringify(value))
    }
    const getFromLocalStorage = () => {
        let valueAString = localStorage.getItem('counterValueKey')
        if (valueAString) {
            let newValue = JSON.parse(valueAString)
            setValue(newValue)
        }
    }

  
    const onClickHandler = () => {
        if(count === true) {
            setCount(false)
        } else { 
            setCount(true)
        }
    }
 

    return <div>

        <div className={s.display}>
            {
                count ? <Score value={value} maxValue={maxValue} />
                    : <Setting 
                    value={value}
                    maxValue={maxValue} 
                    setValue={setValue}
                    setMaxValue={setMaxValue}
                    />
            }
         </div>

        <div className={s.buttons} >
            <div className={s.button}>
                <Increment value={value} setValue={setValue} maxValue={maxValue} />
            </div >
            <div className={s.button}>
                <Reset value={value} setValue={setValue} />
            </div>
            <div className={s.button}>
                <Button 
                // onKeyPressHandler={onKeyPressHandler}
                 name='set' value={value}
                  onClickHandler={onClickHandler}
                />
            </div>
        </div>
    </div >;
}

export default Counter


