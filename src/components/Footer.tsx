
import { Book, User, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Book className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                EduPlateforme
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Votre plateforme éducative moderne pour un apprentissage personnalisé et efficace.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#cours" className="text-muted-foreground hover:text-primary transition-colors">Cours</a></li>
              <li><a href="#matières" className="text-muted-foreground hover:text-primary transition-colors">Matières</a></li>
              <li><a href="#communauté" className="text-muted-foreground hover:text-primary transition-colors">Communauté</a></li>
            </ul>
          </div>

          {/* Utilisateurs */}
          <div>
            <h4 className="font-semibold mb-4">Utilisateurs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#élèves" className="text-muted-foreground hover:text-primary transition-colors">Élèves</a></li>
              <li><a href="#enseignants" className="text-muted-foreground hover:text-primary transition-colors">Enseignants</a></li>
              <li><a href="#administrateurs" className="text-muted-foreground hover:text-primary transition-colors">Administrateurs</a></li>
              <li><a href="#particuliers" className="text-muted-foreground hover:text-primary transition-colors">Particuliers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#aide" className="text-muted-foreground hover:text-primary transition-colors">Centre d'aide</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#accessibilité" className="text-muted-foreground hover:text-primary transition-colors">Accessibilité</a></li>
              <li><a href="#confidentialité" className="text-muted-foreground hover:text-primary transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EduPlateforme. Tous droits réservés. Plateforme éducative moderne et accessible.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
