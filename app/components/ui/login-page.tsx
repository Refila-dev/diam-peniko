import React from 'react'

const LoginPage = () => {
  return (
     <div className="flex w-full flex-col bg-[url('/diampeniko.png')] bg-cover bg-fixed bg-center">
      <div className='bg-[url(/bg.avif)] mx-auto mt-20 rounded-lg p-5 lg:p-10 w-full max-w-lg'>
        <h1 className="text-2xl text-black font-bold text-center">Fidirana</h1>
        <form
          action=""
          className="flex flex-col bg-black/50 dark:bg-black/50 rounded-lg p-10"
        >
          <div className="text-white text-xl">
            <label htmlFor="email">Mailaka</label>
            <input
              className="bg-white w-full p-2 rounded-lg border-2 border-yellow-950 text-black text-sm"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="text-white text-xl">
            <label htmlFor="password">Tenimiafina</label>
            <input
              className="bg-white w-full p-2 rounded-lg border-2 border-yellow-950 text-black text-sm"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div>
            <button className="bg-blue-500 text-white p-2 rounded-lg h-14 w-full hover:bg-blue-900 cursor-pointer mt-10">Hiditra</button>
          </div>
          <div className='text-gray-200 text-sm mt-5 text-center'>
            <p>Tsy manana kaonty ve? <a href="/fidirana/misoratra" className='underline text-blue-500'>Midira eto</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
