import { HoverEffect } from "@/components/ui/card-hover-effect";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="my-4 text-white text-center text-3xl font-bold">Why Join Us</div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Fast Growing Company",
    description:
      "We’re at the inflection point to achieve accelerated growth.",
    link: "",
  },
  {
    title: "Great Colleagues",
    description:
      "Closely tied and supportive team",
  link:'',
  },
  {
    title: "Don’t Stop Learning",
    description:
      "An environment that encourages continuous learning.",
    link: "",
  },
  {
    title: "Free Snacks of Your Choice",
    description:
      "We know you're a foodie at heart, which is why we offer free snacks.",
    link: "",
  },
  {
    title: "Work-Life Balance",
    description:
      "We prioritize work, but we never put it before life.",
    link: "",
  },
  {
    title: "Cross Domain Exposure",
    description:
      "A highly passionate team of business and technology personnel.",
    link: "",
  },
];
