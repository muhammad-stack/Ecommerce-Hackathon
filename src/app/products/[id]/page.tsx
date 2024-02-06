import AddtoCart from "@/components/AddtoCart";
import Quantity from "@/components/Quantity";
import { products } from "@/utils/mock";
import { Divide } from "lucide-react";
import Image from "next/image";

const getProductsDetail = (id: number | string) => {
  return products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const sizes = ["xs", "sm", "md", "lg", "xl"];
  const result = getProductsDetail(params.id);

  return (
    <section>
      <div className="flex  py-14 flex-wrap  ">
        {result.map((item) => (
          // Left Image
          // Left Image
          <div key={item.id} className="flex gap-x-8">
            <div>
              <Image src={item.image} alt={item.name} width={100} />
            </div>
            <div>
              <Image
                src={item.image}
                alt={item.name}
                height={900}
                width={699}
                className=""
              />
            </div>

            {/* Right Hand Side */}
            <div>
              <h1 className="text-[30.69px] font-medium ">{item.name}</h1>
              <h3 className="text- text-lg font-semibold text-gray-400">
                {item.tagline}
              </h3>
              <h3 className="text-[25px] font-semibold py-6">Select Size</h3>
              <div className="flex gap-x-6">
                {sizes.map((variants) => (
                  <div className="w-10 h-10 rounded-full hover:shadow-xl duration-200 border-lime-50 center ">
                    <span className="text-[21px] font-bold p-4  text-gray-600 pl-2  ">
                      {variants}
                    </span>
                  </div>
                ))}
              </div>
              {/* Quantity */}
              <div className="flex gap-x-3 mt-6 items-center">
                <h3 className="text-[14px] font-semibold text-md">Quantity:</h3>
                <Quantity />
              </div>
              <div className="flex center gap-x-3 -ml-10">
                <AddtoCart />
                <h2 className="text-2xl font-bold ">
                  ${item.price.toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
