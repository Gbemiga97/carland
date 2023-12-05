import { data, variants } from "../utils"
import { motion } from "framer-motion"


const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div 
      variants={variants.fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto">
        {/* brand wrapper */}
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          {
            data.brandsData.map(({img, alt, width, height}, i) => (
            <div key={i}>
            <img
             src={img} 
             alt={alt}
             width={width}
             height={height}
             />
          </div>
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}

export default Brands