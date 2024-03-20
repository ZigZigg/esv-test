import React, { useLayoutEffect, useRef, useState } from 'react';
import classes from './Filter.module.css'
import { BsChevronCompactDown } from "react-icons/bs";
import { useStoreContext } from '../../providers/StoreProvider';
export type FilterOption = {
  value: string | number;
  label: string;
};

type Props = {
  options: FilterOption[];
  placeholder?: string;
  disableResize?: boolean;
  filterKey: string;
};

const CommonFilter: React.FC<Props> = ({ options, placeholder, filterKey, disableResize }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false)
  const { state, dispatch } = useStoreContext()
  const { filters }: any = state
  const handleSelect = (selectedValue: string | number) => {
    dispatch({
      type: 'updateFilters',
      payload: {
        [filterKey]: selectedValue,
      },
    })
    setIsOpen(false);
  };

  const componentRef = useRef<HTMLDivElement>(null);
  const initSizeRef = useRef(0)
  useLayoutEffect(() => {
    if (disableResize) return
    const updateSize = () => {
      if (componentRef.current) {
        const { right, width } = componentRef.current.getBoundingClientRect();
        if (!initSizeRef.current) {
          initSizeRef.current = width
        }
        const distance = window.innerWidth - right;
        if (distance <= 300) {
          setHidden(true)
          dispatch({
            type: 'updatePopupFilterList',
            payload: {
              type: 'add',
              key: filterKey
            },
          })
        } else if (initSizeRef.current && distance > (initSizeRef.current + 300)) {
          setHidden(false)
          dispatch({
            type: 'updatePopupFilterList',
            payload: {
              type: 'remove',
              key: filterKey
            },
          })
        }
      }
    };

    // Update size initially
    updateSize();

    // Add resize event listener to update size
    window.addEventListener('resize', updateSize);

    return () => {
      // Remove resize event listener
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  if (hidden) return (<div ref={componentRef}></div>)
  return (
    <div ref={componentRef} className={classes.container} onClick={() => setIsOpen(!isOpen)}>
      <div className={classes.selectedValue}>
        {filters[filterKey] ? options.find(option => option.value === filters[filterKey])?.label : placeholder}
      </div>
      <BsChevronCompactDown />
      {isOpen && (
        <div className={classes.dropdownMenu}>
          {placeholder && <div key={''} className={classes.dropdownItem} onClick={() => handleSelect('')}>
            {placeholder}
          </div>}

          {options.map(option => (
            <div key={option.value} className={classes.dropdownItem} onClick={() => handleSelect(option.value)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonFilter;