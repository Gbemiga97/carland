import { Menu } from "@headlessui/react"
import { useState } from "react"
import { FaClock } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"

//hours
const hours = ['10:00 AM', '12:00 AM', '14:00 PM', '16:00 PM']

const HoursSelection = () => {

  const [hour, setHour] = useState('10:00 AM')

  return (
    <Menu as='div'
    className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* btn */}
        <Menu.Button
         className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
         <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaClock className="text-accent" />
                <p className="text-[0.9rem] uppercase font-bold">
                Select Hours</p>
              </div>
              <div className="flex  items-center justify-start gap-x-3 xl:ml-6">
              <p className="font-medium text-[13px] text-secondary  ">
              {hour}
               </p>
               <FaArrowRightLong className="text-accent text-[12px] " />
               <p className="font-medium text-[13px] text-secondary  ">
              {hour}
               </p>
              </div>
        </Menu.Button>
        {/* items */}
        <Menu.Items
        className='dropdown-menu shadow-lg absolute -top-72 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2
        xl:-translate-x-0 text-sm  w-full bg-white max-w-[332px] py-6 rounded-[10px]'
        >
       {
        hours.map((hour, i) => (
          <p 
          className="cursor-pointer py-4 text-center hover:bg-gray-50"
          onClick={() => setHour(hour)}
          key={i}>
            {hour}
          </p>
        ))
       }
        </Menu.Items>
      </div>
    </Menu>
  )
}

export default HoursSelection