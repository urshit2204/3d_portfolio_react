import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Content */}
        <div className="text-white min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi all, I'm <span className="text-yellow-400">Urshit</span> 👋
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate Full Stack web Developer 🚀 with experience in building Website using 
            <span className="text-red-400"> HTML</span>, 
            <span className="text-purple-400"> JavaScript</span>, 
            <span className="text-blue-400"> Reactjs</span>, 
            <span className="text-green-400"> Nodejs</span>, 
            <span className="text-blue-400"> React Native</span>,
             and other cool technologies.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start h-10 w-10 space-x-6 mb-4">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="/contact" className="border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
