import Button from './../Button';

type PropsType = {
    value: number
    resetHandler: () => void
}

const Reset = (props: PropsType) => {

    // const reset = () => {
    //     props.resetHandler(0)
    // }

    let isTransparant = {
        opacity: props.value === 0 ? '0.5' : '',
    }

    return (
        <div>
            <Button   
            name='reset'
            onClickHandler={props.resetHandler} 
            value={props.value} 
            style={isTransparant}
            />
        </div>
    )
}


export default Reset;
