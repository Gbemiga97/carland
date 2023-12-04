import { useSearchContext } from "../context/SearchContext"
import {DateSelection, HoursSelection, LocationSelection} from "."

const Search = () => {

  const {searchActive} = useSearchContext()

  return (
    <div className={`${searchActive ? 'bg-white rounded-none xl:h-[80px]' : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'}
    hidden xl:block w-full relative shadow-lg`}>
      <div className={`${searchActive && 'container mx-auto'} h-full flex`}>
      <LocationSelection />
      <DateSelection />
      <HoursSelection />
      {/* btn */}
      <div className="xl:h-full flex items-center px-6 xl:px-0">
        <button 
        className={`${searchActive ? 'btn btn-lg btn-accent xl:w-[164px]' : 'btn btn-sm btn-accent xl:w-[184px]'}
        `}>
          Search
        </button>
      </div>
      </div>
      </div>
  )
}

export default Search