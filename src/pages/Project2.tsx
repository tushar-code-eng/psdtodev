import Navbar from "../components/Navbar";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import Body1 from "../components/Body1";
import BodyContainer from "../components/BodyContainer";
import Body2 from "../components/Body2";
import Footer from "../components/Footer";
import HeroBlock from "../components/HeroBlock";
import Body1Mobile from "../components/Body1Mobile";

import './Project2.css'

const Project2 = () => {
  return (
    <>
        <div id="main-conatiner" className="w-full">
        <Navbar />
        <Hero1 />
        <div className="md:hidden w-full my-10">
          <HeroBlock />
        </div>
        <Hero2 />
        <div className="hidden md:block">
          <Body1 />
        </div>
        <div className="md:hidden">
          <Body1Mobile />
        </div>
        <BodyContainer />
        <Body2 />
        <Footer />
      </div>
    </>
  )
}

export default Project2
