import Image from "next/image";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";
import NavBar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import ServicesCarousel from "@/components/ServicesCarousel";

export default function Home() {
  return (
    <main className="bg-white flex flex-col  ">
      <NavBar />
      {/* Hero section */}
      <section className="relative w-full h-[526px] ">
        <div className=" mx-auto px-4 grid md:grid-cols-3 gap-8 relative">
          <div className="absolute z-50 left-16 top-5 py-16  flex flex-col bg-white justify-center w-[675px]">
            <div className="border-l-4 border-yellow-500 pl-4 mb-4">
              <span className="text-sm font-bold leading-2 tracking-widest">
                LOGISTIC
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Best Shipping
              <br />
              <span className="text-yellow-500">Partner</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Amet, tempus egestas facilisis volutpat viverra molestie lobortis
              posuere maecenas, molestie lobortis posuere maecenas. Eget sapien,
              gravida nequi.
            </p>
            <div>
              <Link
                href="#"
                className="bg-yellow-500 text-white px-6 py-3 text-sm font-medium inline-block tracking-wider"
              >
                DISCOVER MORE
              </Link>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 z-60 flex items-center bg-yellow-500 px-6 py-2 h-[60px] ">
          <div className="  flex items-center gap-2 text-white">
            <span>2 / 4</span>
            <div className="flex items-center gap-2">
              <MoveLeft className="h-5 w-5" />
              <MoveRight className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-7 w-fit md:w-[945px] ">
          <Image
            src="/hero_image.jpeg"
            alt="Shipping container cranes at port"
            width={945}
            height={526}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="absolute   -right-[99px] top-[250px] items-center   flex-nowrap text-nowrap rotate-90">
          <div className="  text-black text-lg font-bold tracking-widest rotate-180 ">
            #CARGOTON LOGISTIC
          </div>
        </div>
      </section>
      {/* Welcome section */}
      <section className="w-full flex gap-5 p-3">
        <div className=" flex-1/2 justify-center items-center flex flex-col">
          {" "}
          <Image
            src="/welcome-image_2.png"
            alt="welcome image"
            width={945}
            height={526}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="flex-1/2 justify-center items-center flex flex-col pl-3.5">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-18">
              TransMax Logistics Around{" "}
              <span className="text-[#ff7938]">the World</span>
            </h2>
            <p className="text-gray-600 mb-2 max-w-xl font-semibold">
              Transmax is the world&apos;s driving worldwide coordinations
              supplier — we uphold industry and exchange the worldwide trade of
              merchandise through land transport.
            </p>
            <p className="text-gray-600 mb-2 max-w-xl font-normal">
              Our worth added administrations guarantee the progression of
              products proceeds consistently and supply chains stay lean and
              streamlined for progress.
            </p>
            <Button asChild variant={"outline"} className="w-fit">
              <Link href="/" className="text-chart-2">
                More about us
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Services section */}

      <section className="w-full flex gap-5 p-3">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <h3 className="text-center text-chart-2 font-bold">
            Real Solution. Real Fast!
          </h3>
          <h2 className="text-center text-2xl md:text-5xl lg:text-4xl font-bold mb-4 leading-18">
            Best Global Logistics Solutions.
          </h2>
          <ServicesCarousel />
        </div>
      </section>
      {/* Stats section */}
      <section className="w-full flex items-center justify-center p-3">
        <Image
          src="/stats.png"
          alt="welcome image"
          width={945}
          height={526}
          className="w-full h-full object-contain"
          priority
        />
      </section>
      {/* Testimonials & Why Choose Us Section */}
      <section className="w-full flex items-center justify-center px-[50px] py-3 gap-2">
        {/* Trusted clients */}
        <div className="flex-1/2">
          <div className="">
            <h2 className="font-bold tracking-wider text-2xl">
              TRUSTED CLIENTS
            </h2>
            <p className="text-gray-400 tracking-widest mt-3 font-semibold">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR
            </p>
          </div>
        </div>
        {/* why choose us */}
        <div className="flex-1/2">
          <div className="">
            <h2 className="font-bold tracking-wider text-2xl">WHY CHOOSE US</h2>
            <p className="text-gray-400 tracking-widest mt-3 font-semibold">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR
            </p>
          </div>
        </div>
      </section>
      {/* clients logos */}
      <section className="w-full flex items-center justify-center px-[50px] py-3 gap-2 my-6">
        <Image
          src="/clients_logo.png"
          alt="clients logos"
          width={945}
          height={526}
          className="w-full h-full object-contain"
          priority
        />
      </section>
    </main>
  );
}
