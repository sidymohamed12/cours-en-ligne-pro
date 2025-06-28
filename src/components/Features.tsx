
import { Card } from '@/components/ui/card';
import { Book, Calendar, User, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Book,
      title: "Contenus Pédagogiques Riches",
      description: "Cours interactifs, vidéos, PDF, exercices corrigés, quiz automatisés et évaluations personnalisées.",
      gradient: "gradient-primary"
    },
    {
      icon: User,
      title: "Profils Personnalisés",
      description: "Expérience adaptée selon votre statut : élève, enseignant, administrateur ou particulier.",
      gradient: "gradient-secondary"
    },
    {
      icon: Calendar,
      title: "Suivi de Progression",
      description: "Historique détaillé, statistiques, badges et certificats pour motiver votre apprentissage.",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      icon: Search,
      title: "Recherche Intelligente",
      description: "Trouvez rapidement vos cours avec des filtres avancés par matière, niveau et type de contenu.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une plateforme complète pour
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              tous vos besoins éducatifs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez toutes les fonctionnalités pensées pour améliorer votre expérience d'apprentissage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-0 glass-morphism">
              <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Section matières */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Matières disponibles</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Marketing", "Logistique", "Finance", "Comptabilité", 
              "Mathématiques", "Histoire", "SVT", "Informatique",
              "Droit", "Gestion", "Communication", "Langues"
            ].map((matiere, index) => (
              <Card key={index} className="px-4 py-2 hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer glass-morphism">
                <span className="text-sm font-medium">{matiere}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
