
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Calendar, Bell, User, Search } from 'lucide-react';

const StudentDashboard = () => {
  const upcomingAssignments = [
    { id: 1, title: "Devoir de Mathématiques", dueDate: "2024-01-15", subject: "Mathématiques" },
    { id: 2, title: "Exposé d'Histoire", dueDate: "2024-01-18", subject: "Histoire" },
    { id: 3, title: "TP de SVT", dueDate: "2024-01-20", subject: "SVT" }
  ];

  const recentCourses = [
    { id: 1, title: "Équations du second degré", subject: "Mathématiques", progress: 75 },
    { id: 2, title: "La Révolution française", subject: "Histoire", progress: 60 },
    { id: 3, title: "La photosynthèse", subject: "SVT", progress: 90 }
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
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
          <p className="text-muted-foreground">Bienvenue sur votre espace étudiant</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendrier et notifications */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Devoirs à rendre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{assignment.dueDate}</p>
                        <Button size="sm" variant="outline" asChild>
                          <Link to="/devoirs">Voir</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link to="/devoirs">Voir tous les devoirs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Cours récents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{course.title}</h3>
                        <span className="text-sm text-muted-foreground">{course.subject}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mb-2">
                        <div 
                          className="gradient-primary h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{course.progress}% terminé</span>
                        <Button size="sm" asChild>
                          <Link to="/cours">Continuer</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <p className="text-sm font-medium">Nouveau cours disponible</p>
                    <p className="text-xs text-muted-foreground">Mathématiques - Il y a 2h</p>
                  </div>
                  <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                    <p className="text-sm font-medium">Devoir corrigé</p>
                    <p className="text-xs text-muted-foreground">Histoire - Il y a 1 jour</p>
                  </div>
                  <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
                    <p className="text-sm font-medium">Rappel: Devoir à rendre</p>
                    <p className="text-xs text-muted-foreground">SVT - Dans 2 jours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accès rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/cours">
                    <Book className="w-4 h-4 mr-2" />
                    Parcourir les cours
                  </Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/messagerie">
                    <Search className="w-4 h-4 mr-2" />
                    Assistance
                  </Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/profil">
                    <User className="w-4 h-4 mr-2" />
                    Mon profil
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
