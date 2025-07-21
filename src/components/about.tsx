"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
const words1 = `Not just another Dev`;
const words2 = 'C++ enthusiast, React tinkerer, and competitive problem solver. Building things, breaking things, and occasionally winning at Brawlhalla.';

export function About() {
  return <TextGenerateEffect words={words1} className="text-gray-200 text-5xl font-sans mt-4" />;
}

const features = [
  {
    icon: "../assets/cpp.svg",
    name: "C++ Developer",
    description: "Enthusiastic about C++ and its ecosystem.",
    href: "",
    cta: "",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    Icon: () => <IconImg src="../assets/cpp.svg" />,
  },
  {
    icon: "../assets/programming.svg",
    name: "Aspiring Competitive Programmer",
    description: "HacckerRank and Codeforces struggler.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    Icon: () => <IconImg src="../assets/programming.svg" />,
  },
  {
    icon: "../assets/unity.svg",
    name: "Wannabe GameDeveloper",
    description: "Experience with Unity and Godot Engine.",
    href: "",
    cta: "",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    Icon: () => <IconImg src="../assets/unity.svg" />,
  },
  {
    icon: "../assets/video.svg",
    name: "Video Editor",
    description: "Hobby that adds life to static images.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    Icon: () => <IconImg src="../assets/video.svg" />,
  },
  {
    icon: "@/assets/brawl.svg",
    name: "Casual Gamer",
    description:
      "When I am not doing any of the above, probably winning at Brawlhalla.",
    href: "",
    cta: "",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    Icon: () => <IconImg src="@/assets/brawl.svg" />,
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
function IconImg({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="w-8 h-8 object-contain"
      aria-hidden="true"
      draggable={false}
    />
  );
}
