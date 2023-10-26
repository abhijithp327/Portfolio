import Header from "./components/header/Header";
import css from "./styles/app.module.scss";

import Experties from "./components/Experties/Experties";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/hero";

const App = () => {

  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Works />
      <Portfolio />
      <Education />
      <Footer />
    </div>
  )



};

export default App;
