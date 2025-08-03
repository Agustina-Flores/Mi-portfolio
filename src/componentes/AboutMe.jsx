import React from "react";
import imagen from '../assets/imagen1.png';

export const AboutMe = () =>
{
   return (
<section id="about" className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-600 text-white px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
     
    <div data-aos="fade-right">
      <h2 className="text-4xl font-bold text-white drop-shadow-md mb-6">
        Sobre mí
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        Soy desarrolladora fullstack. Tengo experiencia en .NET, Angular y PostgreSQL. Me apasiona crear soluciones tecnológicas funcionales, modernas y orientadas a las necesidades reales de los usuarios.
      </p>
      <p className="text-lg leading-relaxed">
        Valoro el trabajo en equipo, la mejora continua y la curiosidad como motor de aprendizaje. Mi objetivo es seguir creciendo como profesional en proyectos que me desafíen y aporten valor.
      </p>
    </div> 
    <div className="flex justify-center"data-aos="zoom-in">
      <img
        src={imagen}
        alt="Ilustración representativa"
        className="w-full max-w-md rounded-xl shadow-lg"
      />
    </div>
    
  </div>
</section>
  );
}