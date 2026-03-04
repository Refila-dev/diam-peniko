import React from 'react'
import TononkaloContent from '../components/ui/tononkalo-content'
import SearchInput from '../components/ui/search'

const page = () => {
  return (
    <div className='mt-30'>
      <SearchInput />
      <TononkaloContent />
    </div>
  )
}

export default page
