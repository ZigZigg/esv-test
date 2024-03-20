import { FilterOption } from "../commons/Filter/Filter";

export interface FilterType{
    country: string;
    status: string;
    type: string;
    department: string;
    eolStatus: string;
    warrantyStatus: string;
}

export type FilterTypePayload = 
    | {country: string}
    | {status: string}
    | {type: string}
    | {department: string}
    | {eolStatus: string}
    | {warrantyStatus: string}

export type PopupFilterListPayload = {
    type: 'add' | 'remove';
    key: string
}

export interface FilterListType {
    key: string;
    placeholder: string;
    options: FilterOption[]
}