import React from 'react'
import PoetyContent from '../components/ui/poety-content'
import SearchInput from '../components/ui/search'

const page = () => {
  return (
    <div className='mt-30'>
      <SearchInput />
      <PoetyContent />
    </div>
  )
}

export default page
