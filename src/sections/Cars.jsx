import { Brands, CarSlider } from "../components"

const Cars = () => {
  return (
    <section id="cars" className=" h-screen flex items-center">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  )
}

export default Cars