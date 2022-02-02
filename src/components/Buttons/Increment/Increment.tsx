import Button from '../Button';

type PropsType = {
    value: number
    maxValue: number
    incHandler: () => void
}

const Increment = (props: PropsType) => {


    let isTransparant = {
        opacity: props.value >= props.maxValue ? '0.5' : '',
    }

    return (
        <div>
            <Button 
            name='inc' 
            onClickHandler={props.incHandler} 
            value={props.value} 
            maxValue={props.maxValue}
            disabled={props.value === props.maxValue}
            style={isTransparant}
            />
        </div>
    )
}


export default Increment;
