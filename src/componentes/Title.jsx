import React from "react";
import AnimatedTitle from '../AnimatedTitle';
import { Download } from 'lucide-react';

export const Title = () =>
{
return (
<div
    id="inicio"
    className="bg-gradient-to-r from-blue-500 via-indigo-700 to-purple-600 text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 overflow-x-hidden"

  > 
    <AnimatedTitle
      text="Hola 👩‍💻, soy Agustina Flores!"
      className="break-words text-center text-white text-2xl font-bold"
    /> 
    <AnimatedTitle
      className="text-base sm:text-lg md:text-xl max-w-xl text-center leading-relaxed font-sans"
      text="Desarrolladora Fullstack - Mendoza 🇦🇷"
    />
    <p
      data-aos="fade-right"
      className="text-sm sm:text-base mt-3 text-purple-200 text-center"
    >
      ¡Explorá mis proyectos o conoceme más!
    </p>
    <a
      href="/CV-Agustina-Flores.pdf"
      download
      className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition duration-300"
    >
      <Download className="w-4 h-4" />
      Descargar CV
    </a>
</div>
  );
}