import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  color,
  url,
  className,
  title,
  description,
  header,
  icon,
}: {
  color?:string,
  url?: string;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        if (url) {
          window.open(url, "_blank");
        }
      }}
      className={cn(
        `cursor-pointer row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-700 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-${color} bg-neutral-900 shadow-sm shadow-neutral-300 justify-between flex flex-col space-y-4`,
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
