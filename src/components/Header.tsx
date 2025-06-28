
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Book, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-morphism">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Book className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              EduPlateforme
            </span>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors font-medium">
              Accueil
            </a>
            <a href="#cours" className="text-foreground hover:text-primary transition-colors font-medium">
              Cours
            </a>
            <a href="#matières" className="text-foreground hover:text-primary transition-colors font-medium">
              Matières
            </a>
            <a href="#communauté" className="text-foreground hover:text-primary transition-colors font-medium">
              Communauté
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Rechercher
            </Button>
            <Button variant="outline" size="sm">
              Connexion
            </Button>
            <Button className="gradient-primary text-white border-0" size="sm">
              <User className="w-4 h-4 mr-2" />
              S'inscrire
            </Button>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <Card className="md:hidden mt-4 p-4 glass-morphism">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="text-foreground hover:text-primary transition-colors font-medium">
                Accueil
              </a>
              <a href="#cours" className="text-foreground hover:text-primary transition-colors font-medium">
                Cours
              </a>
              <a href="#matières" className="text-foreground hover:text-primary transition-colors font-medium">
                Matières
              </a>
              <a href="#communauté" className="text-foreground hover:text-primary transition-colors font-medium">
                Communauté
              </a>
              <div className="pt-4 border-t flex flex-col space-y-2">
                <Button variant="outline" size="sm">
                  Connexion
                </Button>
                <Button className="gradient-primary text-white border-0" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  S'inscrire
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </header>
  );
};

export default Header;
