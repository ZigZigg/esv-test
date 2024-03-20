import { FilterOption } from "../commons/Filter/Filter";
import { FilterListType } from "../types/filters";

export const filterCountryOptions:FilterOption[] = [
    {
        label: 'Country A',
        value: 'ca',
    },
    {
        label: 'Country B',
        value: 'cb',
    }
]

export const filterStatusOptions:FilterOption[] = [
    {
        label: 'Active',
        value: '1',
    },
    {
        label: 'Inactive',
        value: '0',
    }
]

export const filterTypeOptions:FilterOption[] = [
    {
        label: 'Type A',
        value: 'ta',
    },
    {
        label: 'Type B',
        value: 'tb',
    }
]

export const filterDeparmentOptions:FilterOption[] = [
    {
        label: 'Department A',
        value: 'da',
    },
    {
        label: 'Departmen B',
        value: 'db',
    }
]

export const filterEolStatus:FilterOption[] = [
    {
        label: 'Enable',
        value: '1',
    },
    {
        label: 'Disable',
        value: '0',
    }
]

export const filterWarrantyStatus:FilterOption[] = [
    {
        label: 'Enable',
        value: '1',
    },
    {
        label: 'Disable',
        value: '0',
    }
]


export const listFilters: FilterListType[] = [
    {
        key: 'country',
        placeholder: 'Select country',
        options: filterCountryOptions
    },
    {
        key: 'status',
        placeholder: 'Select status',
        options: filterStatusOptions
    },
    {
        key: 'type',
        placeholder: 'Select type',
        options: filterTypeOptions
    },
    {
        key: 'department',
        placeholder: 'Select Department',
        options: filterDeparmentOptions
    },
    {
        key: 'eolStatus',
        placeholder: 'Select EOL Status',
        options: filterEolStatus
    },
    {
        key: 'warrantyStatus',
        placeholder: 'Select Warranty Status',
        options: filterWarrantyStatus
    },
]