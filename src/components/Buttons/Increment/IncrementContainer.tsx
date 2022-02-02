import { connect } from 'react-redux';
import Increment from './Increment';
import { Dispatch } from 'redux';
import { incValueAC } from '../../../redux/counter-reducer';
import { AppStateType } from '../../../redux/redux-store';

type MapStateToPropsType = {
    value: number
    maxValue: number
}

type MapDispatchToPropsType = {
    incHandler: () => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        value: state.counter.value,
        maxValue: state.counter.maxValue
    };
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        incHandler: () => {
            dispatch(incValueAC())
        }
    }
}

export const IncrementContainer = connect(
    mapStateToProps, 
    mapDispatchToProps)
(Increment);

