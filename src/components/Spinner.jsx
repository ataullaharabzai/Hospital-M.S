import React from 'react'
import {Loader2} from 'lucide-react'

function Spinner() {
  return (
    <div className='w-full h-screen'>
      <Loader2 size={`40`} className='animate-spin' />
    </div>
  )
}

export default Spinner