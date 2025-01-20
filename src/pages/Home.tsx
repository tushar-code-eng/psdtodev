import img1 from "/outer/img1.png";
import img2 from "/outer/img2.png";
import img3 from "/outer/img3.png";
import img4 from "/outer/img4.png";

import upwork from "/outer/upwork.svg";
import github from "/outer/github.svg";
import twitter from "/outer/twitter.svg";

import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  // IconBoxAlignRightFilled,
  // IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  // IconTableColumn,
} from "@tabler/icons-react";

const Home = () => {
  return (
    <div className="w-full bg-[#121212]">
      <div className="bg-neutral-900 py-2 px-4 flex items-center justify-between  text-neutral-300">
        <div className="font-bold">Tushar Bajaj</div>
        <div className="flex items-center justify-center gap-5">
          <div
            className="w-6 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.upwork.com/freelancers/~01adae8673d8d4410e"
              )
            }
          >
            <img src={upwork} alt="" />
          </div>
          <div
            className="w-6 cursor-pointer"
            onClick={() => window.open("https://github.com/tushar-code-eng")}
          >
            <img src={github} alt="" />
          </div>
          <div
            className="w-6 cursor-pointer"
            onClick={() => window.open("https://x.com/BajajTushar05")}
          >
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
      <div className=" max-w-6xl mx-auto mt-4">
        <div className="text-center text-neutral-300 text-6xl pt-6 pb-10 font-extrabold">
          Landing Pages !!
        </div>
        <BentoGrid className="w-full mx-auto  p-4 rounded-xl">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              url={item.url}
              color={item.color}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Home;

const Skeleton = ({ img }: { img: string }) => (
  <div className=" overflow-hidden  flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img className="w-full bg-cover" src={img} alt="" />
  </div>
);
const items = [
  {
    color: "pink-400",
    url: "project1",
    title: "Bonus Gems",
    // description: "Landing Page",
    header: <Skeleton img={img1} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-300  " />,
  },
  {
    color: "blue-400",
    url: "project2",
    title: "Migliore Prestito",
    description: "",
    header: <Skeleton img={img2} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-300" />,
  },
  {
    color: "green-400",
    url: "https://steady-frangollo-64fda9.netlify.app/",
    title: "Balenciaga",
    // description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton img={img3} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-300" />,
  },
  {
    color: "violet-400",
    url: "https://rainbow-bombolone-7a80ba.netlify.app/",
    title: "Apple 2023",
    // description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton img={img4} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-300" />,
  },
  // {
  //   title: "The Power",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Skeleton img="" />,
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },

  // {
  //   title: "The Joy of Creation",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton img="" />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton img="" />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
