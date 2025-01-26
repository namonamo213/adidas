import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="flex justify-start mt-8 gap-3">
        <img src={star} alt="" />
        <p className="font-montserrat text-slate-gray">4.5</p>
      </div>
      <div className="mt-4 font-montserrat font-bold">
        <h3 className="text-lg">{name}</h3>
        <p className="text-coral-red mt-2">{price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
