import React from 'react'
import {images} from '../../../constants'
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
        <div className='mt-10 lg:w-1/2'>
            <h1 className='font-roboto text-4xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]'>Read the most interesting articles</h1>
            <p className='text-dark-light mt-4 text-center md:text-xl lg:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis molestias laboriosam, velit deserunt ab suscipit error qui odit mollitia eligendi, dicta ratione laudantium assumenda ut. Deleniti sequi amet facilis iure?</p>
            <div className='flex flex-col gap-y-2.5 mt-10 relative'>
                <div className='relative'>
                <AiOutlineSearch className='left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD] absolute'/>
                    <input className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lf pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4" type="text" placeholder='Search article'/>
                </div>
                <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>Search</button>
            </div>
            <div className='flex mt-4 flex-col lg:flex-row lg:flex-nowrap lg:items-start lg:gap-x-4 lg:mt-7'>
                <span className='text-dark-light font-semibold italic lg:mt-4'>Popular Tags:</span>
                <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3'>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Design</li>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Experience</li>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Interfaces</li>
                </ul>
            </div>
        </div>
        <div className='hidden lg:block lg:1/2'>
            <img className="w-full" src={images.HeroImage} alt="users are reading articles" />
        </div>
    </section>
  )
}

export default Hero