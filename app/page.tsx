"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Greeting from "./components/greeting";
import Buttons from "./components/buttons";
import TabSwitcher from "./components/tab-switcher";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [sectionOpacity, setSectionOpacity] = useState(1);
  const [sectionLoad, setSectionLoad] = useState(true);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const maxScroll = 200; // Adjust this value based on when you want the section to disappear
      const newOpacity = 1 - Math.min(scrollY / maxScroll, 1);
      if (newOpacity === 0) {
        setSectionLoad(false);
      } else {
        setSectionLoad(true);
      }

      setSectionOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  return (
    <>
      <section className="flex z-10 flex-col justify-center items-center min-h-screen mb-[-5rem]">
        {!imageLoaded && (
          <div className="flex absolute justify-center items-center rounded-full animate-pulse w-[500px] h-[500px]"></div>
        )}
        <Image
          src={"/blobanimation.svg"} // Assuming the image path is correct
          alt="Picture of the author"
          width={600}
          height={600}
          priority
          loading="eager"
          className={`flex  justify-center items-center select-none fixed  z--10 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
          onDragStart={(e) => e.preventDefault()} // Prevent dragging
        />
        {sectionLoad ? (
          <>
            <section
              style={{ opacity: sectionOpacity }}
              className="flex flex-col justify-center items-center transition duration-1000"
            >
              <Greeting />
              <div className="z-0 text-sm font-extralight text-white select-none">
                I&apos;m a Web Developer from Turkey
              </div>
              <Buttons />
            </section>
          </>
        ) : (
          <></>
        )}
      </section>
      <TabSwitcher />
    </>
  );
}
