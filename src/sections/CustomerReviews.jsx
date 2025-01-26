import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const CustomerReviews = () => {
  return (
    <section
      id="CR"
      className="flex max-container gap-10 justify-between items-center"
    >
      <div>
        <img src={offer} alt="" width={773} height={622} className=" w-full" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apar
        </p>
        <p className="mt-6 info-text max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional
        </p>
        <div className="flex gap-4">
          <Button label="Shop now" iconURl={arrowRight}></Button>
          <Button label="learn more"></Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
