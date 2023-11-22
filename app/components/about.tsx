import { Card, CardBody } from "@nextui-org/react";

export default function About() {
  return (
    <Card className="z-10 gap-11 space-y-4 w-full text-sm text-white bg-opacity-50 select-none hover:scale-105 max-w-[35rem]">
      <CardBody className="w-full text-center break-words text-wrap">
      Hello, I'm Eren. I am a high school student and I am a freshman in high school. My goal is to become a computer engineer. One of the things I like is building sites using React and Express frameworks. I also love playing computer games, especially games such as Craft Rise and Forest interest me. You can visit my social media accounts for more information.
      </CardBody>
    </Card>
  );
}
