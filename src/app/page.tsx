import Head from "next/head";
import ImageSlider from "./components/ImagesSlider/ImageSlider";
import TopEventSlider from "./components/TopEventSlider/TopEventSlider";
import UpcomingEventsSlider from "./components/UpcomingEventsSlider/UpcomingEventsSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Infinite Image Slider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <ImageSlider />
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          <TopEventSlider />
        </div>
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          <UpcomingEventsSlider />
        </div>
      </main>
    </>
  );
}
