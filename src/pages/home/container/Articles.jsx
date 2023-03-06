import React from 'react'
import ArticlesCard from '../../../components/ArticlesCard'
import {FaArrowRight} from 'react-icons/fa'

const Articles = () => {
  return (
    <section className='container flex flex-col mx-auto px-5 py-10'>
        <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        </div>
        <button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg'>
            <span>More Articles</span>
            <FaArrowRight className='w-3 h-3'/>
        </button>
    </section>
  )
}

export default Articles