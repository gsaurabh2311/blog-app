import React from 'react'
import {images} from '../constants'
import {AiOutlineTwitter, AiFillYoutube, AiFillInstagram, AiFillHeart} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'

const Footer = () => {
  return (
    <section className='container bg-dark-hard'>
    <footer className='container mx-auto grid grid-cols-10 gap-x-5 gap-y-10 px-5 py-10 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10'>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'><h3 className='text-dark-light font-bold md:text-lg'>Product</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>Landing page</li>
            <li>Features</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'><h3 className='text-dark-light font-bold md:text-lg'>Services</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>Documentation</li>
            <li>Design</li>
            <li>Themes</li>
            <li>Illustrations</li>
            <li>UI Kit</li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'><h3 className='text-dark-light font-bold md:text-lg'>Company</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>About</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'><h3 className='text-dark-light font-bold md:text-lg'>More</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>Documentation</li>
            <li>License</li>
            <li>Changelog</li>
          </ul>
        </div>
        <div className='col-span-10 md:order-first md:col-span-4 lg:col-span-2'>
          <img src={images.Logo} alt="logo" className='brightness-0 invert mx-auto md:mx-0' />
          <p className='text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm'>Build a modern and creative website with us.</p>
          <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start'>
            <li><AiOutlineTwitter className='w-6 h-auto' /></li>
            <li><AiFillYoutube className='w-6 h-auto' /></li>
            <li><AiFillInstagram className='w-6 h-auto' /></li>
            <li><FaFacebook className='w-6 h-auto' /></li>
            <li><BsTelegram className='w-6 h-auto' /></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10'>
          <div className='bg-primary text-white p-3 rounded-full'>
            <AiFillHeart className='w-7 h-auto'/>
          </div>
          <p className='text-dark-light italic font-bold'>Copyright &copy; 2023. Crafted with love.</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer