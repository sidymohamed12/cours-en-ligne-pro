
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Book, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Votre plateforme éducative
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              nouvelle génération
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Découvrez une expérience d'apprentissage personnalisée pour élèves, enseignants et particuliers.
            Des cours interactifs, des quiz adaptés et une communauté engagée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gradient-primary text-white border-0 text-lg px-8 py-3">
              <User className="w-5 h-5 mr-2" />
              Commencer maintenant
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Book className="w-5 h-5 mr-2" />
              Découvrir les cours
            </Button>
          </div>

          {/* Cards des types d'utilisateurs */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Élèves</h3>
              <p className="text-sm text-muted-foreground">
                Apprenez à votre rythme avec des cours adaptés à votre niveau
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Book className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enseignants</h3>
              <p className="text-sm text-muted-foreground">
                Créez et partagez vos contenus pédagogiques facilement
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Administrateurs</h3>
              <p className="text-sm text-muted-foreground">
                Gérez votre établissement et suivez les progressions
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Particuliers</h3>
              <p className="text-sm text-muted-foreground">
                Formez-vous en continu selon vos objectifs professionnels
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
