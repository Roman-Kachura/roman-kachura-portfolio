import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState: InitialStateType = {
  isShowModal: false,
  status: 'idle'
}

const appSclice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsShowModal(state, action: PayloadAction<{ isShowModal: boolean }>) {
      state.isShowModal = action.payload.isShowModal;
    },
    setStatus(state, action: PayloadAction<{ status: StatusType }>) {
      state.status = action.payload.status;
    }
  }
});

export const {setIsShowModal, setStatus} = appSclice.actions;
export default appSclice.reducer;

interface InitialStateType {
  isShowModal: boolean
  status: StatusType
}

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';


