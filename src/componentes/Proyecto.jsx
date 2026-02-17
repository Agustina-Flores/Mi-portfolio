import veterinariaGif from '../assets/veterinaria.gif';
import homeGif from '../assets/home.gif';
import asistenteIa from '../assets/asistenteIA.png';
import asistenteIaResult from '../assets/asistenteIA-resultado.png';  

export const Proyectos = () => {

  const proyectos = [
    {
      titulo: "Sistema de Gestión Veterinaria",
      descripcion: "Aplicación web para gestionar turnos, pacientes y usuarios con control de roles (Administrador, Recepcionista, Veterinario). Desarrollada con Angular en el frontend y .NET Core en el backend.",
      gifHome: homeGif,
      gifAdmin: veterinariaGif,
      demo: "https://veterinaria-frontend-74k3.onrender.com/",
      repo: "https://github.com/Agustina-Flores/ProyectoVeterinaria"
    },
      {
      titulo: "Asistente de Texto con IA",
      descripcion: <>
        Aplicación web desarrollada con Next.js que permite procesar texto mediante integración con API externa.
        <br /><br />
        Implementa manejo seguro de variables de entorno, sistema de fallback en modo demo y despliegue en producción en Vercel.
      </>,
      asistenteIa: asistenteIa,
      asistenteIaResult: asistenteIaResult,
      demo: "https://ai-content-helper-sigma.vercel.app/",
      repo: "https://github.com/Agustina-Flores/Ai-content-helper-"
    }
  ];

   return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Proyectos</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-1 gap-12">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            data-aos="fade-right"
            className="bg-gray-100 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 p-8"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">{proyecto.titulo}</h3>
            <p className="text-gray-700 mb-6">{proyecto.descripcion}</p>

            {/* Sección Veterinaria */}
            {proyecto.gifHome && proyecto.gifAdmin && (
              <>
                <div className="mb-8" data-aos="fade-right">
                  <h4 className="text-xl font-semibold mb-2">Vista Home</h4>
                  <p className="mb-4 text-gray-700">
                    Pantalla de bienvenida al sistema, con carrusel de imágenes de mascotas y diseño intuitivo.
                  </p>
                  <img
                    src={proyecto.gifHome}
                    alt="Vista Home"
                    className="w-full h-[400px] object-cover rounded-lg shadow"
                  />
                </div>

                <div className="mb-8" data-aos="fade-right">
                  <h4 className="text-xl font-semibold mb-2">Vista por Rol: Administrador / Recepcionista / Veterinario</h4>
                  <p className="text-gray-700 mb-4">
                    Este panel permite gestionar turnos, pacientes y usuarios, con funcionalidades específicas según el rol asignado.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
                    <h5 className="font-semibold mb-2">🔐 Usuarios de prueba</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                      <li>👩‍💼 <strong>Administrador</strong> — <code>admin@gmail.com</code> / <code>admin123</code></li>
                      <li>💁‍♀️ <strong>Recepcionista</strong> — <code>recep@gmail.com</code> / <code>recep123</code></li>
                      <li>🩺 <strong>Veterinario</strong> — <code>vet@gmail.com</code> / <code>vet123</code></li>
                    </ul>
                  </div>
                  <img
                    src={proyecto.gifAdmin}
                    alt="Vista Administrador"
                    className="w-full h-[400px] object-cover rounded-lg shadow"
                  />
                </div>
              </>
            )}

            {/*Asistente IA */}
            {proyecto.asistenteIa && proyecto.asistenteIaResult && (
              <div className="mb-8" data-aos="fade-right">
                <img
                  src={proyecto.asistenteIa}
                  alt="Asistente IA"
                  className="w-full h-[400px] object-cover rounded-lg shadow mb-4"
                />
                <img
                  src={proyecto.asistenteIaResult}
                  alt="Resultado del Asistente IA"
                  className="w-full h-[400px] object-cover rounded-lg shadow"
                />
              </div>
            )}

            <div className="flex gap-4 mt-6">
              <a
                href={proyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Ver Demo
              </a>
              <a
                href={proyecto.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
              >
                Repositorio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};