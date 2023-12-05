
import { motion } from "framer-motion"

import {MdHandshake, MdKey, MdTrendingUp} from 'react-icons/md'
import { images, variants } from "../utils"

const Why = () => {
  return (
    <section id="why" className="section flex items-center">
      <div className="container mx-auto">
        <motion.h2
          variants={variants.fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        className="h2 text-center">
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p 
          variants={variants.fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        className="max-w-[630px] text-center mx-auto mb-2">
          Our dedication to providing exceptional service sets us apart from 
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every intersection.
        </motion.p>
        {/* car image */}
        <motion.div 
          variants={variants.fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        className="hidden md:flex justify-center mb-6 xl:mb-2">
          <img 
          src={images.WhyCar}
           alt="car" />
        </motion.div>
        {/* grid items */}
        <motion.div 
             variants={variants.fadeIn('up', 0.8)}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount: 0.4 }}
        className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[1.8rem]">
          {/* item 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none
          p-2 xl:p-0 ">
            <MdKey className="text-[2.4rem] text-accent mb-4" />
            <h3 className="h3">
              Rent simply and quickly</h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding. 
            </p>
          </div>

           {/* item 3 */}
           <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none
          p-2 xl:p-0 ">
            <MdTrendingUp className="text-[2.4rem] text-accent mb-4" />
            <h3 className="h3">
             Modern & well maintained vehicles</h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding. 
            </p>
          </div>

           {/* item 3 */}
           <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none
          p-2 xl:p-0 ">
            <MdHandshake className="text-[2.4rem] text-accent mb-4" />
            <h3 className="h3">
            Prompt and flexible services
             </h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Why