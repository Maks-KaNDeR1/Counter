import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../../redux/redux-store';
import { resetValueAC } from '../../../redux/counter-reducer';
import Reset from './Reset';


type MapStateToPropsType = {
    value: number
}

type MapDispatchToPropsType = {
    resetHandler: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        value: state.counter.value
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        resetHandler: () => {
            dispatch(resetValueAC())
        }
    }
}

export const ResetContainer = connect(
    mapStateToProps, 
    mapDispatchToProps)
(Reset);

