import { useState } from "react"

const mockData = [
    {
        id: 1,
        serialNumber: 'FHO',
        hostName: 'N/A',
        name: 'LapTop',
        type: 'Laptops/Notebooks',
        os: 'N/A',
        currentHolder: 'Test 3 User',
    },
    {
        id: 2,
        serialNumber: 'FH2',
        hostName: 'LAPTOP-BPSD92',
        name: 'Laptop 01',
        type: 'Laptops/Notebooks',
        os: 'Window 11',
        currentHolder: 'Test 5 User',
    },
    {
        id: 3,
        serialNumber: 'FH3',
        hostName: 'N/A',
        name: 'LapTop 02',
        type: 'Laptops/Notebooks',
        os: 'MacOS',
        currentHolder: 'Test 4 User',
    },
]

export const useFetchData = () => {
    const [data] = useState<any[]>(mockData)
    return {data}
}