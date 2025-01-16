import PlusMinusBox from "./subComponents/PlusMinusBox";

const BodyContainer = () => {
  return (
    <div className="flex items-center justify-center my-14">
      <div className="lg:border-[6px] border-y-[6px] border-gray-300 lg:rounded-2xl lg:w-[80vw] xl:w-[60vw] p-4">
        <div className="flex flex-col items-center justify-center">
          <span className=" text-3xl md:text-4xl font-extrabold text-center text-[#00bd0e]">
            CESSIONE DEL QUINTO
          </span>
          <div className="h-[6px] w-[85px] mt-2 bg-[#00bd0e]"></div>
        </div>
        <div className="p-6">
          <PlusMinusBox title="A CHI È RIVOLTO?" desc="lorem12" />
          <PlusMinusBox
            title="COME FUNZIONA?"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nisi doloribus repudiandae quidem velit esse illo rerum consequatur autem, nesciunt voluptate. Dignissimos reprehenderit sit perferendis ipsa est aliquam expedita quos?"
          />
          <PlusMinusBox
            title="QUANTO TEMPO OCCORRE AD OTTENERE IL PRESTITO?"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nisi doloribus repudiandae quidem velit esse illo rerum consequatur autem, nesciunt voluptate. Dignissimos reprehenderit sit perferendis ipsa est aliquam expedita quos?"
          />
          <PlusMinusBox
            title="QUALI SONO I VANTAGGI?"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nisi doloribus repudiandae quidem velit esse illo rerum consequatur autem, nesciunt voluptate. Dignissimos reprehenderit sit perferendis ipsa est aliquam expedita quos?"
          />
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="p-4 text-xl lg:text-2xl font-bold text-white text-center rounded-xl bg-[#00bd0e] ">
            RICHIEDI INFO SENZA IMPEGNO
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContainer;
