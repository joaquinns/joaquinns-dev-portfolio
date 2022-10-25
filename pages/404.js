import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Custom404() {
  return (
    <div className="bg-darkColor overflow-hidden text-slate-100">
      <Head>
        <title>Joaquin Developer Not Found | Porfolio </title>
        <meta
          name="description"
          content="portfolio web site current page is not found"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={false}>
        <div className="grid place-content-center place-items-center items-center justify-center gap-4 h-screen">
          <h1 className="font-extrabold text-center text-transparent text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700 h-max">
            404 not found
          </h1>
          <Link href={"/"}>
            <a className="py-3 px-10 font-bold text-xl md:text-2xl rounded-full bg-pink-600 hover:bg-pink-900 ease duration-150">
              Back
            </a>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
