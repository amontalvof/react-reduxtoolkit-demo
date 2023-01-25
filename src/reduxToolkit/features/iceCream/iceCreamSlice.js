import { createSlice } from '@reduxjs/toolkit';
import { cakeActions } from '../cake/cakeSlice';

const initialState = {
    numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--;
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload;
        },
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCreams--;
    //     },
    // },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCreams--;
        });
    },
});

export default {
    iceCreamReducer: iceCreamSlice.reducer,
    iceCreamActions: iceCreamSlice.actions,
};
