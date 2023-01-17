import { useRef } from "react";
import { useNearScreen } from "../hooks/useNearCreen";
import { Card } from "./Card";

const animationDelay = "200";

const projects = [
  {
    name: "Rest Api node/typescript/mongoDB/jest/swagger",
    description: "A example node api with express api, typescript, mongoDB",
    img_url:
      "https://raw.githubusercontent.com/joaquinns/backend-node-api-ts-mongo/master/rest-api-ts-mongo.PNG",
    project_link:
      "https://backend-node-api-ts-mongo-production.up.railway.app/docs/",
    source: "https://github.com/joaquinns/backend-node-api-ts-mongo",
  },
  {
    name: "Social-album App",
    description:
      "Social-album is an app to share photo albums with other users. Created with NextJS and supabase",
    img_url:
      "https://raw.githubusercontent.com/joaquinns/supabase-social-album-next/main/socialAlbum.png",
    project_link: "https://supabase-social-album-next.vercel.app/",
    source: "https://github.com/joaquinns/supabase-social-album-next",
  },
  {
    name: "Video-tok App",
    description:
      "Video-tok was created inspired by tik-tok with NextJS and supabase. Deploy on vercel",
    img_url:
      "https://raw.githubusercontent.com/joaquinns/video-tok/master/videotok.PNG",
    project_link: "https://video-tok.vercel.app/",
    source: "https://github.com/joaquinns/video-tok",
  },
  {
    name: "Minecraft-js",
    description:
      "This is a simple game was created with react, threeJs and vite with zustand global store",
    img_url:
      "https://raw.githubusercontent.com/joaquinns/minecraft-js-init/master/minecraftjs.PNG",
    project_link: "https://minecraft-js-init.vercel.app/",
    source: "https://github.com/joaquinns/minecraft-js-init",
  },
  {
    name: "Giffy App",
    description:
      "This app was created with create-react-app and deployed to vercel",
    img_url:
      "https://raw.githubusercontent.com/joaquinns/react-giff-app/main/ghiffapp.JPG",
    project_link: "https://react-giff-app.vercel.app/",
    source: "https://github.com/joaquinns/react-giff-app",
  },
  {
    name: "Password Generator app",
    description: "This app was created with vite and deployed in vercel",
    img_url:
      "https://raw.githubusercontent.com/joaquinns/password-generator-js/master/password%20generator.PNG",
    project_link: "https://password-generator-js-flax.vercel.app/",
    source: "https://github.com/joaquinns/password-generator-js",
  },
  {
    name: "SearchMovie app",
    description:
      "This app was created with create-react-app and deployed to netlify",
    img_url:
      "https://raw.githubusercontent.com/joaquinns/react-movie-app/master/cinefrontend.JPG",
    project_link: "https://pedantic-leakey-03ab60.netlify.app/",
    source: "https://github.com/joaquinns/react-movie-app",
  },
];

export const Projects = () => {
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: externalRef,
  });

  return (
    <section className="mb-6">
      <h1
        id="projects"
        className="font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-700 max-w-max"
      >
        Projects
      </h1>
      <div
        className="grid grid-cols-responsiveAutoGrid mx-auto gap-2 my-4"
        ref={externalRef}
      >
        {projects.map((project, i) => (
          <Card
            key={i}
            name={project.name}
            description={project.description}
            image_url={project.img_url}
            project_url={project.project_link}
            delay={i * animationDelay + "ms"}
            isNearScreen={isNearScreen}
            source={project.source}
          />
        ))}
      </div>
    </section>
  );
};
