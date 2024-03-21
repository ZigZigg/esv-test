import { useLayoutEffect, useRef, useState } from "react";
import { ActionTypes, useStoreContext } from "../providers/StoreProvider";

export const useCalculateResize = (disableResize: boolean, componentRef: React.RefObject<any>, dispatchContext: React.Dispatch<ActionTypes>, options?: Record<string, any>) => {
    const [hidden, setHidden] = useState<boolean>(false)
    const initSizeRef = useRef(0)
    const hiddenRef = useRef(false)
    
    useLayoutEffect(() => {
      if (disableResize) return
      const updateFilterStatus = (isHide: boolean) => {
        setHidden(isHide)
        hiddenRef.current = isHide
        dispatchContext({
          type: 'updatePopupFilterList',
          payload: {
            type: isHide ? 'add' : 'remove',
            key: options?.filterKey
          },
        })
      }
      const updateSize = () => {
        if (componentRef.current) {
          const { right, width } = componentRef.current.getBoundingClientRect();
          if (!initSizeRef.current) {
            initSizeRef.current = width
          }
          const margin = hiddenRef.current ? 5 : 0
          const distance = window.innerWidth - right - margin;
          if (distance <= 300) {
            updateFilterStatus(true)
          } else if (initSizeRef.current && distance > (initSizeRef.current + 300)) {
            updateFilterStatus(false)
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
    return {hidden}
}