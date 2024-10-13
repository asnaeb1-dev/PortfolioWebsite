import React, { createContext, useState } from 'react'

export const TooltipContextRef = createContext();

const TooltipContext = ({ children }) => {
    const [isTooltipShow, setTooltipShow] = useState(false);
    const [tooltipContent, setTooltipContent] = useState();
    
    return (
        <TooltipContextRef.Provider value={{isTooltipShow, setTooltipShow, tooltipContent, setTooltipContent}}>
            {children}
        </TooltipContextRef.Provider>
    )
}

export default TooltipContext