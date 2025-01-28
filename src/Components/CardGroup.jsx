"use client"
import React from 'react'

import StopCard from './StopCard'

import FromCard from './FormCard'
import GrowCard from './GrowCard'

const CardGroup = () => {
  return (
    <section className='cardGroup'>

<StopCard/>

<FromCard/>

<GrowCard/>
    </section>
  )
}

export default CardGroup
