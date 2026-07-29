import React from 'react'

function Avatar({src, alt, className}) {
  return (
    <div>
      <img className={`w-full object-cover ${className}`} src={src} alt={alt} />
    </div>
  )
}

export default Avatar