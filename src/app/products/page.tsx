import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/mock";

import { StaticImageData } from "next/image";

const allProducts = () => {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-4 justify-evenly items-center py-10 gap-x-12  ">
        {products.map((item) => (
          <ProductCard
            id={item.id}
            key={item.id}
            title={item.name}
            price={item.price}
            image={item.image as StaticImageData}
            Category={item.category}
          />
        ))}
      </div>
    </div>
  );
};
export default allProducts;
