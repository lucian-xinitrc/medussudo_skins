'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import SkinViewer from "./skinview.js";
import './globals.css';

const SPortfolioCard = ({title, type, photo, desc, skin, skin2, name, loc, typ}) => {
	return (
		<div className="rounded-xl dark:bg-black pb-40 p-5 sm:p-5 border border-solid dark:border-white/[.245] sm:h-[650px] 2xl:h-full transition duration-700 easy-in-out dark:hover:bg-slate-950 overflow-y-hidden">
			<h1 className="text-center py-5 dark:text-[#ffffff] text-2xl sm:text-4xl font-bold">{title}</h1>
      <div className="flex justify-center">
         {typ === "twins" ? (<div className="flex"> <SkinViewer skin={skin} /> <SkinViewer skin={skin2} /> </div>) : (<SkinViewer skin={skin} />)}
        </div>
			<div className="flex justify-center ">
  			<div className="w-full content-center overflow-scroll w-100 h-70 sm:h-100 2xl:h-100 no-scrollbar">
  				<Image
  			        src={photo}
  			        alt="Preview"
  			        loading="eager"
  			        className="shadow-xl/20 w-auto h-auto w-full 2xl:h-full rounded-lg"
  			        width={1000}
  			        height={2000}
  			      />
  			</div>
		  </div>
		  <div className="w-full h-50 overflow:hidden my-10">
				<div className="ml-5">
					<h1 className="text-2xl font-bold py-5">About</h1>
			    <p className="text-left ml-5 text-lg font-normal h-auto dark:text-white dark:text-gray-400">
			       {desc}
			    </p>
			  </div>
		   </div>
		</div>
	);
}

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    startIndex: 0,
    skipSnaps: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", updateSelected);
    emblaApi.on("reInit", updateSelected);

    emblaApi.scrollTo(0, true);
    updateSelected();

    return () => {
      emblaApi.off("select", updateSelected);
      emblaApi.off("reInit", updateSelected);
    };
  }, [emblaApi]);

  const images = [
  <SPortfolioCard
      key="vforvendetta"
      title="V For Vendetta"
      skin="/images/skins/V/778f5c121ca90d5a3e8ade1edb7049ac558f7432.png"
      photo="/images/vforvendetta.jpg"
      desc="Minecraft Skin"
      name="V For Vendetta Skin"
      loc="https://gethonis.com/"
      stars="3"
      typ="single"
    />,
    /* 
    <SPortfolioCard
      key="zerotwo"
      title="Zero Two 002"
      type="Minecraft Skin"
      skin="./private-images/skins/Maui/94ec5354a996e7f659b16bc5a810bc60c7e351e4.png"
      photo="/images/zerotwo.jpg"
      desc="Zero Two Skins"
      typ="single"
    />,
    */
    
    <SPortfolioCard
      key="greekgoddess"
      title="Greek Goddess"
      type="Minecraft Skin"
      photo="/images/goddess.jpg"
      desc="Greek Goddess Skin"
      typ="single"
    />,
    <SPortfolioCard
      key="aliens"
      title="Alien Couple"
      type="Minecraft Skin"
      skin="/images/skins/Alien/898e8c6111ee59814cc8ce1c53366c320a86d679.png"
      skin2="/images/skins/Alien/bubu.png"
      photo="/images/aliencouple.jpg"
      desc="Alien Couple Skins"
      stars="3"
      typ="twins"
    />,
  ];

  return (
    <>
      <section
        id="portfolio"
        className="w-full"
      >


<h1 className="minecraft block m-5 text-center text-2xl sm:text-3xl mt-10">Skin Portfolio</h1>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-sm text-center">
              Hii! I make custom skins in different styles for different characters, original designs, themed skins, and couple skins. Here are some examples of skins I have made recently:
            </p>

          <div className="w-full flex justify-center">
            <div className="embla w-full" ref={emblaRef}>
              <div className="embla__container">
                {images.map((card, index) => (
                  <div
                    key={index}
                    className={`embla__slide ${
                      index === selectedIndex
                        ? "embla__slide--active"
                        : ""
                    }`}
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export { Portfolio };