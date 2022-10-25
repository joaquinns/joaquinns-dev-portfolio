import { BsGithub } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Image from "next/image";

export const Card = ({
  name,
  project_url,
  image_url,
  description,
  delay,
  isNearScreen,
  source,
}) => {
  return (
    <div
      className={`flex flex-col gap-0 max-w-sm mx-auto items-center ${
        isNearScreen ? "animate-entrance scale-100" : "scale-0"
      } rounded  shadow-lg hover:shadow-pink-500/50 ease duration-100`}
      style={{
        animationDelay: delay,
        animationFillMode: "backwards",
        MozAnimationFillMode: "backwards",
        WebkitAnimationFillMode: "backwards",
      }}
    >
      <div className="relative h-48 w-full">
        <Image
          layout="fill"
          loading="lazy"
          src={image_url}
          alt={name}
          className="w-full h-full object-cover rounded-t-md m-0 p-0"
        />
      </div>
      <div className="p-3 rounded-b-md border bg-darkColorLightConstrant border-slate-800 border-t-transparent">
        <h2 className="font-bold text-xl mb-2 pb-1 border-b-2 border-slate-800">
          {name}
        </h2>
        <p className="text-base min-h-[5rem] font-semibold text-gray-300">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <a
            href={source}
            target="_blank"
            className="flex items-center gap-1 md:gap-2 px-4 py-2 font-semibold rounded bg-blue-600 hover:bg-blue-800 ease duration-150"
            rel="noreferrer"
          >
            <BsGithub size="1.5rem" />
            <span>Source</span>
          </a>
          <a
            href={project_url}
            target="_blank"
            className="px-4 py-2 flex items-center gap-1 md:gap-2 font-semibold rounded bg-pink-700 hover:bg-pink-600 ease duration-150"
            rel="noreferrer"
          >
            <AiOutlineEye size="1.5rem" />
            <span>Page</span>
          </a>
        </div>
      </div>
    </div>
  );
};
