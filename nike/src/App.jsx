import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from "./sections"
import Nav from "./Components/nav/Nav";
import "./App.css";

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <Hero/>
      <PopularProducts/>
      <SuperQuality/>
      <Services/>
      <SpecialOffer/>
      <CustomerReviews/>
      <Subscribe/>
      <Footer />
    </main>
  )
}

export default App