import { products } from "../constants";
import PopularProductCard from "../Components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section id="PP" className="max-container">
      <div className="flex flex-col justify-start gap-5 ">
        <h2 className="font-palanquin font-bold text-4xl">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="max-w-lg font-montserrat mt-2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid grid-cols-4 mt-16">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
