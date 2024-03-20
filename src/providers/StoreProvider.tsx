import { createContext, useContext, useReducer } from "react";
import { FilterType, PopupFilterListPayload } from "../types/filters";

export type AppState = {
    filters: FilterType
    popupFilterList: string[]
}

export type ActionTypes =
    | {
        type: 'initValues'
        payload: AppState
    }
    | { type: 'updateFilters'; payload: any }
    | { type: 'updatePopupFilterList'; payload: PopupFilterListPayload }

const reducer = (state: AppState, action: ActionTypes) => {
    switch (action.type) {
        case 'initValues':
            return { ...state, ...action.payload }
        case 'updateFilters':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload,
                },
            }
        case 'updatePopupFilterList': {
            const {type, key} = action.payload
            let currentList = [...state.popupFilterList]
            const findItem = currentList.find(value=>value === key)
            if(type === 'add' && !findItem){
                currentList.push(key)
            }else if(type === 'remove'){
                currentList = currentList.filter(value => value !== key)
            }
            return {
                ...state,
                popupFilterList: currentList
            }
        }

    }
}


export interface StoreWrapperContextProps {
    state: AppState
    dispatch: React.Dispatch<ActionTypes>
}
export const StoreWrapperContext = createContext<StoreWrapperContextProps>({} as StoreWrapperContextProps)

interface StoreWrapperProps {
    children: React.ReactNode
}

export const StoreWrapper = ({ children }: StoreWrapperProps) => {
    const initState: AppState = {
        filters: {
            country: '',
            status: '',
            type: '',
            department: '',
            eolStatus: '',
            warrantyStatus: '',
        },
        popupFilterList: []
    }

    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <StoreWrapperContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreWrapperContext.Provider>
    )
}


export const useStoreContext = () => {
    const { state, dispatch } = useContext(StoreWrapperContext)
    return { state, dispatch }
}