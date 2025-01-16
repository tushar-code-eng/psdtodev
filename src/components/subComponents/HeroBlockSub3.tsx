const HeroBlockSub3 = ({
  number,
  setNumber,
}: {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="w-full">
      <div className="w-full xl:flex items-center justify-center">
        <div className="w-3/4 mx-auto xl:w-full my-2 xl:my-0 ">
          <input
            className="w-full border-4 xl:border p-2"
            type="text"
            placeholder="Nome"
          />
        </div>
        <div className="w-3/4 mx-auto xl:w-full my-2 xl:my-0  ">
          <input
            className="w-full border-4 xl:border p-2"
            type="text"
            placeholder="Cognome"
          />
        </div>
      </div>
      <div className="w-full xl:flex items-center justify-center xl:mt-4">
        <div className="w-3/4 mx-auto xl:w-full my-2 xl:my-0  ">
          <input
            className="w-full border-4 xl:border p-2"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="w-3/4 mx-auto xl:w-full my-2 xl:my-0  ">
          <input
            className="w-full border-4 xl:border p-2"
            type="text"
            placeholder="Telefono"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 font-bold">
        <button
          onClick={() => setNumber(number - 1)}
          className={`border-[#00bd0e] text-[#00bd0e] border px-6 py-2 rounded`}
        >
          VAI INDIETRO
        </button>
        <button className="bg-[#00bd0e] text-white px-6 py-2 rounded">
          VAI AVANTI
        </button>
      </div>
    </div>
  );
};

export default HeroBlockSub3;
