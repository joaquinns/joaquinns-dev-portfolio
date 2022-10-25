import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Glasses } from "./Glasses";
import NoSsr from "./no-ssr";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row justify-center items-center min-h-screen gap-8 lg:gap-0"
    >
      <div className="flex flex-col w-full">
        <h1 className="font-extrabold text-center text-transparent text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
          Joaquin Suarez
        </h1>
        <h2 className="font-extrabold text-center text-transparent text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-700">
          Front-end Developer
        </h2>
        <div className="my-2 gap-2 flex flex-col justify-center items-center">
          <div className="flex gap-2">
            <a
              className="text-white text-5xl p-3 rounded-full hover:bg-darkColorLightConstrant ease duration-150"
              href="https://github.com/joaquinns"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="text-white text-5xl p-3 rounded-full hover:bg-darkColorLightConstrant ease duration-150"
              href="https://www.linkedin.com/in/joaquinnsdev"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
          <a
            href="#projects"
            className="text-black py-4 px-16 bg-gradient-to-r to-blue-500 from-pink-700 rounded-full font-bold text-2xl z-10 hover:scale-110 ease duration-150 hover:shadow hover:shadow-md hover:shadow-pink-500/50"
          >
            Projects
          </a>
        </div>
      </div>
      <div className="md:w-full flex items-center justify-center lg:justify-start">
        <NoSsr>
          <Glasses />
        </NoSsr>
      </div>
    </section>
  );
};
