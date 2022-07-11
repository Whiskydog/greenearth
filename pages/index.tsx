import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Theme } from "react-daisyui";
import MyCard from "../components/card";
import MyNavbar from "../components/navbar";
import ThemeChange from "../components/theme-change";
import Hero from "../components/hero";
import { Footer } from "../components/footer";

const Home: NextPage = () => {
  // return (
  // <div className="flex min-h-screen flex-col items-center justify-center py-2">
  //   <Head>
  //     <title>Create Next App</title>
  //     <link rel="icon" href="/favicon.ico" />
  //   </Head>

  //   <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
  //     <h1 className="text-6xl font-bold">
  //       Welcome to{' '}
  //       <a className="text-blue-600" href="https://nextjs.org">
  //         Next.js!
  //       </a>
  //     </h1>

  //     <p className="mt-3 text-2xl">
  //       Get started by editing{' '}
  //       <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
  //         pages/index.tsx
  //       </code>
  //     </p>

  //     <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
  //       <a
  //         href="https://nextjs.org/docs"
  //         className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
  //       >
  //         <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
  //         <p className="mt-4 text-xl">
  //           Find in-depth information about Next.js features and its API.
  //         </p>
  //       </a>

  //       <a
  //         href="https://nextjs.org/learn"
  //         className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
  //       >
  //         <h3 className="text-2xl font-bold">Learn &rarr;</h3>
  //         <p className="mt-4 text-xl">
  //           Learn about Next.js in an interactive course with quizzes!
  //         </p>
  //       </a>

  //       <a
  //         href="https://github.com/vercel/next.js/tree/canary/examples"
  //         className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
  //       >
  //         <h3 className="text-2xl font-bold">Examples &rarr;</h3>
  //         <p className="mt-4 text-xl">
  //           Discover and deploy boilerplate example Next.js projects.
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
  //       >
  //         <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
  //         <p className="mt-4 text-xl">
  //           Instantly deploy your Next.js site to a public URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>

  //   <footer className="flex h-24 w-full items-center justify-center border-t">
  //     <a
  //       className="flex items-center justify-center gap-2"
  //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Powered by{' '}
  //       <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //     </a>
  //   </footer>
  // </div>
  // );
  // return (
  //   <Card>
  //     <Card.Image
  //       src="https://api.lorem.space/image/shoes?w=400&h=225"
  //       alt="Shoes"
  //     />
  //     <Card.Body>
  //       <Card.Title tag="h2">Shoes!</Card.Title>
  //       <p>If a dog chews shoes whose shoes does he choose?</p>
  //       <Card.Actions className="justify-center">
  //         <Button color="primary">Buy Now</Button>
  //       </Card.Actions>
  //     </Card.Body>
  //   </Card>
  // );

  // return (
  //   <div className="card card-compact w-96 bg-base-100 shadow-xl">
  //     <figure>
  //       <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
  //     </figure>
  //     <div className="card-body">
  //       <h2 className="card-title">Shoes!</h2>
  //       <p>If a dog chews shoes whose shoes does he choose?</p>
  //       <div className="card-actions justify-end">
  //         <button className="btn btn-primary">Buy Now</button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
