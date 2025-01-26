import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="H" className="w-full min-h-screen gap-10 max-container flex">
      <div className="mt-20 relaive flex flex-col justify-center items-start w-full">
        <p className="text-coral-red font-montserrat text-xl mt-4">
          Our Summer Collection
        </p>
        <h1 className=" mt-9 font-montserrat text-[60px] relative font-bold">
          <span>The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="max-w-sm font-montserrat mt-2 leading-8">
          Discover stylish Nike ar, quality comfort, and innovation for your
          active life.
        </p>
        <Link to="/products">
          <Button label="ShopNow" iconURl={arrowRight}></Button>
        </Link>
      </div>
      <div className="mt-44 mr-60">
        <img src={bigShoe1} alt="sh" width={910} height={700} />
      </div>
    </section>
  );
};

export default Hero;
