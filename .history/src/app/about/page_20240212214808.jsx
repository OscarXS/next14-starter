import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className={styles.imageContainer}></div>
      <Image src="/about.png" alt='' />
    </div>
  )
}

export default page