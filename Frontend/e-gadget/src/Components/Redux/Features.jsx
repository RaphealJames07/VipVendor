import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curveGadgetUser: {},
};

const features = createSlice({
    name: "e-gadget",
    initialState,
    reducers: {
        curveGadgetUserLogin: (state, {payload}) => {
            state.trippyUser = payload
            console.log("User Data:", payload);
        },
        curveGadgetUserLogOut: (state) => {
            state.trippyUser = null;
        },
    },
});

export const {
  curveGadgetUserLogin,
  curveGadgetUserLogOut,
} = features.actions;

export default features.reducer;
