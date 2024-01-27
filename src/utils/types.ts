import { StaticImageData } from "next/image";

export type Products = {
  id: number;
  name: string;
  price: number;
  category: string;
  image : string | StaticImageData
  tagline : string
};
