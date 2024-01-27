import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "@/../../public/header.webp";
import Image from "next/image";
import featured1 from "../../public/Featured1.webp";
import featured2 from "../../public/Featured2.webp";
import featured3 from "../../public/Featured3.webp";
import featured4 from "../../public/Featured4.webp";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col py-24 gap-y-10 lg:flex-row gap-x-2">
      {/* Left side Division */}

      <div className="flex-1">
        <Badge className="py-2 px-5 rounded-lg bg-blue-100 text-md">
          <span className="text-purple-700"> Sales 70%</span>
        </Badge>
        <h1 className="scroll-m-20 text-4xl text-amber-950 font-bold   lg:text-6xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit <br /> as long as
          you wear Dine outfits.
        </p>
        <Button className=" bg-neutral-800 hover:bg-emerald-950 shadow-white border-red-500 px-8 mx-2 mt-12   text-md gap-x-2 font-bold  ">
          {" "}
          <ShoppingCart /> Start Shopping{" "}
        </Button>
        <div className="mt-32 mx-4 flex gap-x-16 ">
          <Image src={featured1} alt="Featured Images1" />
          <Image src={featured2} alt="Featured Images2" />
          <Image src={featured3} alt="Featured Images3" />
          <Image src={featured4} alt="Featured Images4" />
        </div>
      </div>

      {/* Right Side div */}
      <div className=" -mx-8 bg-emerald-100 rounded-full  ">
        <Image src={heroImage} alt="hero" className="relative z-10" />
      </div>
    </section>
  );
};

export default Hero;
