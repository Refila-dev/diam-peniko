import React from 'react'

const SearchInput = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-5">
      <input type="text" placeholder="Search..." className="border border-gray-300 rounded-lg py-2 px-4" />
      <button className="bg-gray-800 text-gray-200 py-2 px-4 rounded-lg">Tadiavina</button>
    </div>
  )
}

export default SearchInput
