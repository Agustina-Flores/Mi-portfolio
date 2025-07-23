

export const Contacto = () =>
{   
    
return( 
 <footer id="contact" className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-10 px-6 mt-16">
    <div data-aos="zoom-out" className="max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold">📬 Contacto</h2>
      <p className="text-lg">Si querés contactarme, ¡no dudes en escribirme!</p>

    <div className="flex justify-center items-center gap-3 text-lg">
      <span>📧</span>
      <span>agustina.flores.mail@gmail.com</span>
    </div>

    <div className="flex justify-center items-center gap-3 text-lg">
      <span>📱</span>
      <span>261 265 2432</span>
    </div>

    <div className="flex justify-center gap-6 mt-6">
      <a href="https://github.com/Agustina-Flores" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="GitHub" className="w-7 h-7 hover:scale-110 transition-transform" />
      </a>
      <a href="https://www.linkedin.com/in/agustina-floress/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn" className="w-7 h-7 hover:scale-110 transition-transform" />
      </a>
      </div>
    </div>
  </footer>
);
}