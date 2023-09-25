"use client"
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
     
     <>
   <div className='h-[100vh] w-full bg-gray-400'>
  <Carousel onSlideChange={slideIdx=>console.log(slideIdx)}>
            <div className='sm:h-full h-auto w-full'>
                <Image 
                  src="/Images/slide1.jpg"
                  alt="Slide 1"
                  fill
                  
                  style={{objectFit:"cover"}}
                />
            </div>
        
            <div className='sm:h-full h-auto w-full '>
                <Image 
                  src="/Images/slide2.jpg"
                  alt="Slide 2"
                  fill
                 
                  style={{objectFit:"cover"}}
                />
            </div>
        
            <div className='sm:h-full h-auto w-full'>
                <Image 
                  src="/Images/slide3.jpg"
                  alt="Slide 3"
                  fill
                  
                  style={{objectFit:"cover"}}
                />
            </div>
  </Carousel>
</div>


   </>

    
    </>
  )
}

export default Hero;





