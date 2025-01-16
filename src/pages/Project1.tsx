import './Project1.css'

const Project1 = () => {
  return (
    <div className="main-container">
      <div className="second-container w-full md:h-screen cover object-contain overflow-hidden flex gap-6 md:flex-row flex-col items-center justify-center">
        <img
          className="mt-4 md:absolute md:transform-translate-x-1/2 md:top-10 md:left-10 "
          src="images1/logo1.png"
          alt="Logo Image"
        />
        <div className="m-2 bg-black bg-opacity-85 flex flex-col md:flex-row items-center justify-center gap-4 md:w-[90%] lg:w-[70%] xl:w-1/2 text-white p-5">
          <div className="flex flex-col items-center justify-center md:w-1/2 h-full text-4xl font-bold">
            <div className="text-center">GET EXCLUSIVE OFFERS!</div>
            <div className="text-center">
              <h1 className="text-8xl">100</h1>
              <h2>FREE SPINS</h2>
            </div>
          </div>
          <div className="md:w-1/2 h-full flex flex-col items-center justify-center gap-4 p-2">
            <div className="font-bold text-2xl text-center">
              <div>FREE FOR ALL PLAYERS!</div>
              <div>No Deposite Required!</div>
            </div>
            <div className="w-full flex items-center justify-center">
              <input
                className="px-4 py-3 rounded-md w-4/5 bg-transparent border"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="text-center text-sm">
              <p>
                By claiming "Free Spins" you accept to the <br />{" "}
                <u className="cursor-pointer">Terms & Conditions</u>
                and <u className="cursor-pointer">Privacy Policy</u>
              </p>
            </div>
            <div
              className="cursor-pointer rounded-2xl bg-pink-500"
              style={{ boxShadow: "0 0 10px 5px rgb(214, 214, 33)" }}
            >
              <div className=" text-md font-bold p-2 text-center">
                <div className="leading-none">CLAIM YOUR</div>
                <div className="text-3xl leading-none">100 FREE </div>
                <div className="leading-none">SPINS NOW!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full bg-[#2E1445] m-2 md:m-0 flex flex-col items-center sm:flex-row sm:items-center sm:justify-center text-white gap-8 p-5">
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-center gap-4 p-4">
          <div className="flex items-center justify-center gap-2">
            <div className="text-8xl font-bold">1</div>
            <div className="text-center">
              <div className="text-2xl leading-none">ENTER EMAIL</div>
              <div className="text-md">to sign up</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-8xl font-bold">2</div>
            <div className="text-center">
              <div className="text-2xl leading-none">GET BONUS</div>
              <div>in your email</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-8xl font-bold">3</div>
            <div className="text-center">
              <div className="text-2xl leading-none">PLAY FOR FREE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full mx-2 md:m-0 bg-slate-900 h-6"></div>
      <div className="md:w-full mx-2 md:m-0 bg-black p-4">
        <div className="flex-wrap flex items-center justify-center gap-6 text-white">
          <div className="w-44">
            <img src="/images1/logo1.png" alt="" />
          </div>
          <div className="text-center">
            © Copyright 2023 Bonus Gem <br />
            <u className="cursor-pointer">Terms & Conditions</u> <br />{" "}
            <u className="cursor-pointer">Privacy Policy</u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
