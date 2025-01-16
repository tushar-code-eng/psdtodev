import HeroBlock from "./HeroBlock";
import hero from "/images/hero.png";
import tick from "/images/tick.png";

const Hero1 = () => {
  return (
    <div>
      <div
        id="hero"
        className="relative "
        // style={{ backgroundImage: `url(${hero})` }}
      >
        <img className="w-full" src={hero} alt="" />
        <div className="h-full flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-24 xl:top-10">
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 ">
            <div className=" sm:text-4xl lg:text-6xl xl:text-7xl text-center font-extrabold b">
              <span className="text-white">
                <span className="text-[#00bd0e]">Prestito</span> in
              </span>{" "}
              <br />
              <span className="text-white">convenzione.</span>
            </div>
            <div className="text-white text-[8px] sm:text-sm lg:text-xl xl:text-2xl font-bold ">
              Richiedi ora il tuo preventivo gratuito.
            </div>
            <div className="flex flex-col gap-1 sm:gap-3 lg:gap-6 mt-2 sm:mt-5">
              <div className="flex items-center justify-start gap-2 text-[8px] sm:text-sm lg:text-xl xl:text-2xl font-semibold text-white">
                <img className="w-4 sm:w-6 lg:w-8 xl:w-10" src={tick} alt="" />
                <span>LIQUIDITÀ IMMEDIATA</span>
              </div>
              <div className="flex items-center justify-start gap-2 text-[8px] sm:text-sm  lg:text-xl xl:text-2xl font-semibold text-white">
                <img className="w-4 sm:w-6 lg:w-8 xl:w-10" src={tick} alt="" />
                <span>NESSUNA GARANZIA PERSONALE</span>
              </div>
              <div className="flex items-center justify-start gap-2 text-[8px] sm:text-sm  lg:text-xl xl:text-2xl font-semibold text-white">
                <img className="w-4 sm:w-6 lg:w-8 xl:w-10" src={tick} alt="" />
                <span>NESSUNA GARANZIA PERSONALE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:absolute md:block w-[20rem] xl:w-[25rem] bg-white rounded-xl top-[42vh]  lg:top-[45vh] right-10 xl:top-[55vh] xl:right-36 py-1 xl:py-4 shadow-lg shadow-gray-600">
          <HeroBlock />
        </div>
      </div>
    </div>
  );
};

export default Hero1;
