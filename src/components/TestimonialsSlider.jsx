import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper/modules'

import { motion } from 'framer-motion'


import { FaQuoteLeft } from 'react-icons/fa'
import { data, variants } from '../utils'

const TestimonialsSlider = () => {
  return (
    <motion.div
    variants={variants.fadeIn('up', 0.4)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.6 }}
    className='container mx-auto'
    >
      <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true
      }}
      modules={[Pagination]}
      className='h-[450px] xl:h-[400px]'
      >
        {
          data.testimonialsData.map(({msg, name, avatar, job}, i) => (
            <SwiperSlide key={i}>
              <div className='flex flex-col justify-center items-center text-center'>
                <FaQuoteLeft className='text-7xl text-accent mb-6' />
                <p className='text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium '>
                  {msg}
                </p>
                <img
                 src={avatar}
                 alt={name}
                 width={64}
                 height={64}
                 className='mb-4'
                 />
                 <p className='text-lg font-medium'>
                  {name}
                 </p>
                 <p className='text-lg font-medium'>
                  {job}
                 </p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </motion.div>
  )
}

export default TestimonialsSlider