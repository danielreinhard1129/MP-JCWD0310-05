import { PersonStandingIcon } from "lucide-react"


const DashboardCustomer = () => {
    return (
        <main className='relative'>
            <section className="grid grid-cols-7">
                <div className="col-span-2 min-w-full h-screen sticky top-0 border flex flex-col gap-5 pt-6 px-5">
                    <div className='h-24 border rounded-sm flex'>
                        <div className='h-full aspect-square'>
                            <PersonStandingIcon className='h-full w-full' />
                        </div>
                        <div className='w-full my-auto px-4'>
                            <p>Username</p>
                            <p>Role Account</p>
                            <p>Point Balance</p>
                        </div>
                    </div>
                    <h1 className="font-bold text-base">Coupon and Voucher</h1>
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-24 bg-slate-400 rounded-md">
                            <p className="text-center align-middle">Voucher 1</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 min-h-screen bg-slate-500 p-5">
                    <div className="flex flex-col gap-4 mx-auto justify-center">
                        <h1 className="font-bold text-xl">Your Tickets</h1>
                        <div className="flex gap-4">
                            <div className="w-40 h-40 bg-slate-400 rounded-md">
                                <p className="text-center align-middle">Ticket 1</p>
                            </div>
                            <div className="w-40 h-40 bg-slate-400 rounded-md">
                                <p className="text-center align-middle">Ticket 1</p>
                            </div>
                            <div className="w-40 h-40 bg-slate-400 rounded-md">
                                <p className="text-center align-middle">Ticket 1</p>
                            </div>
                        </div>
                        <h1 className="font-bold text-xl">Order History</h1>
                        <div className="w-full h-40 bg-slate-400 text-center rounded-md">
                            Table Order History
                        </div>

                    </div>

                </div>
            </section>
        </main>

    )
}

export default DashboardCustomer