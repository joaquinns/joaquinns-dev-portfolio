import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-darkColorLight p-4 flex justify-center items-center h-16 w-full border-t border-zinc-800 ">
      <div>
        <a
          className="text-white text-2xl p-3 ease duration-150 flex gap-2 items-center justify-center"
          href="https://github.com/joaquinns"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};
