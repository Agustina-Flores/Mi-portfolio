import React from "react";
import AnimatedTitle from '../AnimatedTitle';

export const Title = () =>
{
return (
    <div id="inicio" className="bg-gradient-to-r from-blue-500 via-indigo-700 to-purple-600 
    text-white py-60 flex flex-col items-center justify-center px-6">
      <AnimatedTitle
        text="Hola, soy Agustina Flores! 👩‍💻"
        className="text-4xl md:text-5xl font-bold mb-4"
      />
      <AnimatedTitle 
           className="text-lg md:text-xl max-w-lg text-center leading-relaxed font-sans"
           text="Desarrolladora Fullstack Junior" 
      />
      <p data-aos="fade-right" className="text-lg mt-2 text-purple-200">¡Explorá mis proyectos o conoceme más!</p>
    </div>
  );
}