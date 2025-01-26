import { shoe8 } from "../assets/images";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const SuperQuality = () => {
  return (
    <section
      id="SQ"
      className="flex max-container justify-between items-center w-full "
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin font-bold text-4xl">
          We Provide You
          <span className="text-coral-red"> Super </span> <br />
          <span className="text-coral-red">Quality </span> Shoes
        </h2>

        <p className="font-montserrat mt-4 max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <div className="mt-2">
          <Link to="/trials">
            <Button label="View"></Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="" width={400} height={322} />
      </div>
    </section>
  );
};

export default SuperQuality;
