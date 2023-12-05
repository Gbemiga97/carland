import { Search } from "../components"
import { useSearchContext } from "../context/SearchContext"
import { icons, images, variants } from "../utils"
import { easeInOut, motion } from "framer-motion"


const Hero = () => {

  const {searchActive} = useSearchContext()

  return (
    <section className="h-screen xl:h-[90vh] " id="home" >
      <div className="container mx-auto h-full xl:pt-10">
       {/* text & img wrapper */}
       <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
        {/* text */}
        <div className="text-center xl:max-w-xl xl:text-left mt-32 xl:mt-0">
          <motion.h1
          variants={variants.fadeIn('down', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="h1">
            Explore the Finest 
            <span className="text-accent"> Global </span> 
            Differs
          </motion.h1>
          <motion.p 
                 variants={variants.fadeIn('down', 0.4)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.6 }}
          className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
            Find your ideal ride for any adventure with our diverse range
            of affordable and dependable car rentals
          </motion.p>
          {/* btn */}
          <motion.div 
                 variants={variants.fadeIn('down', 0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{ once: false, amount: 0.8 }}
          className="flex gap-x-3 justify-center xl:justify-start">
            {/* App store btn */}
            <button
            className="btn-cta"
            >
              <img 
              src={icons.ButtonAppSTore} 
              alt="google_play_btn"
              width={132}
              height={36}
              />
            </button>
            {/* Google Play btn */}
            <button
            className="btn-cta"
            >
              <img 
              src={icons.ButtonGooglePlay} 
              alt="google_play_btn"
              width={132}
              height={36}
              />
            </button>
          </motion.div>
        </div>
        
        {/* img */}
        <motion.div 
               variants={variants.fadeIn('up', 0.6)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.6 }}
        className="relative w-full h-full max-w-[50vh] md:max-w-[70vw] xl:max-w-[860px] mt-16 xl:mt-0
        xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48">
          <img 
          src={images.HeroCar} 
          alt="Car"
          className="object-contain "
          />
        </motion.div>
       </div>
      </div>
      {
        searchActive ? (
          <motion.div 
          initial={{y: '-100%'}}
          animate={{y: 0}}
          transition={{ease: easeInOut}}
          className="fixed top-[80px] z-10 w-full max-w-[1920px]">
      <Search />

          </motion.div>
        ) : (
          <div 
          className="-mt-12 w-full max-w-[1300px] mx-auto "
          >
          <motion.div 
          variants={variants.fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
         >
      <Search />
          </motion.div>
          </div>
        )
      }
    </section>
  )
}

export default Hero