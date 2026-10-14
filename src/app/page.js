
import {Portfolio} from './carousel.js';
export default function Home() {

  return (
    <div className="hero h-full sm:h-full bg-black w-full items-center content-center">
      <div className="w-full flex justify-center p-0 py-10 sm:p-10">
        <div className="glass">
         <h1 className="minecraft mt-10 block sm:m-5 text-center text-2xl sm:text-3xl">Medussudo</h1>
          <div className="flex justify-center">
            <div className="w-[200px] h-[200px] bg-slate-950 rounded-full mt-10 mb-10 border-[2px] border-white/[.145]">
          </div>
          </div>
          <div className="w-full minecraft sm:flex justify-center gap-2">
            <a 
              href="https://ko-fi.com/medussudo" 
              className="my-2 text-center sm:w-sm block px-5 py-2 border-[2px] border-white/[.145] shadow-xl/20"
            >
                Ko-fi Payment
              </a>
            <a 
              href="https://www.reddit.com/user/waiting_someon3/" 
              className="my-2 text-center sm:w-sm block px-5 py-2 border-[2px] border-white/[.145] shadow-xl/20"
            >
              Reddit
            </a>
          </div>
          <div className="w-full minecraft sm:flex justify-center gap-2">
            
            <Portfolio />
          </div>
         </div>

      </div>

    </div>
  );
}
