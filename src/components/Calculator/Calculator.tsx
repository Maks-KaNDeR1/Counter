import React from 'react'
import { useDispatch } from 'react-redux';
import { minusValue, plusValue, resetTwoValue, valueMinusTwoValue, valuePlusTwoValue } from '../../redux/counter-reducer';
import Button from '../Buttons/Button';
import s from './Calculator.module.css'

type PropsType = {
    value: number
    maxValue: number
    twoValue: number
}



const Calculator = (props: PropsType) => {

    const dispatch = useDispatch()

    let plusHandler = () => {
        dispatch(plusValue())
  
    }

    let minusHandler = () => {
        dispatch(minusValue())

    }

    let incHandler = () => {
        dispatch(valuePlusTwoValue())
        dispatch(resetTwoValue())
    }
    let decHandler = () => {
        dispatch(valueMinusTwoValue())
        dispatch(resetTwoValue())
    }

    
    let isTransparant = {
        opacity: props.twoValue >= props.maxValue ? '0.5' : '',
    }

    return (
        <div className={s.buttons}>
            <div className={s.button}>
                <Button
                    name='+'
                    onClickHandler={plusHandler}
                    disabled={props.twoValue === props.maxValue}
                    style={isTransparant}
                />
            </div>
            <div className={s.button}>
                <Button
                    name='set'
                    onClickHandler={incHandler}
                    disabled={props.twoValue === props.maxValue}
                    style={isTransparant}
                />
            </div>
            <div className={s.button}>
                <Button
                    name='-'
                    onClickHandler={minusHandler}
                />
            </div>
            <div className={s.button}>
                <Button
                    name='set'
                    onClickHandler={decHandler}
                />
            </div>
        </div>
    )
}


export default Calculator;
