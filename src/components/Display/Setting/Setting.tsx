import { ChangeEvent } from 'react';
import s from './setting.module.css'

type PropsType = {
    value: number
    maxValue: number
    onChangeStartValue: (value: number) => void
    onChangeMaxValue: (value: number) => void
}

const Setting = (props: PropsType) => {

    
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(e.currentTarget.valueAsNumber)
    }
  
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValue(e.currentTarget.valueAsNumber)
    }

    let error = {
        color: 'red',
        borderColor: 'red',
        backgroundColor: 'rgb(255, 198, 198)'
    }

    if (props.value >= props.maxValue ) {
        return (
            <div>
                <div className={s.divStyle} >start value:
                <input style={error}  type={'number'} onChange={onChangeStartValue}
            />
                </div>
                <div className={s.divStyle} >max value:    
                <input style={error}  type={'number'} onChange={onChangeMaxValue}
            />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className={s.divStyle} >start value:
                <input type={'number'} onChange={onChangeStartValue}
            />
                </div>
                <div className={s.divStyle} >max value:    
                <input type={'number'} onChange={onChangeMaxValue}
            />
                </div>
            </div>
        )
    }
}

export default Setting;
