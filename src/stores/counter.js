import { createSlice } from '@reduxjs/toolkit'

export const counter = createSlice({
	name: 'counter',
	initialState: {
		value: 2,
	},
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		}
	}
})

export const { increment, decrement, incrementByAmount } = counter.actions

export default counter.reducer