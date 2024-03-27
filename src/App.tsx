import Header from "./components/Header";
import Compaines from "./components/Home/Compaines";
import Hero from "./components/Home/Hero";
import Showcase from "./components/Home/Showcase";

const App = () => {
  return (
    <div className="overflow-hidden min-h-screen bg-[#FCFCFC] relative">
      <Header />
      <Hero />
      <Compaines />
      <Showcase />
      {/* <Hero /> */}
    </div>
  );
};

export default App;
