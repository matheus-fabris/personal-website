import type { NextPage } from "next";
import Head from "next/head";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Background from "../components/Background";

const Home: NextPage = () => {
  return (
    <div className="responsive-container px-8">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <nav className="flex justify-between text-xl py-4">
        <ul className="flex">
          <li className="mr-4">Work</li>
          <li className="mr-4">Contact</li>
        </ul>
        <ul className="flex">
          <li>
            <a href={process.env.GITHUB_LINK || "#"}>
              <FiGithub className="ml-4" />
            </a>
          </li>
          <li>
            <a href={process.env.LINKEDIN_LINK || "#"}>
              <FiLinkedin className="ml-4" />
            </a>
          </li>
        </ul>
      </nav>
      <header className="">
        <h1 className="sm-heading text-primary-5">Hi, my name is</h1>
        <h2 className="lg-heading font-bold">Matheus Fabris.</h2>
        <h3 className="lg-heading">I like building things.</h3>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Home;
