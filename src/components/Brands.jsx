import { data } from "../utils"

const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <div className="container mx-auto">
        {/* brand wrapper */}
        <div>
          {
            data.brandsData.map(({img, alt}, i) => (
            <div key={i}>
            <img
             src={img} 
             alt={alt}
             width={85}
             height={32}
             />
          </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Brands