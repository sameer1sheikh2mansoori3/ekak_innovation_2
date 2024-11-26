import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="text-center">
          <p className="text-neutral-300 text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div className="text-center">
          <p className="text-neutral-300 text-sm font-normal mb-4">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-300 text-sm font-normal mb-4">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more examples of beautiful designs I built.
          </p>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div className="text-center">
          <p className="text-neutral-300 text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="text-neutral-400 text-sm mb-2">
              ✅ Card grid component
            </div>
            <div className="text-neutral-400 text-sm mb-2">
              ✅ Startup template Aceternity
            </div>
            <div className="text-neutral-400 text-sm mb-2">
              ✅ Random file upload lol
            </div>
            <div className="text-neutral-400 text-sm mb-2">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="text-neutral-400 text-sm mb-2">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-black p-8 flex justify-center">
      <Timeline data={data} />
    </div>
  );
}

