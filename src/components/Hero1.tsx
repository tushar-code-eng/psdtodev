import HeroBlock from "./HeroBlock";
import hero from "/images/hero.png";
import tick from "/images/tick.png";

const Hero1 = () => {
  return (
    <div>
      <div
        id="hero"
        className="bg-cover bg-no-repeat h-[40vh] lg:h-[50vh] xl:h-[70vh]"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className=" lg:w-1/2 h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-3xl lg:text-6xl text-center font-extrabold">
              <span className="text-white">
                <span className="text-[#00bd0e]">Prestito</span> in
              </span>{" "}
              <br />
              <span className="text-white">convenzione.</span>
            </div>
            <div className="text-white lg:text-xl font-bold ">
              Richiedi ora il tuo preventivo gratuito.
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start gap-2 lg:text-xl font-semibold text-white">
                <img className="w-8" src={tick} alt="" />
                <span>LIQUIDITÀ IMMEDIATA</span>
              </div>
              <div className="flex items-center justify-start gap-2 lg:text-xl font-semibold text-white">
                <img className="w-8" src={tick} alt="" />
                <span>NESSUNA GARANZIA PERSONALE</span>
              </div>
              <div className="flex items-center justify-start gap-2 lg:text-xl font-semibold text-white">
                <img className="w-8" src={tick} alt="" />
                <span>NESSUNA GARANZIA PERSONALE</span>
              </div>
            </div>
          </div>
          <div className="hidden xl:absolute xl:block w-[450px] bg-white rounded-xl top-[56vh] right-36 py-4 shadow-lg shadow-gray-600">
            <HeroBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
