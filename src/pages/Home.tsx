import img1 from '/outer/img1.png'
import img2 from '/outer/img2.png'

import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Home = () => {
  return (
    <div>
        <div className="text-center text-4xl my-4 font-bold">
            Here are some Web pages built by me.
        </div>
      <BentoGrid className="max-w-4xl mx-auto ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            url={item.url}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Home;

const Skeleton = ({img}:{img:string}) => (
  <div className=" overflow-hidden  flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img className='bg-cover' src={img} alt="" />
  </div>
);
const items = [
  {
    url:"project1",
    title: "Bonus Gems",
    description: "Landing Page",
    header: <Skeleton img={img1} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500  " />,
  },
  {
    url:"project2",
    title: "Migliore Prestito",
    description: "",
    header: <Skeleton img={img2} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton img="" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton img="" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton img="" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton img="" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton img="" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
