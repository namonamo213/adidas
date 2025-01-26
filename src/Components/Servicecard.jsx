const Servicecard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 rounded-[20px] px-10 py-16 w-full min-w-[300px] shadow-3xl">
      <div className="w-11 h-11 rounded-full justify-center items-center bg-coral-red flex">
        <img src={imgURL} alt="" width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default Servicecard;
