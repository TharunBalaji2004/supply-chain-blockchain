import "./HeroSection.css"

{/* <section className="py-10">
  <div className="2xl:container mx-auto">
    <div className="w-[90%] mx-auto grid grid-cols-1">

    </div>
  </div>
</section> */}


const HeroSection = () => {
  return (
    <>
      <section className="py-10 bg-black">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2"> 
            <div>
              <h1 className="heading text-white">Bring your blockchain to life with Project X</h1>
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection