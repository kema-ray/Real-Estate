import React from 'react'

import Image from '../assets/img/house-banner.png';

import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Unlock</span> Your Dream Home: Discover Extraordinary Real Estate
          </h1>
          <p className='max-w-[480px] mb-8'>
          Immerse yourself in the convenience of modern living, find your
          ideal location, and discover a place that resonates with your
          vision of home. Whether you're a first-time buyer, a seasoned
          investor, or a dreamer seeking a new beginning, our real estate
          app is your compass to navigate the world of real estate, making
          your dream home a tangible reality.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='banner'/>
        </div>
      </div>
      <Search />
    </section>
  )
}

export default Banner