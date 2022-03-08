import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    money: 0,
    email: '',
    accessToken: '',
    refreshToken: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        setName(state, action) {
            state.name = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setMoney(state, action: PayloadAction<number>) {
            state.money = action.payload;
        },
        setAccessToken(state, action) {
            state.accessToken = action.payload;
        }
    },
    extraReducers: builder => { }
});

export default userSlice;