import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Image src="/about.png" width={500} height={500} alt='' />
    </div>
  )
}

export default page