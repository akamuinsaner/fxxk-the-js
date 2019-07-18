import * as home from './action-types';

const defaultState = {
    count: 0,
};

export default (state = defaultState, action: any = {}) => {
    switch (action.type) {
        case home.ADD_COUNT:
            return { ...state, count: state.count + 1 };
        case home.SUB_COUNT:
            return { ...state, count: state.count - 1 };
        case home.CLEAR_COUNT:
            return { ...state, count: 0 };
        default:
            return state;
    }
};
