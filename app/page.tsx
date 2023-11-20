"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Greeting from "./components/greeting";
import Buttons from "./components/buttons";
import Projects from "./components/projects";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [sectionOpacity, setSectionOpacity] = useState(1);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const maxScroll = 200; // Adjust this value based on when you want the section to disappear
      const newOpacity = 1 - Math.min(scrollY / maxScroll, 1);
      setSectionOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  return (
    <>
      <section className="flex z-10 flex-col justify-center items-center md:-mb-[12rem] sm:-mb-[12rem] -mb-[10rem]  min-h-screen">
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
        <section
          style={{ opacity: sectionOpacity }}
          className="transition duration-1000 flex justify-center items-center flex-col"
        >
          <Greeting />
          <div className="z-0 text-sm font-extralight select-none text-white">
            I&apos;m a Web Developer from Turkey
          </div>
          <Buttons />
        </section>
      </section>
      <Projects />
    </>
  );
}
