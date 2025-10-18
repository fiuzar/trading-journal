"use client"

import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue, SelectLabel } from "../ui/select";
import { symbols } from "@/lib/symbols";
import { Label } from "../ui/label";
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea";

import { Plus } from "lucide-react"
import { useEffect, useState } from "react";

import { get_trade_accounts } from "@/server-actions/create-trade-account-actions";
import { calculateRR } from "./risk-calculator-functions";

export default function LogATrade() {

    const [pair, setPair] = useState("");
    const [accountValue, setAccountValue] = useState(0)
    const [entryPrice, setEntryPrice] = useState(0)
    const [rr, setRR] = useState("")
    const [stopLoss, setStopLoss] = useState(0)
    const [takeProfit, setTakeProfit] = useState(0)
    const [tradeAccounts, setTradeAccounts] = useState({})
    const [direction, setDirection] = useState("")
    const [lotSize, setLotSize] = useState(0)

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        async function get_trade_acc() {
            const { success, accounts } = await get_trade_accounts()

            if (success) {
                setTradeAccounts(accounts[0])
            }
        }

        get_trade_acc()
    }, [])

    useEffect(() => {
        if (pair, entryPrice, stopLoss, takeProfit) {
            const { success, message, rr } = calculateRR(pair, entryPrice, stopLoss, takeProfit)
            if (success) {
                setRR(rr)
            }
        }
    }, [pair, entryPrice, stopLoss, takeProfit])

    useEffect(() => {

        if (!pair || !account_value || !entryPrice || !stopLoss || !takeProfit) {
            setIsDisabled(true)
        }
        else {
            setIsDisabled(false)
        }

    }, [pair, accountValue, entryPrice, stopLoss, takeProfit])

    return (

        <Dialog>
            <DialogTrigger className="w-full">
                <div
                    tooltip="Log Trade"
                    className="bg-green-800 cursor-pointer flex p-1 align-bottom gap-2 rounded-md text-white font-semibold hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
                    <Plus />
                    <span className="mt-0.5">Log Trade</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={`border-b pb-4`}>Log A Trade</DialogTitle>
                    <div className="py-3 h-[70vh] overflow-y-auto pr-3">

                        <div className="mb-4 md:grid md:grid-cols-2 md:gap-2">
                            <Select className="w-full block mb-4 md:mb-0" defaultValue={pair} onValueChange={(value) => setPair(value)}>
                                <SelectTrigger className={`w-full`}>
                                    {pair || "Select Symbol"}
                                </SelectTrigger>
                                <SelectContent>
                                    {symbols.map((symbol, idx) => (
                                        <SelectItem key={idx} value={symbol.pair}>{symbol.pair}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {tradeAccounts && tradeAccounts.initial_balance ? (
                                <Select className="w-full block" defaultValue={accountValue} onValueChange={(value) => setAccountValue(value)}>
                                    <SelectTrigger className={`w-full`}>
                                        {accountValue || "Select Account"}
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={tradeAccounts.initial_balance}>{`${tradeAccounts.account_name} : ${tradeAccounts.initial_balance}`}</SelectItem>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <Input type={`text`} disabled="true" placeholder="No Trade Account" />
                            )}


                        </div>

                        <h3 className="text-md my-3 mb-4">Risk Management</h3>

                        <div className="grid grid-cols-2 gap-2">
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Entry Price</span>
                                <Input disabled={!accountValue || accountValue.trim() === ""} value={entryPrice} onChange={(e) => setEntryPrice(e.target.value)} type="number" className={`block w-full`} placeholder="Entry Price" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">R:R Ratio</span>
                                <Input type="text" disabled className={`block w-full`} placeholder="R:R" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Stop Loss</span>
                                <Input disabled={!accountValue || accountValue.trim() === ""} type="number" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} className={`block w-full`} placeholder="Stop Loss" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Take Profit</span>
                                <Input disabled={!accountValue || accountValue.trim() === ""} type="text" value={takeProfit} onChange={(e) => setTakeProfit(e.target.value)} className={`block w-full`} placeholder="Take Profit" />
                            </Label>
                        </div>

                        <h3 className="text-md my-3 mb-4">Trade Basics</h3>

                        <div className="grid grid-cols-2 gap-2 w-full">
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Direction</span>
                                <Select className="w-full block" defaultValue={direction} onValueChange={(value) => setDirection(value)}>
                                    <SelectTrigger className={`w-full`}>
                                        {direction || "Direction"}
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={`BUY`}>BUY</SelectItem>
                                        <SelectItem value={`SELL`}>SELL</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Standard Lot</span>
                                <Input disabled={true} type="text" className={`block w-full`} value={lotSize} placeholder="Lot Size" />
                            </Label>
                        </div>

                        <h3 className="text-md my-3 mb-4">Quick Notes</h3>
                        <div className="w-full">
                            <Textarea placeholder="Quick notes about the trade..." className="resize-none"></Textarea>
                        </div>

                    </div>
                    <DialogFooter>
                        <Button disabled={isDisabled} className={`px-12 bg-green-800 text-white font-medium hover:text-black cursor-pointer`}>Log</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}