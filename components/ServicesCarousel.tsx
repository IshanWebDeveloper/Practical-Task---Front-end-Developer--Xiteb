import { ServicesCard } from "./ServicesCard";
import { CircleArrowRightIcon } from "lucide-react";

const mockData: {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}[] = [
  {
    id: 1,
    title: "Air Freight Services",
    description:
      "At our Auto Servtce garage. we are fully appreciate how difficult occur it is for people to find.",
    imageUrl: "/air-freight-services.png",
  },
  {
    id: 2,
    title: "Drone Services",
    description:
      "These are unique and often they differ from one industry to the other. Our logistics expertise.",
    imageUrl: "/drone-services.png",
  },
];

const ServicesCarousel = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-center text-2xl md:text-5xl lg:text-4xl font-bold mb-4 leading-18">
        Our Services
      </h2>
      {/* Carousel */}
      <div className="w-full h-full flex flex-col px-[50px]">
        <div className="w-full h-full flex gap-5  ">
          {mockData.map((service) => (
            <ServicesCard
              description={service.description}
              serviceId={service?.id}
              imageUrl={service.imageUrl}
              title={service.title}
              key={service.id}
              className="p-0 w-fit pl-0 pr-0 h-auto flex flex-col justify-center items-center"
            />
          ))}
        </div>

        <div className="flex  items-center my-8 gap-2">
          <p className=" text-gray-400  font-bold text-base cursor-pointer">
            Logistic & Transport Solutions Saves Your Time.{" "}
            <span className="font-bold text-black">Finds Your Solutions</span>
          </p>
          <CircleArrowRightIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
