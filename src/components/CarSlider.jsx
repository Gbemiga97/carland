import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { data, variants } from '../utils'


const CarSlider = () => {
  return (
    <motion.div 
    variants={variants.fadeIn('up', 0.4)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.2 }}
    className='container mx-auto'>
      <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 32
        },
        1260: {
          slidesPerView: 3,
          spaceBetween: 32
        },
      }}
      >
        {
          data.carsData.map(({type, name, price, img, info}, i) => (
            <SwiperSlide key={`car${i}`}>
              <div className='max-w-[385px] mx-auto sm:mx-0'>
                <img 
                src={img} 
                alt={name} 
                width={380}
                height={284}
                />
                <div className='flex justify-between'>
                  <div>
                    <p className='text-[13px] text-secondary uppercase'>
                      {type}</p>
                    <h3 className='text-lg uppercase font-bold'>
                      {name}</h3>
                    <h3 className='mb-10 text-accent font-semibold uppercase'>
                      {price}</h3>
                  </div>
                 {/* stars */}
                 <div className='flex gap-x-2 text-accent h-max'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                 </div>
                </div>
                {/* car info */}
                <div className='flex gap-x-3 xl:gap-x-4 w-max mb-10'>
                  {
                    info.map(({text, icon}, i) => (
                      <div 
                      className='flex flex-col items-center'
                      key={`info${i}`}>
                        <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2'>
                          <img 
                          src={icon}
                           alt={text} 
                           width={24}
                           height={24}
                           />
                        </div>
                         <p className='text-[12px] uppercase'>
                          {text}
                         </p>
                      </div>
                    ))
                  }
                </div>
                <button className='btn btn-accent btn-lg'>
                  See details
                </button>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </motion.div>
  )
}

export default CarSlider