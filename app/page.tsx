/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import SongList from "./components/SongList";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="https://i.ibb.co/CPh6Ty6/Screenshot-2024-12-06-at-10-39-37-PM.png"
            alt="AZ"
            width={300}
            height={300}
            className="mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">
            Current Status - First Post, Dec 6th
          </h1>
          <p className="text-center max-w-2xl">
            It's AZ, the 23 is silent. I'm from Chicago & I'm a software
            engineer who's lived kind a crazy life and love to rap about my
            experiences & emotions. I believe the world needs more creative
            vulnerability.
            <br />
            <br />
            I'm not where I want to be yet, but my mind is determined to make it
            massive. Right now, I'm starting from scratch, recording little raps
            on my iPhone. But I'm about to begin collab'ing with music producers
            to transform these concepts into real songs.
            <br />
            <br />
            I'm looking for 100 strangers to take a leap & believe in me before
            the world does. If that's you, add your name to the list below so I
            can remember you forever.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <SongList />
          </div>
          {/* <div className="w-full md:w-1/2">
            <Suspense fallback={<div>Loading supporters...</div>}>
              <SupporterList />
            </Suspense>
          </div> */}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
