import { useState,useRef  } from "react";
import minus from "/images/minus.svg";
import plus from "/images/plus.svg";

const PlusMinusBox = ({ title, desc }: { title: string; desc: string }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-2 bg-white">
      <div
        className={`p-2 rounded-xl w-full flex items-start justify-start gap-4 `}
      >
        <div
          className=" flex items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="min-w-6">
            <img className="w-6" src={open ? minus : plus} alt="" />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="font-bold text-xl leading-6">{title}</div>
          {/* <div className="overflow-hidden"> */}
          <div
            id="box"
            ref={contentRef}
            className={`border-b-2 transform transition-all duration-1000 ease-in-out mt-2 ${
              open && contentRef.current ? `h-[${contentRef.current.scrollHeight}px] opacity-1 ` : "h-[0px] opacity-0 "
            }`}
          >
            {desc}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PlusMinusBox;
