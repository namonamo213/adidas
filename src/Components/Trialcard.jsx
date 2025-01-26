const Trialcard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-4">
        <img src={imgURL} alt="" width={320} height={240} />
      </div>
      <div className="">
        <h3 className="mt-2 font-bold">{name}</h3>
        <h3 className="mt-3 font-bold">{price}</h3>
      </div>
    </div>
  );
};

export default Trialcard;
