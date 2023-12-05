import { motion } from "framer-motion"
import { icons, images, variants } from "../utils"


const CTA = () => {
  return (
    <section id="contact" className="overflow-hidden  bg-[#b2b7c2]/10 pt-24 xl:pt-48 flex items-center pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2 
              variants={variants.fadeIn('right', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="h2">
                Download our App and hit the road with ease
                </motion.h2>
                <motion.p
                variants={variants.fadeIn('right', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Repellat, deleniti hic. Ab inventore ea ratione?
                  Lorem ipsum dolor sit amet.
                </motion.p>
                {/* btn */}
                <motion.div
                variants={variants.fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start">
                  <button className="btn-cta">
                    <img 
                    src={icons.ButtonGooglePlay} 
                    alt="google_play_button"
                    width={132}
                    height={36}
                    />
                  </button>
                  <button className="btn-cta">
                    <img 
                    src={icons.ButtonAppSTore} 
                    alt="app_store_button"
                    width={132}
                    height={36}
                    />
                  </button>
                </motion.div>
            </div>
          </div>

          {/* image */}
          <motion.div
          variants={variants.fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 flex justify-center order-1 md:order-none ">
            <img 
            src={images.Phone} 
            alt="phone"
            width={320}
            height={640}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA