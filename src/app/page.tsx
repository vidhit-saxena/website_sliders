
import Head from "next/head";
import ImageSlider from "./components/ImagesSlider/ImageSlider";
import TopEventSlider from "./components/TopEventSlider/TopEventSlider";
import UpcomingEventsSlider from "./components/UpcomingEventsSlider/UpcomingEventsSlider";
import ContactUs from "./components/ContactUs/ContactUs"
import NewsletterSignup from "./components/NewsletterSignup/NewsletterSignup"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <>   
    <ImageSlider />
    <TopEventSlider />
    <UpcomingEventsSlider />
    <ContactUs/>
    <NewsletterSignup />
    <Footer />
    </>
  );
}


// <ImageSlider />
//         <div className="bg-black text-white min-h-screen flex items-center justify-center">
//           <TopEventSlider />
//         </div>
//         <div className="bg-black text-white min-h-screen flex items-center justify-center">
//           <UpcomingEventsSlider />
//         </div>