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
import { Card } from "../ui/card";

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
                    <DialogTitle className={`border-b pb-4`}>Risk Calculator</DialogTitle>
                    <div className="py-3 h-[70vh] overflow-y-auto pr-3">

                        <div className="grid grid-cols-2 gap-2">

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

                            <Select className="w-full block" defaultValue={pair} onValueChange={(e) => setPair(e.target.value)}>
                                <SelectTrigger className={`w-full`}>
                                    Account
                                </SelectTrigger>
                                <SelectContent>
                                    {symbols.map((symbol, idx) => (
                                        <SelectItem key={idx} value={symbol.value}>{symbol.label}</SelectItem>
                                    ))}
                                    <SelectItem value="OTHER">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-10">
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
                        
                        <Card className="my-5 grid gap-y-1 p-3">
                            <div className="flex justify-between">
                                <span>Risk Amount</span>
                                <span>$500</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Units</span>
                                <span>$500</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Standard Lots</span>
                                <span>$500</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Mini Lots</span>
                                <span>$500</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Micro Lots</span>
                                <span>$500</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Pip Value per Lot</span>
                                <span>$500</span>
                            </div>
                        </Card>
                    </div>
                    <DialogFooter>                
                            <Button variant={`outline`} className={`cursor-pointer text-white block mr-2`}>Calculate</Button>
                            <Button className={`cursor-pointer bg-green-700 text-white block`}>Log Trade</Button>        
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>


    )
}