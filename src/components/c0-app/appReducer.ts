import {Dispatch} from "redux";
import {contactApi} from "../c2-main/m5-contacts/contactApi";


const initialState = {
    isShowModal: false,
    status: 'idle' as StatusType
}

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-IS-SHOW-MODAL":
            return {...state, isShowModal: action.isShowModal}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return {...state}
    }
}
//Actions
export const setIsShowModalAC = (isShowModal: boolean) => ({type: 'SET-IS-SHOW-MODAL', isShowModal} as const);
const setStatusAC = (status: StatusType) => ({type: 'SET-STATUS', status} as const);

//Thunks
export const setIsShowModalTC = (name: string, email: string, message: string) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'));
    contactApi.sendMessage(name, email, message)
        .then((res:any) => {
            dispatch(setIsShowModalAC(true));
            dispatch(setStatusAC('succeeded'));
        })
        .catch((err:any) => {
            dispatch(setStatusAC('failed'));
        })
        .finally(() => {
            dispatch(setStatusAC('idle'));
        })
}

export const closeModalTC = () => (dispatch: Dispatch) => {
    dispatch(setIsShowModalAC(false));
}

type InitialStateType = typeof initialState;
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

type ActionType = ReturnType<typeof setIsShowModalAC> | ReturnType<typeof setStatusAC>;

