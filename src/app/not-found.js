import {Portfolio} from './carousel.js';

export default function Home() {

  return (
    <div className="hero h-screen p-10 bg-black w-full items-center justify-center flex content-center">
      <div className="p-5 glass text-center flex justify-center content-center w-full items-center">
        <h1 className="minecraft sm:text-4xl">404 Not Found</h1>
        <div className="flex justify-center minecraft">
          <a  
              href="/" 
              className="my-2 text-center sm:w-sm block px-5 py-2 border-[2px] border-white/[.145] shadow-xl/20"
            >
              Home
            </a>
          </div>
      </div>
    </div>
  );
}
