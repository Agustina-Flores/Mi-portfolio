import React from "react";
import AnimatedTitle from '../AnimatedTitle';

export const Title = () =>
{
return (
<div
  id="inicio"
  className="bg-gradient-to-r from-blue-500 via-indigo-700 to-purple-600 text-white min-h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-x-hidden"
>
  <AnimatedTitle
    text="Hola, soy Agustina Flores! 👩‍💻"
    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
  />
  <AnimatedTitle
    className="text-base sm:text-lg md:text-xl max-w-xl text-center leading-relaxed font-sans"
    text="Desarrolladora Fullstack Junior"
  />
  <p
    data-aos="fade-right"
    className="text-sm sm:text-base mt-3 text-purple-200 text-center"
  >
    ¡Explorá mis proyectos o conoceme más!
  </p>
</div>
  );
}