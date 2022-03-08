import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface Order { 
    orderId: string;
    start: {
        latitude: number;
        longitude: number;
    };
    end: {
        latitude: number;
        longitude: number;
    };
    price: number;
}

export interface InitialState {
    orders: Order[];
    deliveries: Order[];
 }

const initialState: InitialState = {
    orders: [],
    deliveries: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        addOrder(state, action: PayloadAction<Order>) {
            state.orders.push(action.payload);
        },
        acceptOrder(state, action: PayloadAction<string>) { 
            const index = state.orders.findIndex((f) => f.orderId === action.payload)
            if (index > -1) {
                state.deliveries.push(state.orders[index]);
                state.orders.splice(index, 1);
            }
        },
        rejectOrder(state, action) {
            const orderIndex = state.orders.findIndex((f) => f.orderId === action.payload)
            if (orderIndex > -1) {
                state.orders.splice(orderIndex, 1);
            }
            const deliveryIndex = state.orders.findIndex((f) => f.orderId === action.payload)
            if (deliveryIndex > -1) {
                state.deliveries.splice(deliveryIndex, 1);
            }
        },
    },
    extraReducers: builder => { }
})

export default orderSlice;