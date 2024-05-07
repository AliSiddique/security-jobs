"use client";
import { useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {}

export default function page({}: Props) {
    const search = useSearchParams()
    const query = search.get('search')
    console.log(query)
  return (
    <div>page</div>
  )
}