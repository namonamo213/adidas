const Button = ({ label, iconURl }) => {
  return (
    <button className=" flex justify-center items-center gap-4 mt-5 border px-5 py-2 rounded-full hover:bg-coral-red bg-transparent w-full">
      {label}

      {iconURl && <img src={iconURl} alt="" />}
    </button>
  );
};

export default Button;
