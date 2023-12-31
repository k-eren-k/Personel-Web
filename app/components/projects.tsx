// Projects component
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Tooltip,
} from "@nextui-org/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type GitHubRepo = {
  id: number;
  name: string;
  stars: number;
  html_url: string;
  home_page: string;
  description: string;
  created_at: string;
  updated_at: string;
  topics: string[];
  license_name: string;
  license_url: string;
  language: string;
  license_key: string;
  license_spdx_id: string;
};
// Projects component
const Projects = () => {
  // State to store GitHub API data
  const [data, setData] = useState<GitHubRepo[] | null>(null);

  // Fetch data from GitHub API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/repos");
        if (!response.ok) {
          throw new Error(`HTTP hata! Durum kodu: ${response.status}`);
        }
        const fetchedData = await response.json();

        // sort data by stars
        //const sortedData = fetchedData.sort((a, b) => b.stars - a.stars);

        setData(fetchedData);
      } catch (error) {
        console.error("Veri alınamadı:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {Array.isArray(data) &&
        data.map((project, index) => (
          <Card
            className="z-10 my-3 text-white bg-opacity-50 select-none hover:scale-105 max-w-[35rem]"
            key={`${project.id}-${index}`}
          >
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-row flex-wrap items-center rounded-[]">
                  <h1 className="font-semibold leading-none hover:font-bold text-small text-default-600">
                    {project.name}
                  </h1>
                  {project.stars > 0 && (
                    <Tooltip
                      content="Give a star to help!"
                      delay={0}
                      closeDelay={0}
                      className="bg-black bg-opacity-60 select-none"
                    >
                      <div className="flex gap-2 items-center font-bold scale-85">
                        <StarIcon />
                        {project.stars}
                      </div>
                    </Tooltip>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-1 justify-end items-center">
                {project.home_page && (
                  <a href={project.home_page} target="_blank">
                    <Button
                      className={
                        "text-foreground border border-opacity-50 border-white hover:bg-opacity-50 hover:bg-zinc-700 transition-all duration-1000 fill-white "
                      }
                      radius="full"
                      size="sm"
                      variant={"bordered"}
                    >
                      Demo
                      <OpenInNewIcon className="text-sm fill-white" />
                    </Button>
                  </a>
                )}
                <a href={project.html_url} target="_blank">
                  <Button
                    className={
                      "text-foreground border border-opacity-50 border-white hover:bg-opacity-50 hover:bg-zinc-700 transition-all duration-1000 fill-white "
                    }
                    radius="full"
                    size="sm"
                    variant={"bordered"}
                  >
                    Source Code
                    <GitHubIcon className="text-sm fill-white" />
                  </Button>
                </a>
              </div>
            </CardHeader>
            <CardBody className="py-0 px-3 text-small text-default-600">
              {project.description}
            </CardBody>
            <CardFooter className="flex flex-col gap-3 items-start">
              <div className="flex flex-col flex-wrap gap-1 text-xs text-left item">
                <p>{project.license_spdx_id}</p>
                <p>
                  {project.language ? `Language: ${project.language}` : null}
                </p>
                <p>
                  Created at:{" "}
                  {new Date(project.created_at).toLocaleDateString()}
                </p>
                <p>
                  Last update:{" "}
                  {new Date(project.updated_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-row flex-wrap jus">
                {project.topics.map((topic, index) => (
                  <p
                    key={index}
                    className="p-1 mb-1 text-xs font-thin bg-opacity-5 rounded-[6px] select-none hover:font-normal m-[0.063rem] bg-slate-400 dark:bg-slate-900"
                  >
                    {topic}
                  </p>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
    </>
  );
};

export default Projects;
