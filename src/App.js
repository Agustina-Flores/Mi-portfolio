import { useEffect } from "react";
import { AboutMe } from "./componentes/AboutMe";
import { Contacto } from "./componentes/Contacto";
import Header from "./componentes/Header";
import { Proyectos } from "./componentes/Proyecto";
import { Skills } from "./componentes/Skills";
import { Title } from "./componentes/Title";
 import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <div className="App">
      <Title />
      <Header />
      <AboutMe/>
      <Proyectos />
      <Skills />
      <Contacto />
    </div>
  );
}

export default App;