import React from 'react'
import spinner from './assets/Spinner.gif'

function Spinner () {
  return (
    <div className='w-100'>
      <img
        width={180}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner
