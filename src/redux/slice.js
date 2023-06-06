import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'isOpen',
    initialState: {
      value: false,
      payload: {title:'', msg:''}
    },
    reducers: {
      openNotification: (state, {payload}) => {
          state.value = true
          state.payload = payload
        },
      closeNotification: state => {state.value = false},
    },
  })

  export const {openNotification, closeNotification} = notificationSlice.actions
  export default notificationSlice.reducer