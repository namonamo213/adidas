import { services } from "../constants";
import Servicecard from "../Components/Servicecard";

const Services = () => {
  return (
    <section className="flex flex-wrap max-container justify-center gap-9">
      {services.map((service) => (
        <Servicecard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
