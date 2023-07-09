import React from "react";

const ContestObj = React.createContext('Default');

export const ContextProvider = ContestObj.Provider
export const ContextConsumer = ContestObj.Consumer
