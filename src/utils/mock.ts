import { Products } from "./types";
import p1 from "/public/p1.webp";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import p4 from "/public/p4.png";
import p5 from "/public/p5.png";
import p6 from "/public/p6.png";
import p7 from "/public/p7.png";
import p8 from "/public/p8.png";
import p9 from "/public/p9.png";
import p10 from "/public/p9.png";
import p11 from "/public/p11.png";

export const products: Products[] = [
  {
    id: 1,
    name: "Product 1",
    category: "female",
    price: 900,
    image: p3,
    tagline: "Dress",
  },

  {
    id: 2,
    name: "Product 2",
    category: "female",
    price: 1000,
    tagline: "Dress",
    image: p6,
  },
  {
    id: 3,
    name: "Product 3",
    category: "female",
    price: 12000,
    image: p7,
    tagline: "Dress",
  },

  {
    id: 4,
    tagline: "Dress",
    name: "Product 4",
    category: "male",
    price: 900,
    image: p5,
  },
  {
    id: 5,
    name: "Product 5",
    category: "male",
    price: 800,
    tagline: "Dress",
    image: p2,
  },
  {
    id: 6,
    name: "Product 6",
    category: "kids",
    price: 7600,
    image: p4,
    tagline: "Dress",
  },
  {
    id: 7,
    tagline: "Dress",
    name: "Product 7",
    category: "kids",
    price: 760,
    image: p5,
  },
  {
    id: 8,
    name: "Product 8",
    category: "kids",
    price: 890,
    tagline: "Dress",
    image: p8,
  },
  {
    id: 9,
    name: "Product 9",
    category: "female",
    price: 900,
    tagline: "Dress",
    image: p9,
  },
  {
    id: 11,
    name: "Product 11",
    tagline: "Dress",
    category: "female",
    price: 999,
    image: p11,
  },
];
