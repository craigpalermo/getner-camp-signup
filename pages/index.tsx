import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CampInfo } from "../components/CampInfo";
import { SignupForm } from "../components/SignupForm";

const Home: NextPage = (props) => {
  console.log(props);

  return (
    <div className={""}>
      <Head>
        <title>Getner Barn Summer Camp 2022</title>
        <meta
          name="description"
          content="Sign up for Getner Barn's 2022 Summer Camp"
        />
        {/* todo replace favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={""}>
        <CampInfo />
        <SignupForm />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
