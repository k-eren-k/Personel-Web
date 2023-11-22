"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Tooltip } from "@nextui-org/react";
import hello from "@/lib/hello.json";

// Define the type for the GreetingData
type GreetingData = {
  loading: boolean;
  greeting: string;
  greetingLanguage: string;
};

// Define the Greeting component
export default function Greeting() {
  // Destructure the greetings object from the imported hello.json
  const { greetings } = hello;

  // Use the useState hook to manage the component state
  const [greetingData, setGreetingData] = useState<GreetingData>({
    loading: true,
    greeting: "Hello World",
    greetingLanguage: "English",
  });

  // Use useMemo to memoize greetingsArray and greetingLanguageArray
  const greetingsArray = useMemo(() => Object.values(greetings), [greetings]);
  const greetingLanguageArray = useMemo(
    () => Object.keys(greetings),
    [greetings]
  );

  // Use state to track hovering
  const [hovering, setHovering] = useState(false);

  // Declare the setGreetingLanguageAndGreeting function
  const setGreetingLanguageAndGreeting = useMemo(() => {
    return (language: string, greeting: string) => {
      // Use a functional update to ensure the latest state is used
      setGreetingData((prevData) => ({
        ...prevData,
        greetingLanguage: language,
        greeting: greeting,
      }));
    };
  }, []);

  // Use useEffect to update the greeting periodically
  useEffect(() => {
    // Set an interval to update the greeting if not hovering
    const interval = setInterval(() => {
      if (!hovering) {
        // Generate a random index to select a random greeting
        const randomIndex = Math.floor(Math.random() * greetingsArray.length);
        const randomGreeting = greetingsArray[randomIndex];
        const randomGreetingLanguage = greetingLanguageArray[randomIndex];

        // Call the function to set greeting language and greeting
        setGreetingLanguageAndGreeting(randomGreetingLanguage, randomGreeting);

        // Update loading state
        setGreetingData((prevData) => ({
          ...prevData,
          loading: false,
        }));
      }
    }, 800);

    // Clear the interval on component unmount or dependency change
    return () => clearInterval(interval);
  }, [
    greetingLanguageArray,
    greetingsArray,
    hovering,
    setGreetingLanguageAndGreeting,
  ]);

  // Render the component
  return (
    <h1
      className="flex sticky z-10 justify-center items-center text-5xl font-bold text-center text-white break-words select-none w-[18rem] h-[12rem]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Use Tooltip component to show greeting language */}
      <Tooltip
        content={greetingData.greetingLanguage}
        delay={0}
        closeDelay={0}
        color="primary"
        isOpen={hovering}
        className="bg-black bg-opacity-50 select-none"
      >
        {/* Use conditional rendering based on loading state */}
        {greetingData.loading ? (
          <span className="animate-pulse">{greetingData.greeting}</span>
        ) : (
          <span>{greetingData.greeting}</span>
        )}
      </Tooltip>
    </h1>
  );
}
