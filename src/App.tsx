import { useState, useEffect } from 'react';
import { Sun, Wind, Info, BarChart3, BookOpen, Brain, UserCircle, Trophy } from 'lucide-react';
import Simulator from './components/Simulator';
import EnergyTypes from './components/EnergyTypes';
import About from './components/About';
import Resources from './components/Resources';
import ImageCarousel from './components/ImageCarousel';
import Quiz from './components/Quiz';
import Auth from './components/Auth';
import Chatbot from './components/Chatbot';
import Ranking from './components/Ranking';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Debug log para monitorar mudanças no estado
  useEffect(() => {
    console.log('Active Section changed to:', activeSection);
  }, [activeSection]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  const handleNavClick = (section: string) => {
    console.log('handleNavClick called with section:', section);
    setActiveSection(section);
    setIsMenuOpen(false);
    
    // Scroll to top when navigating
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Função para renderizar o conteúdo principal
  const renderMainContent = () => {
    console.log('Rendering content for section:', activeSection);
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'types':
        return <EnergyTypes />;
      case 'simulator':
        return <Simulator />;
      case 'resources':
        return <Resources />;
      case 'quiz':
        return <Quiz isAuthenticated={isAuthenticated} />;
      case 'ranking':
        return <Ranking />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm relative">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">EcoEnergia</span>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => {
                  console.log('Menu button clicked, current state:', isMenuOpen);
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'about'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Info className="inline-block w-4 h-4 mr-1" />
                Sobre Nós
              </button>
              <button
                onClick={() => handleNavClick('types')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'types'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Wind className="inline-block w-4 h-4 mr-1" />
                Fontes de Energia
              </button>
              <button
                onClick={() => handleNavClick('simulator')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'simulator'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BarChart3 className="inline-block w-4 h-4 mr-1" />
                Simulador
              </button>
              <button
                onClick={() => handleNavClick('resources')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'resources'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="inline-block w-4 h-4 mr-1" />
                Materiais
              </button>
              <button
                onClick={() => handleNavClick('quiz')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'quiz'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Brain className="inline-block w-4 h-4 mr-1" />
                Quiz
              </button>
              <button
                onClick={() => handleNavClick('ranking')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'ranking'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Trophy className="inline-block w-4 h-4 mr-1" />
                Ranking
              </button>
              {!isAuthenticated ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <UserCircle className="inline-block w-4 h-4 mr-1" />
                  Entrar
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <UserCircle className="inline-block w-4 h-4 mr-1" />
                  Sair
                </button>
              )}
            </div>
          </div>

          {/* Mobile navigation menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  type="button"
                  onClick={() => handleNavClick('about')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'about'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Info className="inline-block w-4 h-4 mr-1" />
                  Sobre Nós
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('types')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'types'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Wind className="inline-block w-4 h-4 mr-1" />
                  Fontes de Energia
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('simulator')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'simulator'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BarChart3 className="inline-block w-4 h-4 mr-1" />
                  Simulador
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('resources')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'resources'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BookOpen className="inline-block w-4 h-4 mr-1" />
                  Materiais
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('quiz')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'quiz'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Brain className="inline-block w-4 h-4 mr-1" />
                  Quiz
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('ranking')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'ranking'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Trophy className="inline-block w-4 h-4 mr-1" />
                  Ranking
                </button>
                {!isAuthenticated ? (
                  <button
                    type="button"
                    onClick={() => {
                      setShowLogin(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <UserCircle className="inline-block w-4 h-4 mr-1" />
                    Entrar
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsAuthenticated(false);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <UserCircle className="inline-block w-4 h-4 mr-1" />
                    Sair
                  </button>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Image Carousel - Only show on About page */}
      {activeSection === 'about' && <ImageCarousel />}

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showLogin && <Auth onLogin={handleLogin} onClose={() => setShowLogin(false)} />}
        {renderMainContent()}
      </main>

      <Chatbot />

      {/* Footer */}
      <footer className="bg-white shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Sun className="h-6 w-6 text-yellow-500" />
              <span className="ml-2 text-lg font-semibold text-gray-900">EcoEnergia</span>
            </div>
            <div className="text-sm text-gray-600">
              © 2024 EcoEnergia. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;