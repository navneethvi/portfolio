
import "./index.css"; // Ensure you import the CSS file

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-900 to-slate-700 font-cursive">
      <div className="text-center mb-24">
        <div className="text-white">
          <p className="text-4xl font-medium mb-8 font-xs font-cursive">Navaneeth Vinod</p>
          <ul className="list-none inline-flex justify-center p-0">
            <li className="mx-3">
              <a
                href="mailto:navaneethvinod27@gmail.com"
                className="text-3xl transition-transform transform hover:-translate-y-1"
              >
                <i className="fas fa-envelope-open-text text-white"></i>
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://discord.com/users/1103803413684293712"
                target="_blank"
                className="text-3xl transition-transform transform hover:-translate-y-1"
                rel="noopener noreferrer"
              >
                <i className="fab fa-discord text-white"></i>
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://twitter.com/NavaneethV50550"
                target="_blank"
                className="text-3xl transition-transform transform hover:-translate-y-1"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-white"></i>
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://www.instagram.com/navneethv_/"
                target="_blank"
                className="text-3xl transition-transform transform hover:-translate-y-1"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://github.com/navneethvi"
                target="_blank"
                className="text-3xl transition-transform transform hover:-translate-y-1"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-white"></i>
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://www.linkedin.com/in/navaneeth-v/"
                target="_blank"
                className="text-3xl transition-transform transform hover:-translate-y-1"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
