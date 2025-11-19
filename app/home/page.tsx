import {columns, Payment} from "@/app/home/columns";
import {DataTable} from "@/components/ui/data-table";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const data: Payment[]= [
    {
        id: "728ed52f",
        amount: 100,
        name: "Kamela Emile",
        dob: "19 Nov. 2025",
        email: "kamelaemile@gmail.com",
    },{
        id: "728ed52f",
        amount: 100,
        name: "Kamela Emile",
        dob: "19 Nov. 2025",
        email: "kamelaemile@gmail.com",
    },{
        id: "728ed52f",
        amount: 100,
        name: "Kamela Emile",
        dob: "19 Nov. 2025",
        email: "kamelaemile@gmail.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        name: "Kamela Emile",
        dob: "19 Nov. 2025",
        email: "kamelaemile@gmail.com",
    },
]

const HomePage = () => {
    return (
        <div className={'container mx-auto py-10 flex flex-col gap-4'}>
            <h4 className={'font-bold justify-center flex'}>Consulter la liste des clients</h4>
            <div className="flex flex-col gap-8">
                <div className={'flex justify-between items-center gap-4'}>
                    <Input className={'h-10 max-w-2/3'} placeholder={'Effectuez une recherche ici...'}/>
                    <Button>Ajouter un client</Button>
                </div>
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default HomePage