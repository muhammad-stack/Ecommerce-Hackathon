import { products } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import { StaticImageData } from "next/image";

const getProductbyCateg = (category: string) => {
  return products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductbyCateg(params.slug);
  return (
    <div>
      <div className="grid grid-cols-4 justify-evenly items-center py-10 gap-x-12 ">
        {
          result.length>0 ? result.map((item) => (
            <ProductCard
              id={item.id}
              key={item.id}
              title={item.name}
              price={item.price}
              image={item.image as StaticImageData}
              Category={item.category}
            />
          ))
   : <p> No Products Found </p>
        }
              </div>
    </div>
  );
}
