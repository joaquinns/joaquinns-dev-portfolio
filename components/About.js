/* eslint-disable react/no-unescaped-entities */
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiPostgresql, SiExpress } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

export const About = () => {
  return (
    <section className="my-16">
      <h1
        id="about"
        className="font-bold text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-700 max-w-max"
      >
        About
      </h1>
      <article>
        <p className="font-semibold text-slate-100 text-xl lg:text-2xl py-2">
          3 years of experience as a Frontend Developer. Open as a freelancer
          and work with team to aport all my knowledge to create modern and
          efficient apps. I'm open to learn new technologies if is necessary to
          help and i consider myself a responsible person.
        </p>

        <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-700 max-w-max py-2">
          Experience
        </h2>

        <div className="flex flex-col my-6 justify-center">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center justify-start">
            <h3 className="font-bold text-3xl text-blue-500">Freelancer</h3>
            <h3 className="font-bold text-2xl">2021/01/05 - Present</h3>
          </div>
          <p className="font-semibold text-slate-100 text-xl lg:text-2xl py-2">
            I've been working as a freelancer to small local companies and
            clients
          </p>
        </div>

        <div className="flex flex-col my-6 justify-center">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center justify-start">
            <h3 className="font-bold text-3xl text-blue-500">
              Frontend-Developer on Traki company
            </h3>
            <h3 className="font-bold text-2xl">2019/11/03 - 2020/11/03</h3>
          </div>
          <p className="font-semibold text-slate-100 text-xl lg:text-2xl py-2">
            I've been working as a Front-End developer for this company. Traki
            is a big company for wear products and more and my team and I were
            responsible for make the ecommerce app, improving the UI,
            performance and bug resolving.
          </p>

          <a
            className="max-w-max text-lg font-semibold text-blue-700 hover:underline"
            target="_blank"
            href="https://www.traki.com/"
            rel="noreferrer"
          >
            Traki web site
          </a>
        </div>

        <div className="flex flex-col my-6 gap-4">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-700 max-w-max py-2">
            Technologies
          </h2>

          <ul className="flex flex-col sm:flex-row md:flex-row sm:flex-wrap gap-4">
            <li className="border-2 border-blue-500 text-slate-100 flex items-center justify-center gap-2 font-bold text-xl rounded-full py-2 px-6">
              <FaReact size="2rem" className="text-blue-500" />
              <span>React</span>
            </li>
            <li className="border-2 border-white text-slate-100 flex items-center justify-center gap-2 font-bold text-xl rounded-full py-2 px-6">
              <TbBrandNextjs size="2rem" className="text-white" />
              <span>NextJS</span>
            </li>
            <li className="border-2 border-yellow-400 text-slate-100 flex items-center justify-center gap-2 font-bold text-xl rounded-full py-2 px-6">
              <IoLogoJavascript size="2rem" className="text-yellow-400" />
              <span>Javascript</span>
            </li>
            <li className="border-2 border-orange-500 text-slate-100 flex items-center justify-center gap-2 font-bold text-xl rounded-full py-2 px-6">
              <IoLogoHtml5 size="2rem" className="text-orange-500" />
              <span>HTML</span>
            </li>
            <li className="border-2 border-blue-600 text-slate-100 flex items-center justify-center gap-2 font-bold text-xl rounded-full py-2 px-6">
              <IoLogoCss3 size="2rem" className="text-blue-600" />
              <span>CSS</span>
            </li>
          </ul>
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <li className="border-2 border-green-500 text-slate-100 flex items-center justify-center gap-2 font-bold text-xl rounded-full py-2 px-6">
              <SiMongodb size="2rem" className="text-green-500" />
              <span>MongoDB</span>
            </li>
            <li className="border-2 border-green-500 text-slate-100 flex items-center justify-center gap-2 font-bold text-xl rounded-full py-2 px-6">
              <GrNode size="2rem" className="text-green-500" />
              <span>NodeJS</span>
            </li>
            <li className="border-2 border-blue-white text-slate-100 flex items-center justify-center gap-2 font-bold text-xl rounded-full py-2 px-6">
              <SiExpress size="2rem" className="text-gray-600" />
              <span>ExpressJS</span>
            </li>
            <li className="border-2 border-blue-700 text-slate-100 flex items-center justify-center gap-2 font-bold text-xl rounded-full py-2 px-6">
              <SiPostgresql size="2rem" className="text-blue-700" />
              <span>PostgreSQL</span>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};
