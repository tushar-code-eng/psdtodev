const HeroBlockSub1 = ({
  number,
  setNumber,
}: {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className=" w-full">
      <div className="font-bold text-xl text-center my-4 xl:my-0">
        Seleziona la cifra desiderata
      </div>
      <div className="flex flex-col  gap-4 mb-4 w-full">
        <div className="flex w-full gap-5 items-center justify-around xl:justify-center">
          <div
            onClick={() => setNumber(number + 1)}
            className="rounded  overflow-hidden border-2 py-2 px-10 text-md font-bold hover:bg-[#00bd0e] hover:text-white cursor-pointer transition ease"
          >
            10000€
          </div>
          <div
            onClick={() => setNumber(number + 1)}
            className="rounded  overflow-hidden border-2 py-2 px-10 text-md font-bold hover:bg-[#00bd0e] hover:text-white cursor-pointer transition ease"
          >
            20000€
          </div>
        </div>
        <div className="flex gap-5 items-center justify-around xl:justify-center">
          <div
            onClick={() => setNumber(number + 1)}
            className="rounded  overflow-hidden border-2 py-2 px-10 text-md font-bold hover:bg-[#00bd0e] hover:text-white cursor-pointer transition ease"
          >
            30000€
          </div>
          <div
            onClick={() => setNumber(number + 1)}
            className="rounded  overflow-hidden border-2 py-2 px-10 text-md font-bold hover:bg-[#00bd0e] hover:text-white cursor-pointer transition ease"
          >
            40000€
          </div>
        </div>
        <div className="flex gap-5 items-center justify-around xl:justify-center">
          <div
            onClick={() => setNumber(number + 1)}
            className="rounded  overflow-hidden border-2 py-2 px-10 text-md font-bold hover:bg-[#00bd0e] hover:text-white cursor-pointer transition ease"
          >
            50000€
          </div>
          <div
            onClick={() => setNumber(number + 1)}
            className="rounded  overflow-hidden border-2 py-2 px-10 text-md font-bold hover:bg-[#00bd0e] hover:text-white cursor-pointer transition ease"
          >
            60000€
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlockSub1;
