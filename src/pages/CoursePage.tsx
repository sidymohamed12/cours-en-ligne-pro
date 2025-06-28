
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, User, Bell, Search, Calendar, User as UserIcon } from 'lucide-react';

const CoursePage = () => {
  const [selectedChapter, setSelectedChapter] = useState(1);

  const chapters = [
    { id: 1, title: "Introduction aux équations", duration: "15 min", completed: true },
    { id: 2, title: "Résolution par factorisation", duration: "20 min", completed: true },
    { id: 3, title: "Discriminant et solutions", duration: "25 min", completed: false },
    { id: 4, title: "Applications pratiques", duration: "18 min", completed: false }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Book className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              e-manaschool
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/student">Tableau de bord</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/profil">
                <User className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Liste des chapitres */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Équations du second degré</CardTitle>
                <p className="text-sm text-muted-foreground">Mathématiques - Terminale S</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        selectedChapter === chapter.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted/50 hover:bg-muted'
                      }`}
                      onClick={() => setSelectedChapter(chapter.id)}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{chapter.title}</p>
                        {chapter.completed && (
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-xs opacity-70">{chapter.duration}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Progression</span>
                    <span className="text-sm font-medium">50%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="gradient-primary h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{chapters.find(c => c.id === selectedChapter)?.title}</CardTitle>
                    <p className="text-muted-foreground">Durée: {chapters.find(c => c.id === selectedChapter)?.duration}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Télécharger PDF
                    </Button>
                    <Button size="sm">
                      Marquer comme terminé
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Simulation d'une vidéo */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[6px] border-l-gray-800 border-y-[4px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                    <p className="text-lg font-medium">Vidéo du cours</p>
                    <p className="text-sm opacity-70">Cliquez pour lancer la lecture</p>
                  </div>
                </div>

                {/* Contenu textuel */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Résumé du chapitre</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dans ce chapitre, nous allons découvrir les méthodes de résolution des équations du second degré. 
                    Nous verrons comment identifier une équation du second degré, calculer son discriminant et 
                    déterminer le nombre de solutions selon sa valeur.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-medium text-blue-900 mb-2">Point clé</h4>
                    <p className="text-blue-800 text-sm">
                      Une équation du second degré a la forme ax² + bx + c = 0 où a ≠ 0.
                    </p>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button variant="outline" className="flex-1">
                      Chapitre précédent
                    </Button>
                    <Button className="flex-1 gradient-primary text-white">
                      Chapitre suivant
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
