import Image from 'next/image';

const OneCar = () => {
  return (
    <>
  <div 
  className="container mx-auto px-4 space-y-12">
  <div
  
  className="flex flex-wrap items-center">
    <div className="py-4 w-full lg:w-6/12">
    <Image 
      src="/Images/one.jpg"
      alt=""
      width={600}
      height={400}
    />
    </div>
    <div className="py-4 w-full lg:w-6/12">
      <div className="bg-white lg:-ml-12 lg:pl-12 lg:py-12">
        <h2 className="mb-2 text-primary-500 text-xl">Rental Cars &amp; Much More</h2>
        <h3 className="capitalize font-bold mb-4 text-4xl text-gray-900 xl:text-5xl">Experience a Rental service like never before</h3>
        <div className="bg-primary-500 mb-6 pb-1 w-2/12" />
        <p className="mb-6">Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas est.</p>
        <a href="#" className="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 text-white">Learn More</a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default OneCar;
