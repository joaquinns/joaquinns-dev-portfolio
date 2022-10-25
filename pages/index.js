import Head from "next/head";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <div className="bg-darkColor overflow-hidden text-slate-100">
      <Head>
        <title>Joaquin Developer | Porfolio </title>
        <meta
          name="description"
          content="portfolio web site to show projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </div>
  );
}
