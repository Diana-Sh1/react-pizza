import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    },
    order: ''
}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setOrder(state, action) {
            state.order = action.payload
        }
    }
})

export const { setCategoryId, setSort, setOrder } = filterSlice.actions;
export default filterSlice.reducer;