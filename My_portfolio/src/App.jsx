import Header from "./components/header/Header";
import css from "./styles/app.module.scss";
import Hero from "./components/hero/Hero";

const App = () => {

  return <div className={`bg-primary ${css.container}`}>
   <Header/>
   <Hero/>
 </div>

  
};

export default App;
