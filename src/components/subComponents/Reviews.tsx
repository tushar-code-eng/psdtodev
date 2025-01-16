interface ReviewsInterface {
  profile: string;
  name: string;
  review: string;
  months: string;
  rating: string;
  desc: string;
}

const Reviews = ({
  profile,
  name,
  review,
  months,
  rating,
  desc,
}: ReviewsInterface) => {
  return (
    <div className="w-full lg:w-3/4 mx-auto border-b-2 border-slate-300 p-4 mb-10">
      <div className="flex items-center gap-3 ">
        <div className="">
          <img className="w-32" src={profile} alt="" />
        </div>
        <div className="font-semibold text-[#14336d] ">
          <div className="md:text-xl text-[]">{name}</div>
          <div className="">{review}</div>
          <div className="flex items-center gap-2">
            <div>{months}</div>
            <div>
              <img className="w-20 md:w-28" src={rating} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center md:text-start mt-4">{desc}</div>
    </div>
  );
};

export default Reviews;
