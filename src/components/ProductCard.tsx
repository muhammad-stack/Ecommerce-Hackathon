import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import AddtoCart from "./AddtoCart";

const ProductsCard = (props: {
  title: string;
  price: number;
  image: StaticImageData;
  Category: string;
  id: number;
}) => {
  return (
    <div>
      <Link href={`/products/${props.id}`}>
        <div>
          <Image src={props.image} alt="Product" />
          <h3 className="font-bold text-lg mt-4">{props.title}</h3>
          <p className="font-serif text-lg "> ${props.price}</p>
          <p className="font-medium text-md  ">
            {" "}
            Category{" "}
            <span className="font-normal text-base capitalize">
              {props.Category}{" "}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
