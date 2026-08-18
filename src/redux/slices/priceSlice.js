import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  money = 0
}
const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      state.money = action.payload
    }
  }
})

export const { updatePrice } = priceSlice.actions
export default priceSlice.reducer