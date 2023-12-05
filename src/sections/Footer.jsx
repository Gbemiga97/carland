import {FaPhone, FaEnvelope} from 'react-icons/fa6'

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { icons, variants } from '../utils'
import { Copyright } from '../components'


const Footer = () => {
  return (
    <footer className='pt-20 bg-white z-20' id='contact'>
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
        variants={variants.fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
         className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
          <div className='flex flex-col flex-1 gap-y-8'>
            {/* logo */}
            <Link 
            to='home'
            smooth={true}
            spy={true}
            className='cursor-pointer'
            >
            <img 
            src={icons.Logo} 
            alt="logo" 
            width={200}
            height={200}
            />
            </Link>
            {/* text */}
            <p className='text-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* phone & email */}
            <div className='flex flex-col gap-y-4 font-semibold'>
              {/* phone */}
              <div className='flex items-center gap-x-[10px]'>
                <FaPhone />
                <p className='font-medium'>
                  (123)456-7890</p>
              </div>
              {/* email */}
              <div className='flex items-center gap-x-[10px]'>
                <FaEnvelope />
                <p className='font-medium'>
                  office@carland.com</p>
              </div>
            </div>
          </div>
          {/* links */}
          <div className='flex-1 flex flex-col xl:items-center'>
            <div>
              <h3 className='h3 font-bold mb-8'>
                Company
              </h3>
              <ul className='flex flex-col gap-y-4 font-semibold'>
                <li>New York</li>
                <li>Careers</li>
                <li>Mobile</li>
                <li>Blog</li>
                <li>How we work</li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8'>
              Working Hours
            </h3>
            <div className='flex flex-col gap-y-4'>
              <div className='flex gap-x-2'>
                <p className='text-secondary'>
                  Mon-Fri:</p>
                <p
                className='font-semibold'
                >
                  09:00AM - 09:00 PM</p>
              </div>
              <div className='flex gap-x-2'>
                <p className='text-secondary'>
                  Sat:</p>
                <p
                className='font-semibold'
                >
                  09:00AM - 07:00 PM</p>
              </div>
              <div className='flex gap-x-2'>
                <p className='text-secondary'>
                  Sun:</p>
                <p
                className='font-semibold'
                >
                  Closed</p>
              </div>
            </div>
          </div>

          {/* newsletter */}
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8'>
              Newsletter
            </h3>
            <p className='mb-9 text-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* form */}
            <form className='flex gap-x-2 h-14'>
               <input 
               placeholder='Your email'
               type="text" 
               className='outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent'
               />
               <button className='btn btn-sm btn-accent w-24'>
                Submit</button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer