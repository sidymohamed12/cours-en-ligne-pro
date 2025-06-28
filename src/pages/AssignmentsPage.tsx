
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, User, Bell, Calendar, User as UserIcon } from 'lucide-react';

const AssignmentsPage = () => {
  const assignments = [
    { 
      id: 1, 
      title: "Devoir de Mathématiques", 
      subject: "Mathématiques", 
      dueDate: "2024-01-15", 
      status: "pending",
      description: "Résolution d'équations du second degré"
    },
    { 
      id: 2, 
      title: "Exposé d'Histoire", 
      subject: "Histoire", 
      dueDate: "2024-01-18", 
      status: "pending",
      description: "La Révolution française et ses conséquences"
    },
    { 
      id: 3, 
      title: "TP de SVT", 
      subject: "SVT", 
      dueDate: "2024-01-20", 
      status: "pending",
      description: "Étude de la photosynthèse"
    }
  ];

  const completedAssignments = [
    { 
      id: 4, 
      title: "Quiz de Physique", 
      subject: "Physique", 
      completedDate: "2024-01-10", 
      grade: "16/20",
      status: "completed"
    },
    { 
      id: 5, 
      title: "Dissertation de Français", 
      subject: "Français", 
      completedDate: "2024-01-08", 
      grade: "14/20",
      status: "completed"
    }
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
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Mes devoirs</h1>
          <p className="text-muted-foreground">Gérez vos devoirs et consultez vos notes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Devoirs à rendre */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Devoirs à rendre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-medium">{assignment.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{assignment.subject}</p>
                          <p className="text-sm">{assignment.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-sm font-medium text-orange-600">
                            Échéance: {assignment.dueDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" className="gradient-primary text-white">
                          Soumettre
                        </Button>
                        <Button size="sm" variant="outline">
                          Voir détails
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Devoirs terminés */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Devoirs terminés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedAssignments.map((assignment) => (
                    <div key={assignment.id} className="border rounded-lg p-4 bg-green-50 border-green-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-medium">{assignment.title}</h3>
                          <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-lg font-bold text-green-600">{assignment.grade}</p>
                          <p className="text-xs text-muted-foreground">
                            Rendu le {assignment.completedDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" variant="outline">
                          Voir correction
                        </Button>
                        <Button size="sm" variant="ghost">
                          Télécharger
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Statistiques */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Vos statistiques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-sm text-muted-foreground">Taux de réussite</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">15.2/20</p>
                    <p className="text-sm text-muted-foreground">Moyenne générale</p>
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

export default AssignmentsPage;
