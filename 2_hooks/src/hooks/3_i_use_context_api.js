import React from "react";

export const Context1 = React.createContext()
export const Context2 = React.createContext()

export const ContextProvider1 = Context1.Provider
export const ContextConsumer1 = Context1.Consumer

export const ContextProvider2 = Context2.Provider
export const ContextConsumer2 = Context2.Consumer