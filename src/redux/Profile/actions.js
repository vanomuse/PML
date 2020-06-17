import * as types from './types'

export const switchEmail = data => ({
    type: types.SWITCH_EMAIL,
    payload: !data,
});

export const switchPush = data => ({
    type: types.SWITCH_PUSH,
    payload: !data
});
