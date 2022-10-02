import React from "react";
import { createContext, useState, useMemo } from 'react';

export const NavigationContext = createContext({
  mobileNavOpen: false,
  setMobileNavOpen: () => {}
});
  
const NavigationContextProvider = ({ children }) =>  {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const value = useMemo(
    () => ({ mobileNavOpen, setMobileNavOpen }), 
    [mobileNavOpen]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;