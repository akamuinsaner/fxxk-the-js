import * as home from './action-types';

export const addCount = () => ({
    type: home.ADD_COUNT,
});

export const subCount = () => ({
    type: home.SUB_COUNT,
});

export const clearCount = () => ({
    type: home.CLEAR_COUNT,
});
