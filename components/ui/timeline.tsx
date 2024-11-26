import React from "react";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="relative max-w-2xl">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
      {data.map((item, index) => (
        <div key={index} className="mb-16 flex flex-col items-center relative">
          <div className="z-20 flex items-center justify-center bg-black border-4 border-blue-500 w-12 h-12 rounded-full shadow-xl">
            <h1 className="font-bold text-lg text-white">{index + 1}</h1>
          </div>
          <div className="z-10 bg-gray-900 rounded-lg shadow-xl w-full px-6 py-4 mt-4">
            <h3 className="mb-3 font-bold text-white text-xl text-center">{item.title}</h3>
            <div className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

