import Cards from "@/Components/Cards";
import Ceo from "@/Components/Ceo";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
// import Test from "@/Components/Test"
import Navbar from "@/Components/Navbar";
import OneCar from "@/Components/OneCar";

import WhatsAppButton from "@/Components/WhatsAppButton";


export default function page ()
{
  return (

    <>
    <Navbar/>
    {/* <Test/> */}
    <Hero/>
    <Cards/>
    <OneCar/>
    <WhatsAppButton/>
    <Ceo/>
    <Footer/>
    </>

    
  )
}


