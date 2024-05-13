
import FilterEvent from '../components/FilterEvent/page'
import MoreEvents from '../components/MoreEvents/page'
import Link from 'next/link'
import Image from 'next/image'
import { PersonIcon } from '@radix-ui/react-icons'

const DashboardOrganizer = () => {
  return (
    <main className='relative'>
      <section className="grid grid-cols-7">
        <div className="col-span-2 min-w-full h-screen sticky top-0 border flex flex-col gap-5 px-10 pt-6">
          <div className='h-24 border rounded-sm flex'>
            <div className='h-full aspect-square'>
              <PersonIcon className='h-full w-full' />
            </div>
            <div className='w-full my-auto px-4'>
              <p>Username</p>
              <p>Role Account</p>
              <p>Review</p>
            </div>
          </div>
          <h1 className="font-bold text-base">Selected Event</h1>
          <div className='flex flex-col gap-4'>
            <div className="w-full aspect-square bg-slate-400 rounded-md">
              <p className="text-center align-middle">Voucher 1</p>
            </div>
            <div className="w-full h-10 bg-blue-400 rounded-md">
              <p className="text-center align-middle">Edit Event Button</p>
            </div>
          </div>
        </div>
        <div className="col-span-5 min-h-screen bg-slate-500 p-5">
          <div className="flex flex-col gap-4 mx-auto justify-center">
            <h1 className="font-bold text-xl">Your Events</h1>
            <div className="flex gap-4">
              <div className="w-40 h-40 bg-slate-400 rounded-md">
                <p className="text-center align-middle">Event 1</p>
              </div>
              <div className="w-40 h-40 bg-slate-400 rounded-md">
                <p className="text-center align-middle">Event 2</p>
              </div>
              <div className="w-40 h-40 bg-slate-400 rounded-md">
                <p className="text-center align-middle">Event 3</p>
              </div>
              <div className="w-40 h-40 bg-slate-400 rounded-md">
                <p className="text-center align-middle">Event 4</p>
              </div>
              <div className="w-40 h-40 bg-slate-400 rounded-md">
                <p className="text-center align-middle">Event 5</p>
              </div>
            </div>
            <div className='w-full h-0.5 bg-white'></div>
            <h1 className="font-bold text-xl">Transactions</h1>
            <div className="w-full h-40 bg-slate-400 text-center rounded-md">
              Table Transactions Approval
            </div>
            <h1 className="font-bold text-xl">Registrants</h1>
            <div className="w-full h-40 bg-slate-400 text-center rounded-md">
              Table Registrants
            </div>
            <h1 className="font-bold text-xl">Analysis</h1>
            <div className="w-full h-40 bg-slate-400 text-center rounded-md">
              Table Analysis
            </div>

          </div>

        </div>
      </section>
    </main >

  )
}

export default DashboardOrganizer