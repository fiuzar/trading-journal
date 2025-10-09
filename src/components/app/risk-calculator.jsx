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
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { symbols } from "@/lib/symbols";
import { Label } from "../ui/label";
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea";

import { Calculator } from "lucide-react"
import { useEffect, useState } from "react";

export default function RiskCalculator() {

    const [pair, setPair] = useState("");

    useEffect(() => {

    }, [pair])

    return (

        <Dialog>
            <DialogTrigger className="w-full">
                <div
                    tooltip="Risk Calculator"
                    className="border bg-zinc-600 cursor-pointer flex p-1 align-bottom gap-2 rounded-md text-white font-semibold hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
                    <Calculator />
                    <span className="mt-0.5">Risk Calculator</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={`border-b pb-4`}>Log A Trade</DialogTitle>
                    <div className="py-3 h-[70vh] overflow-y-auto pr-3">

                        <Select className="w-full block" defaultValue={pair} onValueChange={(e) => setPair(e.target.value)}>
                            <SelectTrigger className={`w-full`}>
                                    Select Symbol
                            </SelectTrigger>
                            <SelectContent>
                                {symbols.map((symbol, idx) => (
                                    <SelectItem key={idx} value={symbol.value}>{symbol.label}</SelectItem>
                                ))}
                                <SelectItem value="OTHER">Other</SelectItem>
                            </SelectContent>
                        </Select>

                        <h3 className="text-md my-3 mb-4">Risk Management</h3>

                        <div className="grid grid-cols-2 gap-2">
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Entry Price</span>
                                <Input type="text" className={`block w-full`} placeholder="Entry Price" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">R:R Ratio</span>
                                <Input type="text" disabled className={`block w-full`} placeholder="R:R" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Stop Loss</span>
                                <Input type="text" className={`block w-full`} placeholder="Stop Loss" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Take Profit</span>
                                <Input type="text" className={`block w-full`} placeholder="Take Profit" />
                            </Label>
                        </div>
                        
                        <h3 className="text-md my-3 mb-4">Trade Basics</h3>

                        <div className="grid grid-cols-2 gap-2 w-full">
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Direction</span>
                                <Input type="text" className={`block w-full`} placeholder="buy/sell" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Lot Size</span>
                                <Input type="text" className={`block w-full`} placeholder="Lot Size" />
                            </Label>
                        </div>

                        <h3 className="text-md my-3 mb-4">Quick Notes</h3>
                        <div className="w-full">
                            <Textarea placeholder="Quick notes about the trade..." className="resize-none"></Textarea>
                        </div>

                    </div>
                    <DialogFooter>
                        <Button className={`px-12 bg-green-800 text-white font-medium hover:text-black cursor-pointer`}>Log</Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>


    )
}