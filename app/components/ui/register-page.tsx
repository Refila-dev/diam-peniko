import React from 'react'

const RegisterPage = () => {
  return (
    <div className="flex flex-col bg-[url('/diampeniko.png')] bg-cover bg-fixed bg-center font-mono">
      <div className='bg-[url(/bg.avif)] mx-auto mt-20 rounded-lg p-5 lg:p-10 w-full max-w-lg'>
        <h1 className="text-2xl text-black font-bold text-center">Fisoratana anarana</h1>
        <form
          action=""
          className="flex flex-col bg-black/50 dark:bg-black/50 rounded-lg p-10"
        >
            <div className="text-white">
              <label htmlFor="name">Anarana</label>
              <input
              className="bg-white w-full p-2 rounded-lg border-2 border-yellow-950 text-black text-sm"
                placeholder="Anarana"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="text-white">
              <label htmlFor="lastname">Fanampiny</label>
              <input
                className="bg-white w-full p-2 rounded-lg border-2 border-yellow-950 text-black text-sm"
                placeholder="Fanampiny"
                type="text"
                id="lastname"
                name="lastname"
              />
            </div>
          <div className="flex flex-col justify-center items-center text-white text-center">
            <label htmlFor="birthDate">Daty nahaterahana</label>
            <input
              className="bg-white text-black text-sm w-[200px] p-2 rounded-lg border-2 border-yellow-950"
              type="date"
              id="birthDate"
              name="birthDate"
            />
          </div>
          <div className="text-white">
            <label htmlFor="email">Mailaka</label>
            <input
              className="bg-white w-full p-2 rounded-lg border-2 border-yellow-950 text-black text-sm"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="text-white">
            <label htmlFor="password">Tenimiafina</label>
            <input
              className="bg-white w-full p-2 rounded-lg border-2 border-yellow-950 text-black text-sm"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className='text-gray-200 text-sm mt-5 font-sans'>
            <p>Alohan'ny hisoratana anarana, vakio ireo fitsipika mifehy ny mpikambana <a href="" className='text-blue-500'>fitsipika fifampifehezana eto amin'ny tranokala</a></p>
            <input type="checkbox" name="terms" id="terms" />
          </div>
          <div>
            <button className="bg-blue-500 text-white p-2 rounded-lg h-14 w-full hover:bg-blue-900 cursor-pointer">Alefa</button>
          </div>
          <div className='text-gray-200 text-sm mt-5 text-center font-sans'>
            <p>Efa manana kaonty ve? <a href="/fidirana/miditra" className='underline text-blue-500'>Midira eto</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage
