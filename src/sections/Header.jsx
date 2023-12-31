
//import query hook
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-scroll"
import { data, icons } from "../utils"

//icons
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { SearchMobile } from "../components"
import { useSearchContext } from "../context/SearchContext"


const Header = () => {

  const {setSearchActive} = useSearchContext()


  const [header, setHeader] = useState(false)
  const [nav, setNav] = useState(false)


  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)'
  })

  useEffect(() => {
    const handleScroll = () => {
      //header
      if (window.scrollY > 40) {
        setHeader(true); 
      } else {
        setHeader(false)
      }

      //search
      if(window.scrollY > 700) {
        setSearchActive(true)
      } else {
        setSearchActive(false)
      }
    }

    //add event listener
    window.addEventListener('scroll', handleScroll);

    //remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  

  return (
    <header
    className={`${header ? 'bg-white shadow-md py-2' : 'bg-transparent  shadow-none py-4'}
     w-full fixed max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className='flex justify-between items-center px-4'>
          {/* logo */}
          <Link
          to="home"
          smooth={desktopMode}
          spy={true}
          className="cursor-pointer"
          >
          <img 
          src={icons.Logo}
           alt="logo"
           width={194}
           height={64}
           />
          </Link>
          {/* nav open menu */}
          <div
          onClick={() => setNav(prev => !prev)}
          className="cursor-pointer xl:hidden">
            {
              nav ? (<BiX className="text-4xl" />
              ) : (
              <BiMenuAltRight className="text-4xl" />)
            }
          </div>
        </div>
        {/* nav */}
        <nav className={`${nav ? 'max-h-max py-8 px-4 xl:px-0' : 'max-h-0 xl:max-h-max'}
        flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium
        xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all
        duration-150 text-center xl:text-left uppercase text-sm xl:text-[0.9rem] xl:normal-case`}>
          {
            data.navData.map(({name, link}, i) => (
            <Link 
            key={i}
            onClick={() => setNav(false)}
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            to={link}
            className="cursor-pointer">
                {name}
          </Link>
            ))
          }
                <Link 
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            to='/'
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto">
                See all cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  )
}

export default Header