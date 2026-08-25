import React from 'react'
import {Loader2} from 'lucide-react'

function Spinner() {
  return (
    <div className='animate-spin'>
      <Loader2 size={`40`} />
    </div>
  )
}

export default Spinner