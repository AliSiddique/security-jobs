import Jobs from '@/components/Jobs'
import Hero from '@/components/ui/Hero'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='0'>
      <Hero />
      <Jobs />
    </div>
  )
}
