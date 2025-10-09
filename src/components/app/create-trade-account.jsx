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

import { Logs, Plus } from "lucide-react"
import { useEffect, useState } from "react";

export default function CreateTradeAccount() {


    return (

        <Dialog>
            <DialogTrigger className="w-full">
                <div
                    tooltip="Create Trade Account"
                    className="border bg-zinc-600 cursor-pointer flex p-1 align-bottom gap-2 rounded-md text-white font-semibold hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
                    <Logs />
                    <span className="mt-0.5">Create Trade Account</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={`border-b pb-4`}>Create Trade Account</DialogTitle>
                    <div className="py-3 h-[70vh] overflow-y-auto pr-3">

                        <div className="mb-4 md:grid md:grid-cols-2 gap-2 w-full">
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Account Name</span>
                                <Input type="text" className={`block w-full`} placeholder="Account Name" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Starting Balance</span>
                                <Input type="text" className={`block w-full`} placeholder="Starting Balance" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Leverage</span>
                                <Select className="w-full block">
                                    <SelectTrigger className={`w-full`}>
                                        Select Leverage
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1:1">1:1</SelectItem>
                                        <SelectItem value="1:10">1:10</SelectItem>
                                        <SelectItem value="1:25">1:25</SelectItem>
                                        <SelectItem value="1:50">1:50</SelectItem>
                                        <SelectItem value="1:100">1:100</SelectItem>
                                        <SelectItem value="1:200">1:200</SelectItem>
                                        <SelectItem value="1:400">1:400</SelectItem>
                                        <SelectItem value="1:500">1:500</SelectItem>
                                        <SelectItem value="1:1000">1:1000</SelectItem>
                                        <SelectItem value="1:2000">1:2000</SelectItem>
                                        <SelectItem value="1:5000">1:5000</SelectItem>
                                        <SelectItem value="1:10000">1:10000</SelectItem>
                                        <SelectItem value="1:20000">1:20000</SelectItem>
                                        <SelectItem value="1:50000">1:50000</SelectItem>
                                        <SelectItem value="1:100000">1:100000</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Currency</span>
                                <Select className="w-full block">
                                    <SelectTrigger className={`w-full`}>
                                        Select Currency
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="USD">USD</SelectItem>
                                        <SelectItem value="EUR">EUR</SelectItem>
                                        <SelectItem value="GBP">GBP</SelectItem>
                                        <SelectItem value="JPY">JPY</SelectItem>
                                        <SelectItem value="AUD">AUD</SelectItem>
                                        <SelectItem value="CAD">CAD</SelectItem>
                                        <SelectItem value="CHF">CHF</SelectItem>
                                        <SelectItem value="NZD">NZD</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Label>
                        </div>

                        <h3 className="text-md my-3 mb-4">Rules</h3>

                        <div className="grid grid-cols-2 gap-2">
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Max Risk % Per Trade</span>
                                <Input type="text" className={`block w-full`} placeholder="e.g. 1%" />
                            </Label>
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Max Daily Loss %</span>
                                <Input type="text" className={`block w-full`} placeholder="e.g. 5%" />
                            </Label>
                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Max Total Loss %</span>
                                <Input type="text" className={`block w-full`} placeholder="e.g. 10%" />
                            </Label>

                            <Label className="mb-3 block">
                                <span className="block w-full pb-2">Profit Target</span>
                                <Input type="text" className={`block w-full`} placeholder="e.g. 10% (optional)" />
                            </Label>
                        </div>

                        <h3 className="text-md my-3 mb-4">Strategy</h3>

                        <div className="mb-3">
                            <div className="flex gap-2 mb-2">
                                <Input type="text" className={`block w-full`} placeholder="Set your strategy" />
                                <Button className={`bg-green-800 text-white font-medium hover:text-black cursor-pointer`}>
                                    <Plus />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Scalping <span className="font-bold cursor-pointer">x</span></span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Day Trading <span className="font-bold cursor-pointer">x</span></span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Swing Trading <span className="font-bold cursor-pointer">x</span></span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Position Trading <span className="font-bold cursor-pointer">x</span></span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Algorithmic Trading <span className="font-bold cursor-pointer">x</span></span>
                            </div>
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