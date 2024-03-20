import { useState } from 'react'
import classes from './PopupFilter.module.css'
import { BsFilterSquare } from "react-icons/bs";
import CommonFilter from '../../commons/Filter/Filter';
import { listFilters } from '../../constants';
import { useStoreContext } from '../../providers/StoreProvider';


const PopupFilter = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { state } = useStoreContext()
    const { popupFilterList } = state
    if (!popupFilterList.length) return null
    return (
        <div className={classes.container}>
            <div className={classes.button} onClick={() => setIsOpen(!isOpen)}>
                <BsFilterSquare />
            </div>
            {
                isOpen && <div className={classes.dropdownFilter}>
                    <b>More Filters</b>
                    {popupFilterList.map(keyValue => {
                        const findItem = listFilters.find(value => value.key === keyValue)
                        if (findItem) {
                            return <CommonFilter disableResize key={`filter_${findItem.key}`} filterKey={findItem.key} placeholder={findItem.placeholder} options={findItem.options} />
                        }
                        return null
                    })}
                </div>
            }
        </div>
    )
}

export default PopupFilter