const HeroBlockSub2 = ({
  number,
  setNumber,
}: {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="">
      <div className="text-center font-bold my-2">
        Rispondi alle seguenti domande
      </div>
      <div className="w-full">
        <div className="w-full border p-2 border-slate-400 rounded-xl">
          Tipo lavaro
        </div>
        <div className="w-full border p-2 border-slate-400 rounded-xl mt-2">
          Provincia
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 font-bold">
        <button
          onClick={() => setNumber(number - 1)}
          className={`border-[#00bd0e] text-[#00bd0e] border px-6 py-2 rounded`}
        >
          VAI INDIETRO
        </button>
        <button
          onClick={() => setNumber(number + 1)}
          className="bg-[#00bd0e] text-white px-6 py-2 rounded"
        >
          VAI AVANTI
        </button>
      </div>
    </div>
  );
};

export default HeroBlockSub2;
