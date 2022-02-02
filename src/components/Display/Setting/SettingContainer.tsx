import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { changeMaxValueAC, changeStartValueAC, changeValueAC } from '../../../redux/counter-reducer';
import Setting from './Setting';
import { AppStateType } from '../../../redux/redux-store';

type MapStateToPropsType = {
    value: number
    maxValue: number
}

type MapDispatchToPropsType = {
    onChangeStartValue: (value: number) => void
    onChangeMaxValue: (value: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
         value: state.counter.value,
         maxValue: state.counter.maxValue
    };
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeStartValue: (value: number) => {
            dispatch(changeStartValueAC(value))
        },
        onChangeMaxValue: (value: number) => {
            dispatch(changeMaxValueAC(value))
        }
    };
}

export const SettingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Setting);
