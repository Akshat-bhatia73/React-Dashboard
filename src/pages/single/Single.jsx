import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Chart from '../../components/Chart'
import TransactionTable from '../../components/tables/TransactionTable'


const Single = () => {

  return (
    <div className={`flex scroll-smooth`}>
        <Sidebar className="fixed" />

      <div className={`single pb-6 flex flex-1 relative h-screen overflow-y-scroll bg-main-text/20 dark:bg-dark`}>

        <div className="flex-1">
          <Navbar />
          <div className="px-5 mt-8 flex flex-col gap-5">
            <div className="top flex-1 grid grid-cols-6 gap-5">
              <div className="profileInfo col-span-6 md:col-span-3 lg:col-span-2 flex flex-col gap-5 p-3 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text rounded-md">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img src="https://i.ibb.co/pR2DQtZ/1.png" className='mt-3 h-28 w-28 rounded-xl' alt="" />
                  <h1 className='name text-xl font-bold'>Alyssa Violet</h1>
                  <span className="tag text-sm text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full font-bold">Customer</span>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <h1 className="title text-dark/70 dark:text-main-text/70 text-xl">Details</h1>
                  <hr className='w-3/6 md:w-full border-dark/20 dark:border-main-text/20' />
                  <p className="font-bold text-dark/80 dark:text-main-text/60 text-sm">Username:  <span className='text-dark/90 dark:text-main-text/90 '>Alyssa Violet</span></p>
                  <p className="font-bold text-dark/80 dark:text-main-text/60 text-sm">Email:  <span className='text-dark/90 dark:text-main-text/90 '>alyssa.work@gmail.com</span></p>
                  <p className="font-bold text-dark/80 dark:text-main-text/60 text-sm">Status:  <span className='text-green-500 bg-green-500/10 rounded-md px-2'>Active</span></p>
                  <p className="font-bold text-dark/80 dark:text-main-text/60 text-sm">Tax-Id:  <span className='text-dark/90 dark:text-main-text/90 '>687J-8I29-AF7468</span></p>
                  <p className="font-bold text-dark/80 dark:text-main-text/60 text-sm">Country:  <span className='text-dark/90 dark:text-main-text/90 '>Japan</span></p>
                  <div className="buttons flex gap-3">
                    <button className='text-green-500 w-14 py-1 rounded font-bold bg-green-500/10 hover:bg-green-500/20'>Edit</button>
                    <button className='text-red-500 w-14 py-1 rounded font-bold bg-red-500/10 hover:bg-red-500/20'>Block</button>
                  </div>

                </div>
              </div>
              <div className="activity col-span-6 md:col-span-3 lg:col-span-4">
                <Chart title='Activity' timePeriod='( This Month )' />
              </div>
            </div>
          <div className="charts mb-8 grid grid-cols-6 gap-10">
              <TransactionTable />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single