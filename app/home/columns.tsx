"use client"

import { ColumnDef } from "@tanstack/react-table"
import {Edit, Eye, Trash} from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    name: string
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Nom",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "dob",
        header: "Date - Lieu de naissance",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "actions",
        cell: ({ row }) => {

            return <div className="flex items-center gap-2 text-right font-medium">
                <Eye className={'size-5'}/>
                <Edit className={'size-5'}/>
                <Trash className={'size-5 text-red-600'}/>
            </div>
        },
    },
]