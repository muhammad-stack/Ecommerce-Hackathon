import Image from "next/image";
import Hero from "@/views/hero";
import ProductsList from "@/views/ProductsList";
import MainHero from "@/views/mainHero";

export default function Home() {
  return (
    <div>
      <Hero />

      <ProductsList />
    </div>
  );
}
