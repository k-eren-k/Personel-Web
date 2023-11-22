"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Projects from "./projects";
import About from "./about";

export default function TabSwitcher() {
  return (
    <>
      <div className="flex z-10 flex-col items-center p-5 w-full min-h-screen select-none">
        <Tabs
          defaultSelectedKey={"projects"}
          aria-label="Options"
          className={`w-full flex items-center justify-center z-50 p-2 sticky top-0 `}
          //onChange={handleTabChange}
        >
          <Tab key="blog" title="Blog">
            <Card className="z-10 gap-11 space-y-4 w-full text-sm text-white bg-opacity-50 select-none hover:scale-105 max-w-[35rem]">
              <CardBody className="w-full text-center break-words text-wrap rounded-[7px]">
              None Blog Your No Competence
              </CardBody>
            </Card>
          </Tab>
          <Tab key="projects" title="Projects">
            <Projects />
          </Tab>
          <Tab key="about" title="About">
            <About />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
