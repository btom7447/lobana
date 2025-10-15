import { CheckCheckIcon } from "lucide-react";



export default function MissionVissionColSection() {
  const missionVision = [
    {
      title: "Our Mission",
      image: "/images/mission-poster.png",
      description:
        "To create sustainable value and opportunities across real estate, trade, agriculture, and investments while enhancing the communities we serve through innovation, integrity, and excellence.",
      list: [
        "Top-quality real estate service",
        "Seamless trade and commerce",
        "Strategic investments",
        "Professionalism & transparency practice",
      ],
    },
    {
      title: "Our Vision",
      image: "/images/vision-poster.png",
      description:
        "To be a leading global company recognized for building lasting value, fostering growth, and creating positive impact in every community and industry we touch.",
      list: [
        "Benchmark for excellence in all areas",
        "Empower communities and stakeholders",
        "Expanding regionally and internationally",
        "Building long-term partnerships",
      ],
    },
  ];

  return (
    <section className="py-20 px-5 lg:px-20 bg-foreground grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
      {missionVision.map((item, index) => (
        <div
          key={index}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          className="flex flex-col items-start gap-5"
        >
          {/* Title */}
          <h2 className="text-gray-800 text-3xl xl:text-5xl ">{item.title}</h2>

          {/* Description */}
          <p className="text-gray-700 text-lg lg:text-xl font-light leading-relaxed">
            {item.description}
          </p>

          {/* List */}
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {item.list.map((point, i) => (
              <li
                key={i}
                className="flex items-center gap-5 text-lg lg:text-xl"
              >
                <span className="text-secondary">
                  <CheckCheckIcon size={20} strokeWidth={1} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}