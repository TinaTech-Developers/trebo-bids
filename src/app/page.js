import Hero from "./components/hero";
import WhoWeAre from "./components/whoarewe";
import OurServices from "./components/ourservices";
import OurProcess from "./components/ourprocess";
import Sectors from "./components/sectors";
import Testimonials from "./components/testimonials";
import CallToAction from "./components/calltoaction";
import Testimonials1 from "./components/Test";
export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <OurServices />
      <OurProcess />
      <Sectors />
      <Testimonials />
      <CallToAction />
      {/* <Testimonials1 /> */}
    </>
  );
}
