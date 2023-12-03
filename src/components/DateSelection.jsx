import { useState } from "react"

//headless ui
import { Menu } from "@headlessui/react"

//icons
import {FaCalendarAlt} from 'react-icons/fa'
import {FaArrowRightLong} from 'react-icons/fa6'

//react date
import { DateRange } from 'react-date-range'
import {format, addDays} from "date-fns"

//react date range css
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'





const DateSelection = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])


  return (
    <Menu as='div'
    className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* btn */}
        <Menu.Button
         className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaCalendarAlt className="text-accent" />
                <p className="text-[0.9rem] uppercase font-bold">
                Select Date</p>
          </div>
        </Menu.Button>
        {/* Menu */} 
        <Menu.Items
        className='dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2
        xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]'
        >
       <DateRange
       onChange={(item) => setDate([item.selection])}
       editableDateInputs={true}
       moveRangeOnFirstSelection={false}
       ranges={date}
       rangeColors={['#ed1d24']}
       monDate={addDays(new Date(), 0)}
       />
        </Menu.Items>
      </div>
    </Menu>
  )
}

export default DateSelection