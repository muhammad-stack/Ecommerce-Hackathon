import { StaticImageData } from "next/image";

import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/mock";

const ProductsList = () => {
  const productChunks = products.slice(0, 3);

  return (
    <div className="flex justify-evenly py-10 ">
      {productChunks.map((item) => (
        <ProductCard
          id={item.id}
          key={item.id}
          title={item.name}
          price={item.price}
          image={item.image as StaticImageData}
          Category={item.category}
        />
      ))}

      {/* <ProductCard title="Sweat Shirt" price={100} image={p1} />
      <ProductCard title="Jacket" price={200} image={p2} />
      <ProductCard title="Shirt" price={600} image={p3} /> */}
    </div>
  );
};

export default ProductsList;
