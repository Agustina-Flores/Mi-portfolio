import { SiReact, SiAngular,SiJavascript,SiNextdotjs,SiVercel,SiGit,SiTypescript, 
  SiDotnet, SiPostgresql,SiGithub,SiPostman,SiRender} from 'react-icons/si'; 

export const Skills = () =>
{
  return(
    <section id="tools" className="bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 py-16 px-6 text-black">
      <div data-aos="fade-up" className="max-w-5xl mx-auto grid gap-10">
          <p className="text-gray-700 mb-6"> 
           Tecnologías y herramientas que utilizo en desarrollo frontend, backend y despliegue.
           </p>
        <div>
          <h2 className="text-3xl font-bold mb-6">💻 Frontend Development</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiReact className="w-7 h-7 shrink-0" style={{ color: '#00aae4' }}/> React.js
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiAngular className="text-red-600 w-7 h-7 shrink-0" /> Angular
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiJavascript className="text-yellow-400 w-7 h-7 shrink-0" /> JavaScript ES6+
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiNextdotjs className="w-7 h-7 shrink-0" /> Next.js
            </li> 
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3"> 
              <SiTypescript className="w-7 h-7 shrink-0" style={{ color: '#22b7e9' }} />  TypeScript
            </li>
          </ul>
        </div>
    
        <div>
          <h2 className="text-3xl font-bold mb-6">⚙️ Backend Development</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <img src="https://cdn.worldvectorlogo.com/logos/c--4.svg" alt="C#" className="w-7 h-7 shrink-0" />
              C# / .NET
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiDotnet className="w-7 h-7 shrink-0" style={{ color: '#5e1c81ff' }}/> ASP.NET
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiPostgresql className="text-blue-300 w-7 h-7 shrink-0" /> PostgreSQL
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" className="w-7 h-7 shrink-0" />
              SQL Server
            </li> 
          </ul>
        </div>
    
        <div>
          <h2 className="text-3xl font-bold mb-6">🚀 Tools & Deployment </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiGit className="w-7 h-7 shrink-0" style={{ color: "#F05032" }} /> Git
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiGithub className="w-7 h-7 shrink-0" style={{ color: '#131313ff' }} /> GitHub
            </li>
          <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiPostman className="w-7 h-7 shrink-0" style={{ color: '#FF6C37' }} /> Postman
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiRender className="text-teal-300 w-7 h-7 shrink-0" /> Render
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiVercel className="w-7 h-7 shrink-0" style={{ color: "#000000" }}/> Vercel
            </li> 
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-7 h-7 shrink-0" />
            Docker
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" className="w-7 h-7 shrink-0" />
              Jira
            </li>   
          </ul>
        </div> 
      </div>
    </section>
    );
}