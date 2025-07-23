import { SiReact, SiAngular,SiJavascript,SiHtml5,SiCss3,SiBootstrap,
  SiDotnet, SiPostgresql,SiGithub,SiPostman,SiRender} from 'react-icons/si';
    
export const Skills = () =>
{
  return(
    <section id="tools" className="bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 py-16 px-6 text-black">
      <div data-aos="fade-up" className="max-w-5xl mx-auto grid gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-6">💻 Frontend Development</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiReact className="w-7 h-7" style={{ color: '#00aae4' }}/> React.js
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiAngular className="text-red-600 w-7 h-7" /> Angular
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiJavascript className="text-yellow-400 w-7 h-7" /> JavaScript ES6+
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiBootstrap className="text-purple-500 w-7 h-7" /> Bootstrap
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiHtml5 className="w-7 h-7" style={{ color: '#FF6C37' }}/> HTML5
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiCss3 className="text-blue-500 w-7 h-7" /> CSS3
            </li>
          </ul>
        </div>
    
        <div>
          <h2 className="text-3xl font-bold mb-6">⚙️ Backend Development</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <img src="https://cdn.worldvectorlogo.com/logos/c--4.svg" alt="C#" className="w-7 h-7" />
              C# / .NET
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiDotnet className="w-7 h-7" style={{ color: '#5e1c81ff' }}/> ASP.NET
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiPostgresql className="text-blue-300 w-7 h-7" /> PostgreSQL
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" className="w-7 h-7" />
              SQL Server
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-7 h-7" />
              Node.js
            </li>
          </ul>
        </div>
    
        <div>
          <h2 className="text-3xl font-bold mb-6">🚀 Herramientas </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiGithub className="w-7 h-7" style={{ color: '#131313ff' }} /> Git & GitHub
            </li>
          <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiPostman className="w-7 h-7" style={{ color: '#FF6C37' }} /> Postman
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <SiRender className="text-teal-300 w-7 h-7" /> Render
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg" alt="JSON" className="w-7 h-7" />
              JSON
            </li>
            <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" className="w-7 h-7" />
              Jira
            </li>
          <li className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" className="w-7 h-7" />
            Visual Studio Code
          </li>
          </ul>
        </div>

      </div>
    </section>
    );
}