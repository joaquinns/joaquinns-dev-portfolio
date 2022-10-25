import { AiOutlineArrowUp } from "react-icons/ai";

export const Contact = () => {
  return (
    <section className="mt-6 mb-20">
      <h1 className="font-bold text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-700 max-w-max">
        Where find me?
      </h1>
      <div className="flex flex-wrap items-center gap-4">
        <p className="font-semibold text-slate-100 text-xl lg:text-2xl">
          You can contact me through my social media
        </p>
        <a
          href="#hero"
          className="flex items-center justify-center w-max h-max"
        >
          <AiOutlineArrowUp
            className="animate-bounce text-slate-100 bg-pink-600 h-10 w-10 rounded-full p-2"
            size="1rem"
          />
        </a>
      </div>
    </section>
  );
};
