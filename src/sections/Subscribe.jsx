import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section className="flex flex-col gap-10 max-container justify-between items-center">
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>

      <div className="w-full">
        <Button label="Updates"></Button>
      </div>
    </section>
  );
};

export default Subscribe;
