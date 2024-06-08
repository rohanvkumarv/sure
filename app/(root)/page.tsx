"use client"

import Article from './_components/Article'
import Cta from './_components/Cta'
import Features from './_components/Features'
import Hero from './_components/Hero'
import Stats from './_components/Stats'
// import PrivacyPolicy from '../policy/_components/PrivacyPolicy'

const page = () => {
  return (
    <main className='space-y-40 bg-gray-900'>
      <Hero />
      <Features />
      <Stats />
      <Cta />
      <Article />
    
    </main>
  )
}

export default page