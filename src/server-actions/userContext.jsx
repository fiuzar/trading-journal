'use client'

import { createContext } from "react"

export const UserContext = createContext({
    user: {},
    setUser: () => {}
})
export const TradeAccountContext = createContext({
    tradeAccounts: [],
    setTradeAccounts: () => {}
})