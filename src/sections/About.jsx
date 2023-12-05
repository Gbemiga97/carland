import { 
  MdOutlineMapsHomeWork, 
  MdOutlineBuildCircle, 
  MdOutlineDirectionsCar } from 'react-icons/md'


import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { images, variants } from '../utils'

const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  return (
   <section ref={ref} id="about" className='section flex items-center'>
    <div className="container mx-auto">
      <div className='flex flex-col xl:flex-row xl:justify-between items-center text-center xl:items-start xl;:text-start'>
        {/* image */}
        <motion.div
        variants={variants.fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
        className='flex-1 mb-8 xl:mb-0'>
          <img 
          src={images.AboutCar}
           alt="car"
           width={600}
           height={448}
           className='rounded-[20px]'
           />
        </motion.div>
        
        {/* text & stats */}
        <div className='flex-1 flex xl:justify-center items-center '>
          <div className='xl:max-w-[517px]'>
            <motion.h2
              variants={variants.fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
             className='h2'>
              Car services simplified</motion.h2>
            <motion.p 
              variants={variants.fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            className='mb-[42px] max-w-md'>
              Rent, Choose, and repair with ease. Our conventional Locations,
              diverse car types, and reliable repair points ensure seamless car experience
            </motion.p>
            {/* stats */}
            <motion.div 
              variants={variants.fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            className='flex items-center gap-x-8 mb-12 justify-center xl:justify-start'>
              {/* car types */}
              <div className='flex flex-col items-center xl:items-start w-[100px]'>
                <MdOutlineDirectionsCar className='text-5xl text-accent mb-2' />
                <div className='text-3xl font-black mb-2'>
                  {
                    inView ? (
                    <CountUp 
                    start={0}
                    end={50}
                    duration={3}
                    delay={1}
                    /> 
                    ) : null
                  }+
                </div>
                <p className='uppercase text-[13px] font-semibold text-secondary'>
                  Car <br /> types
                </p>
              </div>
              
               {/* rental outlets */}
               <div className='flex flex-col items-center xl:items-start w-[100px]'>
                <MdOutlineMapsHomeWork className='text-5xl text-accent mb-2' />
                <div className='text-3xl font-black mb-2'>
                  {
                    inView ? (
                    <CountUp 
                    start={0}
                    end={135}
                    duration={3}
                    delay={1}
                    /> 
                    ) : null
                  }
                </div>
                <p className='uppercase text-[13px] font-semibold text-secondary'>
                  rental <br /> outlet
                </p>
              </div>

               {/* repair points */}
               <div className='flex flex-col items-center xl:items-start w-[100px]'>
                <MdOutlineBuildCircle  className='text-5xl text-accent mb-2' />
                <div className='text-3xl font-black mb-2'>
                  {
                    inView ? (
                    <CountUp 
                    start={0}
                    end={35}
                    duration={3}
                    delay={1}
                    /> 
                    ) : null
                  }
                </div>
                <p className='uppercase text-[13px] font-semibold text-secondary'>
                  Repair <br /> points
                </p>
              </div>
            </motion.div>
            
              {/* btn */}
              <motion.button
                variants={variants.fadeIn('up', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
              className='hidden xl:block bg-accent hover:bg-accent-hover rounded-[1.2rem] 
              w-full h-16 uppercase text-white tracking-[2px] text-[0.7rem] max-w-[184px]'>
                See all cars</motion.button>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About