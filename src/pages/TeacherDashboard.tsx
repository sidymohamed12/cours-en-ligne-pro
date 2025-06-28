
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, User, Bell, Calendar, User as UserIcon } from 'lucide-react';

const TeacherDashboard = () => {
  const students = [
    { id: 1, name: "Marie Dupont", class: "Terminale S", average: "16.5" },
    { id: 2, name: "Jean Martin", class: "Terminale S", average: "14.2" },
    { id: 3, name: "Sophie Bernard", class: "Première ES", average: "15.8" }
  ];

  const courses = [
    { id: 1, title: "Équations du second degré", students: 25, progress: "En cours" },
    { id: 2, title: "Fonctions logarithmes", students: 18, progress: "Terminé" },
    { id: 3, title: "Probabilités", students: 22, progress: "Planifié" }
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
          <h1 className="text-3xl font-bold mb-2">Espace Enseignant</h1>
          <p className="text-muted-foreground">Gérez vos cours et suivez vos étudiants</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Gestion des étudiants */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <UserIcon className="w-5 h-5 mr-2" />
                  Mes étudiants
                </span>
                <Button size="sm" variant="outline">Ajouter</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.class}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{student.average}/20</p>
                      <Button size="sm" variant="outline">Voir profil</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gestion des cours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Mes cours
                </span>
                <Button size="sm" className="gradient-primary text-white">Nouveau cours</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {courses.map((course) => (
                  <div key={course.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{course.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        course.progress === 'En cours' ? 'bg-blue-100 text-blue-700' :
                        course.progress === 'Terminé' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {course.progress}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{course.students} étudiants inscrits</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Modifier</Button>
                      <Button size="sm" variant="outline">Statistiques</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistiques de performance */}
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Suivi des performances</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">65</p>
                  <p className="text-sm text-muted-foreground">Total étudiants</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">12</p>
                  <p className="text-sm text-muted-foreground">Cours actifs</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">87%</p>
                  <p className="text-sm text-muted-foreground">Taux de réussite</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">24</p>
                  <p className="text-sm text-muted-foreground">Devoirs corrigés</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
