import React from 'react'
import ArticlesCard from '../../../components/ArticlesCard'

const Articles = () => {
  return (
    <section className='container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10'>
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
    </section>
  )
}

export default Articles