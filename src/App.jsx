import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SuperQuality from "./sections/SuperQuality";
import Subscribe from "./sections/Subscribe";
import SpecialOffer from "./sections/SpecialOffer";
import ProductsPage from "./pages/ProductsPage";
import Trial from "./trial/Trial";
import Signin from "./Signin/Signin";

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
              </section>
              <section className="padding">
                <PopularProducts />
              </section>
              <section className="padding">
                <SuperQuality />
              </section>
              <section className="padding-x py-10">
                <Services />
              </section>
              <section className="padding">
                <SpecialOffer />
              </section>
              <section className="bg-pale-blue padding">
                <CustomerReviews />
              </section>
              <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
              </section>
              <section className="bg-black padding-x padding-t pb-8">
                <Footer />
              </section>
            </>
          }
        />

        {/* Products Page */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/trials" element={<Trial />} />
        <Route path="/logs" element={<Signin />} />
      </Routes>
    </main>
  </Router>
);

export default App;
